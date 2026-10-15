import { render } from "@react-email/render"
import WeddingInvitation from "../../emails/wedding-invitation"

// Shared settings for every email we send, so the test and bulk routes can't drift apart.
export const FROM = "ines & filip <hello@stanjunger.wedding>"
export const SUBJECT = "one ceremony down"

// stanjunger.wedding has no inbox (no MX record), so replies to hello@ bounce.
// Set REPLY_TO_EMAIL in .env.local so guests' replies reach a real inbox.
export const REPLY_TO = process.env.REPLY_TO_EMAIL || undefined

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function isValidEmail(email: string) {
  return EMAIL_RE.test(email)
}

// Render once per send: HTML plus a plain-text version (multipart emails are less likely to land in spam).
export async function renderInvitation() {
  const element = WeddingInvitation()
  const [html, text] = await Promise.all([
    render(element),
    render(element, { plainText: true }),
  ])
  return { html, text }
}
