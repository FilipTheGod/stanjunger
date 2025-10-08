import {
  Body,
  Button,
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
              src="../public/cat.jpg"
            width="120"
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
              please click below to view your invitation with all the details about our special day.
            </Text>

            {/* CTA Button */}
            <Section style={buttonContainer}>
              <Button
                style={button}
                href="https://www.paperlesspost.com/go/nkkpGZ7sW5jaajSJLzbZK?utm_content=view_card&utm_source=cof&utm_medium=email&utm_campaign=customizable_invitation&guestToken=preview95393ac2fbed7825e044abdb1b6a181d"
              >
                view invitation
              </Button>
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

const buttonContainer = {
  margin: '32px 0',
};

const button = {
  backgroundColor: '#4b5563',
  borderRadius: '6px',
  color: '#ffffff',
  fontSize: '16px',
  fontWeight: '200',
  textDecoration: 'none',
  textAlign: 'center' as const,
  display: 'inline-block',
  padding: '14px 32px',
  textTransform: 'lowercase' as const,
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