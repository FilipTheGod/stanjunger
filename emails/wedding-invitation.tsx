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
            <Text style={greeting}>
              hi friends,
            </Text>
            <Text style={paragraph}>
              we have an update to share: our wedding will be moving to may 2027.
            </Text>
            <Text style={paragraph}>
              everything is okay! we promise.
            </Text>
            <Text style={paragraph}>
              after everything we've gone through with our immigration process, we decided that when our wedding day comes, we want it to feel exactly like it should: happy, relaxed, and free from any stress.
            </Text>
            <Text style={paragraph}>
              pushing the date back by a year gives us the time to make sure that's the case.
            </Text>
            <Text style={paragraph}>
              we are so grateful for your patience and understanding through all of this.
            </Text>
            <Text style={paragraph}>
              we'll be back with a new date and updated details as soon as we have them.
            </Text>
            <Text style={paragraph}>
              in the meantime, please hold off on any travel bookings around that time :)
            </Text>
            <Text style={paragraph}>
              thank you for everything, we love you.
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