import {
  Body,
  Button,
  Container,
  Head,
  Html,
  Img,
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
          {/* Top text */}
          <Section style={topSection}>
            <Text style={topText}>we're getting married!</Text>
          </Section>

          {/* Save the date image with cat */}
          <Section style={imageSection}>
            <Img
              src="../public/save-the-date.png"
              width="400"
              alt="Save the date"
              style={saveTheDateImage}
            />
          </Section>

          {/* Names and details */}
          <Section style={detailsSection}>
            <Text style={names}>ines & filip</Text>
            <Text style={date}>29.08.2026</Text>
            <Text style={location}>prod, romania</Text>
          </Section>

          {/* Bottom text */}
          <Section style={bottomSection}>
            <Text style={bottomText}>formal invitation to follow</Text>
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
  padding: "40px 20px",
}

const container = {
  margin: "0 auto",
  maxWidth: "600px",
  backgroundColor: "#f9f9f9",
  padding: "60px 40px",
}

const topSection = {
  textAlign: "center" as const,
  marginBottom: "40px",
}

const topText = {
  fontSize: "18px",
  fontWeight: "200",
  color: "#666666",
  fontStyle: "italic",
  margin: "0",
}

const imageSection = {
  textAlign: "center" as const,
  marginBottom: "40px",
}

const saveTheDateImage = {
  margin: "0 auto",
  maxWidth: "100%",
  height: "auto",
}

const detailsSection = {
  textAlign: "center" as const,
  marginBottom: "60px",
}

const names = {
  fontSize: "16px",
  fontWeight: "400",
  color: "#333333",
  letterSpacing: "2px",
  textTransform: "uppercase" as const,
  margin: "0 0 12px 0",
}

const date = {
  fontSize: "14px",
  fontWeight: "200",
  color: "#666666",
  margin: "0 0 4px 0",
}

const location = {
  fontSize: "14px",
  fontWeight: "200",
  color: "#666666",
  textTransform: "uppercase" as const,
  letterSpacing: "1px",
  margin: "0",
}

const bottomSection = {
  textAlign: "center" as const,
}

const bottomText = {
  fontSize: "12px",
  fontWeight: "200",
  color: "#999999",
  textTransform: "uppercase" as const,
  letterSpacing: "2px",
  margin: "0",
}
