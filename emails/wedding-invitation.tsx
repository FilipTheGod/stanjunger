import {
  Body,
  Container,
  Head,
  Html,
  Section,
  Text,
} from "@react-email/components"
import * as React from "react"
import { text } from "stream/consumers"

export default function WeddingInvitation() {
  return (
    <Html>
      <Head />
      <Body style={main}>
        <Container style={container}>
          <Section style={content}>
            <Text style={greeting}>hi friends,</Text>
            <Text style={paragraph} >
              as you know, we’re currently in somewhat of a logistical pickle
              that is interfering with our wedding plans. we’re back with an
              update:
            </Text>
            <Text style={paragraph2}>
              our wedding celebration will be moving to spring/summer of 2027!
            </Text>
            <Text style={paragraph}>
              it seems like the both of us will remain very restricted in terms
              of travel ability for the next year or so, which is longer than we
              had anticipated. initially, it was upsetting to realize that
              postponing the party is now our only option, but we’re actually
              becoming very enthusiastic about the fact that we’ll be able to
              plan freely for the new date, without being on a time crunch.
              we’re also glad we figured things out early enough to not mess up
              any of your plans :)
            </Text>
            <Text style={paragraph}>
              we expect to settle on and announce the new date around this
              coming fall.
            </Text>
            <Text style={paragraph}>
              thank you for the support, patience and kindness we’ve received
              while stressing about this decision in the past months!
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

const content = {
  textAlign: "left" as const,
}

const resendNote = {
  fontSize: "12px",
  fontWeight: "600",
  color: "#6b7280",
  lineHeight: "1.5",
  marginBottom: "20px",
  textTransform: "lowercase" as const,
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

const paragraph2 = {
  fontSize: "16px",
  fontWeight: "bold",
  color: "#000000",
  lineHeight: "1.7",
  marginTop: "40px",
  marginBottom: "40px",
  textTransform: "lowercase" as const,
  textAlign: "center" as const,
}


const signature = {
  fontSize: "16px",
  fontWeight: "300",
  color: "#000000",
  lineHeight: "1.7",
  marginTop: "32px",
  textTransform: "lowercase" as const,
}
