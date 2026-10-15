import {
  Body,
  Container,
  Head,
  Html,
  Img,
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
      <Head>
        {/* Ask mail apps to keep the light design in dark mode (Apple Mail and some others honor this) */}
        <meta name="color-scheme" content="light only" />
        <meta name="supported-color-schemes" content="light only" />
      </Head>
      <Body style={main}>
        {/* White card on a soft grey background, like an invitation.
            The grey lives on a wrapper because Gmail drops <body> styles. */}
        <Section style={backdrop}>
          <Container style={card}>
            <Img
              src={`${baseUrl}/email/cat.jpg`}
              alt="dancing cat"
              width="48"
              height="68"
              style={cat}
            />
            <Section style={content}>
              <Text style={greeting}>hi friends,</Text>
              <Text style={paragraph}>
                on the 2nd of october, we had our civil ceremony here in new
                york. much to our joy, quite a few of you were able to join us
                on short notice, but we wanted to send this little note to
                share the happy news with everyone else, too.
              </Text>
              <Img
                src={`${baseUrl}/email/wedding.jpg`}
                alt="ines and filip on their wedding day"
                width="536"
                style={photo}
              />
              <Text style={paragraph}>
                we’re still waiting for a few things to fall into place before
                we can start planning the main event in romania, but we’ll keep
                you posted as soon as we know more.
              </Text>
              <Text style={signature}>
                with love,
                <br />
                ines & filip
              </Text>
            </Section>
          </Container>
        </Section>
      </Body>
    </Html>
  )
}

const main = {
  margin: "0",
  backgroundColor: "#f2f2f0",
  fontFamily:
    'Montserrat, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
}

const backdrop = {
  backgroundColor: "#f2f2f0",
  padding: "40px 12px",
}

const card = {
  margin: "0 auto",
  padding: "48px 32px",
  maxWidth: "600px",
  backgroundColor: "#ffffff",
  border: "1px solid #e6e6e3",
  borderRadius: "4px",
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
  maxWidth: "536px",
  display: "block",
  margin: "32px auto",
}

const greeting = {
  fontSize: "15px",
  fontWeight: "300",
  color: "#000000",
  lineHeight: "1.7",
  marginBottom: "20px",
  textTransform: "lowercase" as const,
}

const paragraph = {
  fontSize: "15px",
  fontWeight: "300",
  color: "#000000",
  lineHeight: "1.7",
  marginBottom: "20px",
  textTransform: "lowercase" as const,
}

const signature = {
  fontSize: "15px",
  fontWeight: "300",
  color: "#000000",
  lineHeight: "1.7",
  marginTop: "32px",
  textTransform: "lowercase" as const,
}
