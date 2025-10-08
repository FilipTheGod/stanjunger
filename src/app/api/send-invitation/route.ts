import { Resend } from 'resend';
import { NextResponse } from 'next/server';
import WeddingInvitation from '../../../../emails/wedding-invitation';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { to } = await request.json();

    const { data, error } = await resend.emails.send({
      from: 'Ines & Filip <onboarding@resend.dev>', // Update this with your verified domain
      to: [to],
      subject: 'you\'re invited to our wedding!',
      react: WeddingInvitation(),
    });

    if (error) {
      return NextResponse.json({ error }, { status: 400 });
    }

    return NextResponse.json({ data });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}