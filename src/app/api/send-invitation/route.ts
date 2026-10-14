import { Resend } from "resend"
import { NextResponse } from "next/server"
import { FROM, REPLY_TO, SUBJECT, isValidEmail, renderInvitation } from "@/lib/email"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const { to } = await request.json()

    if (typeof to !== "string" || !isValidEmail(to.trim())) {
      return NextResponse.json({ error: { message: "invalid email address" } }, { status: 400 })
    }

    const { html, text } = await renderInvitation()

    const { data, error } = await resend.emails.send({
      from: FROM,
      to: [to.trim()],
      replyTo: REPLY_TO,
      subject: SUBJECT,
      html,
      text,
      tags: [{ name: "category", value: "test" }],
    })

    if (error) {
      return NextResponse.json({ error }, { status: 400 })
    }

    return NextResponse.json({ data })
  } catch (error) {
    return NextResponse.json({ error: { message: String(error) } }, { status: 500 })
  }
}
