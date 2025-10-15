import WeddingInvitation from "../../../../emails/wedding-invitation"
import { Resend } from "resend"
import { NextResponse } from "next/server"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const { to } = await request.json()

    const { data, error } = await resend.emails.send({
      from: "ines & filip <hello@stanjunger.wedding>",
      to: [to],
      subject: "save the date!",
      react: WeddingInvitation(),
    })

    if (error) {
      return NextResponse.json({ error }, { status: 400 })
    }

    return NextResponse.json({ data })
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 })
  }
}
