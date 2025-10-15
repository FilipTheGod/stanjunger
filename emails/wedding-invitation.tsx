import {
  Body,
  Container,
  Head,
  Html,
  Img,
  Section,
  Text,
  Link,
  Row,
  Column,
} from "@react-email/components"
import * as React from "react"

export default function WeddingInvitation() {
  return (
    <Html>
      <Head />
      <Body style={main}>
        <Container style={container}>
          {/* Main Content */}
          <Section style={content}>
            {/* Invitation PDF/Image */}
            <Section style={detailsContainer}>
              <table style={detailsTable} cellPadding="0" cellSpacing="0">
                <tbody>
                  <tr>
                    <td style={detailCellLeft}>
                      <Text style={heading}>you've got plans :)</Text>
                      <Text style={paragraph}>
                        {" "}
                        we'd love to celebrate our wedding with you! until we
                        share more details in the upcoming formal invitations,
                        please see our save the date card below and mark your
                        calendar.
                      </Text>
                      <Section style={invitationSection}>
                        <Img
                          src="https://stanjunger.wedding/invitation.jpg"
                          width="500"
                          alt="Wedding invitation"
                          style={invitationImage}
                        />
                      </Section>
                    </td>
                  </tr>
                </tbody>
              </table>
            </Section>

            {/* Website Link */}
            <Section style={linkSection}>
              <Text style={paragraph}>our wedding website is up and running!
                      <br />
                <Link href="https://stanjunger.wedding" style={linkText}>
                  stanjunger.wedding
                </Link>
                <br />
              feel free to check back in the coming months for updates and
              information.
            </Text>
            </Section>

            {/* Footer with Date and Calendar */}
            <Section style={footerSection}>
              <Text style={footerDate}>saturday, august 29, 2026
                <br />
                 <Link
                  href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=stan-junger+wedding&dates=20260829/20260830&&location=Prod%2C+Romania"
                  style={linkText}
                >
                  add to calendar
                </Link>
              </Text>
            </Section>
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
  padding: "0px 20px",
  maxWidth: "600px",
}

const content = {
  textAlign: "center" as const,
}

const heading = {
 fontSize: "16px",
  fontWeight: "200",
  color: "#000000",
  marginTop: "0px",
  marginBottom: "50px",
  textTransform: "lowercase" as const,
}

const paragraph = {
  fontSize: "16px",
  fontWeight: "200",
  color: "#000000",
  lineHeight: "1.6",
  marginBottom: "20px",
  textTransform: "lowercase" as const,
}

const invitationSection = {
  margin: "10px 0",
  marginTop: "60px",
  textAlign: "center" as const,
}

const invitationImage = {
  margin: "0 auto",
  maxWidth: "100%",
  height: "auto",
  border: "1px solid #e5e7eb",
}

const detailsContainer = {
  marginTop: "20px",
  marginBottom: "20px",
}

const detailsTable = {
  width: "100%",
}

const detailCellLeft = {
  verticalAlign: "top" as const,
  width: "50%",
  textAlign: "center" as const,
}

const linkSection = {
  marginTop: "40px",
  marginBottom: "40px",
}

const linkText = {
  fontSize: "14px",
  fontWeight: "200",
  color: "#6b7280",
  textTransform: "lowercase" as const,
  textDecoration: "underline",
}


const footerSection = {
  marginTop: "30px",
  textAlign: "center" as const,
}

const footerDate = {
  fontSize: "16px",
  fontWeight: "200",
  color: "#6b7280",

}
