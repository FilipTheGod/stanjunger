import { Resend } from "resend"
import { NextResponse } from "next/server"
import { FROM, REPLY_TO, SUBJECT, isValidEmail, renderInvitation } from "@/lib/email"

const resend = new Resend(process.env.RESEND_API_KEY)

// Resend's batch endpoint accepts up to 100 emails per request,
// which avoids the per-second rate limit that one-by-one sending runs into.
const BATCH_SIZE = 100

type Result = { email: string; success: boolean; id?: string; error?: string }

export async function POST(request: Request) {
  try {
    const { recipients } = await request.json()

    if (!Array.isArray(recipients)) {
      return NextResponse.json({ error: "recipients must be an array" }, { status: 400 })
    }

    // Dedupe case-insensitively so nobody gets the email twice
    const unique = [
      ...new Map(
        recipients
          .map((e: string) => String(e).trim())
          .filter(Boolean)
          .map((e: string) => [e.toLowerCase(), e])
      ).values(),
    ]

    const results: Result[] = []
    const valid = unique.filter((email) => {
      if (isValidEmail(email)) return true
      results.push({ email, success: false, error: "invalid email address" })
      return false
    })

    const { html, text } = await renderInvitation()
    const batchTag = new Date().toISOString().split("T")[0]

    for (let i = 0; i < valid.length; i += BATCH_SIZE) {
      const chunk = valid.slice(i, i + BATCH_SIZE)

      // Each guest gets their own email (own "to"), so addresses aren't exposed to each other
      const { data, error } = await resend.batch.send(
        chunk.map((email) => ({
          from: FROM,
          to: [email],
          replyTo: REPLY_TO,
          subject: SUBJECT,
          html,
          text,
          tags: [
            { name: "category", value: "wedding_invitation" },
            { name: "batch", value: batchTag },
          ],
        }))
      )

      if (error || !data) {
        for (const email of chunk) {
          results.push({ email, success: false, error: error?.message ?? "unknown error" })
        }
      } else {
        chunk.forEach((email, j) => {
          results.push({ email, success: true, id: data.data[j]?.id })
        })
      }
    }

    return NextResponse.json({ results })
  } catch (error) {
    return NextResponse.json({ error: String(error) }, { status: 500 })
  }
}
