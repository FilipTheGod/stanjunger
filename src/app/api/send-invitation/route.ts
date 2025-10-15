import WeddingInvitation from "../../../../emails/wedding-invitation"
import { Resend } from "resend"
import { NextResponse } from "next/server"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const { to } = await request.json()

    // Sanitize email for tag (replace @ and . with underscores)
    const sanitizedEmail = to.replace(/[@.]/g, '_')

    const { data, error } = await resend.emails.send({
      from: "ines & filip <hello@stanjunger.wedding>",
      to: [to],
      subject: "save the date!",
      react: WeddingInvitation(),
      // Enable click tracking with tags
      tags: [
        {
          name: "category",
          value: "wedding_invitation"
        },
        {
          name: "recipient",
          value: sanitizedEmail
        }
      ]
    })

    if (error) {
      return NextResponse.json({ error }, { status: 400 })
    }

    return NextResponse.json({ data })
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 })
  }
}