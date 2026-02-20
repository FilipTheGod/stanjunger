import {
  Body,
  Container,
  Head,
  Html,
  Section,
  Text,
} from "@react-email/components"
import * as React from "react"

export default function WeddingInvitation() {
  return (
    <Html>
      <Head />
      <Body style={main}>
        <Container style={container}>
          <Section style={content}>
            <Text style={resendNote}>
              (resent because of wrong subject line, oops!)
            </Text>

            <Text style={greeting}>
              hi friends,
            </Text>

            <Text style={paragraph}>
              we're becoming increasingly aware that, due to the unpredictable timing of our legal immigration process, there is a chance we may not be able to travel as planned by the time of our wedding. at this point, we're not making any changes to our date, but we ask that you hold off on booking flights or making firm travel plans until late spring, when we hope to have more clarity.
            </Text>

            <Text style={paragraph}>
              we know many of you would be traveling a long way for this, and we're truly sorry to ask you to wait. the delays we're facing are outside of our control, but celebrating with you means the world to us, so we want to make sure we can do that without uncertainty hanging over it.
            </Text>

            <Text style={paragraph}>
              we promise to keep you updated and will share more news as soon as we can.
            </Text>

            <Text style={signature}>
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

const content = {
  textAlign: "left" as const,
}

const resendNote = {
  fontSize: "12px",
  fontWeight: "600",
  color: "#6b7280",
  lineHeight: "1.5",
  marginBottom: "24px",
  textTransform: "lowercase" as const,
}

const greeting = {
  fontSize: "16px",
  fontWeight: "300",
  color: "#000000",
  lineHeight: "1.7",
  marginBottom: "24px",
  textTransform: "lowercase" as const,
}

const paragraph = {
  fontSize: "16px",
  fontWeight: "300",
  color: "#000000",
  lineHeight: "1.7",
  marginBottom: "24px",
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