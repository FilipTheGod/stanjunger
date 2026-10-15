import {
  Body,
  Container,
  Head,
  Html,
  Img,
  Preview,
  Section,
  Text,
} from "@react-email/components"
import * as React from "react"

// Images load from the live site (public/email/), because guests open the email on
// their own devices. New or changed images must be deployed before sending.
const baseUrl = "https://www.stanjunger.wedding"

export default function WeddingInvitation() {
  return (
    <Html>
      <Head />
      <Preview>surprise, we’re married!</Preview>
      <Body style={main}>
        <Container style={container}>
          {/* Transparent PNG (Gmail blocks SVG) with a thin white halo so it stays visible in dark mode */}
          <Img
            src={`${baseUrl}/email/cat.png`}
            alt="dancing cat"
            width="64"
            height="91"
            style={cat}
          />
          <Section style={content}>
            <Text style={greeting}>hi friends,</Text>
            <Text style={paragraph}>surprise, we’re married!</Text>
            <Text style={paragraph}>
              on the 2nd of october, we had our civil ceremony here in new
              york. some of you were able to join us on short notice, but we
              wanted to send this little note to share the happy news with
              everyone.
            </Text>
            <Img
              src={`${baseUrl}/email/wedding.jpg`}
              alt="ines and filip on their wedding day"
              width="560"
              style={photo}
            />
            <Text style={paragraph}>
              we’re still waiting to sort a few boring things before we’re
              clear to start planning the main event in romania, but should
              have an update sometime soon.
            </Text>
            <Text style={signature}>
              with love,
              <br />
              ines & filip
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  )
}

const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    'Montserrat, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
}

const container = {
  margin: "0 auto",
  padding: "40px 20px",
  maxWidth: "600px",
}

const cat = {
  margin: "0 auto 40px",
  display: "block",
}

const content = {
  textAlign: "left" as const,
}

const photo = {
  width: "100%",
  maxWidth: "560px",
  height: "auto",
  display: "block",
  margin: "32px auto",
}

const greeting = {
  fontSize: "16px",
  fontWeight: "300",
  color: "#000000",
  lineHeight: "1.7",
  marginBottom: "20px",
  textTransform: "lowercase" as const,
}

const paragraph = {
  fontSize: "16px",
  fontWeight: "300",
  color: "#000000",
  lineHeight: "1.7",
  marginBottom: "20px",
  textTransform: "lowercase" as const,
}

const signature = {
  fontSize: "16px",
  fontWeight: "300",
  color: "#000000",
  lineHeight: "1.7",
  marginTop: "32px",
  textTransform: "lowercase" as const,
}
