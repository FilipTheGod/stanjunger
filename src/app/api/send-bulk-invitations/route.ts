import { Resend } from "resend"
import { NextResponse } from "next/server"
import WeddingInvitation from "../../../../emails/wedding-invitation"
const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const { recipients } = await request.json()

    // Send emails one by one to stay within rate limits
    const results = []

    for (const email of recipients) {
      // Sanitize email for tag (replace @ and . with underscores)
      const sanitizedEmail = email.replace(/[@.]/g, '_')

      const { data, error } = await resend.emails.send({
        from: "ines & filip <hello@stanjunger.wedding>",
        to: [email],
        subject: "a small update",
        react: WeddingInvitation(),
        // Enable open tracking with tags
        tags: [
          {
            name: "category",
            value: "wedding_invitation"
          },
          {
            name: "recipient",
            value: sanitizedEmail
          },
          {
            name: "batch",
            value: new Date().toISOString().split('T')[0] // Date of sending
          }
        ]
      })

      if (error) {
        results.push({ email, success: false, error })
      } else {
        results.push({ email, success: true, data })
      }

      // Add a small delay between emails to avoid rate limiting
      await new Promise((resolve) => setTimeout(resolve, 100))
    }

    return NextResponse.json({ results })
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 })
  }
}