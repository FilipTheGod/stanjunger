import {
  Body,
  Container,
  Head,
  Html,
  Img,
  Section,
  Text,
} from '@react-email/components';
import * as React from 'react';

export default function WeddingInvitation() {
  return (
    <Html>
      <Head />
      <Body style={main}>
        <Container style={container}>
          {/* Cat Image */}
          <Section style={imageSection}>
            <Img
              src="https://stanjunger.wedding/cat.jpg"
              width="90"
              height="120"
              alt="Cat illustration"
              style={catImage}
            />
          </Section>

          {/* Main Content */}
          <Section style={content}>
            <Text style={heading}>
              you're invited!
            </Text>

            <Text style={paragraph}>
              we're getting married and we'd love for you to join us for our celebration!
            </Text>

            <Text style={paragraph}>
              please see the invitation below with all the details about our special day.
            </Text>

            {/* Invitation PDF/Image */}
            <Section style={invitationSection}>
              <Img
                src="https://stanjunger.wedding/invitation.jpg"
                width="500"
                alt="Wedding invitation"
                style={invitationImage}
              />
            </Section>

            <Text style={footer}>
              — ines & filip :)
            </Text>

            <Text style={subFooter}>
              august 29th, 2026 · prod, romania
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

const main = {
  backgroundColor: '#ffffff',
  fontFamily: 'Montserrat, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
};

const container = {
  margin: '0 auto',
  padding: '40px 20px',
  maxWidth: '600px',
};

const imageSection = {
  textAlign: 'center' as const,
  marginBottom: '32px',
};

const catImage = {
  margin: '0 auto',
};

const content = {
  textAlign: 'center' as const,
};

const heading = {
  fontSize: '28px',
  fontWeight: '200',
  color: '#4b5563',
  marginBottom: '24px',
  textTransform: 'lowercase' as const,
};

const paragraph = {
  fontSize: '16px',
  fontWeight: '200',
  color: '#6b7280',
  lineHeight: '1.6',
  marginBottom: '20px',
  textTransform: 'lowercase' as const,
};

const invitationSection = {
  margin: '32px 0',
  textAlign: 'center' as const,
};

const invitationImage = {
  margin: '0 auto',
  maxWidth: '100%',
  height: 'auto',
  border: '1px solid #e5e7eb',
};

const footer = {
  fontSize: '16px',
  fontWeight: '200',
  color: '#6b7280',
  marginTop: '40px',
  textTransform: 'lowercase' as const,
};

const subFooter = {
  fontSize: '14px',
  fontWeight: '200',
  color: '#9ca3af',
  marginTop: '8px',
  textTransform: 'lowercase' as const,
};


