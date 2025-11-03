import {
  Body,
  Container,
  Head,
  Html,
  Preview,
  Section,
  Text,
  Heading,
  Hr,
  Link,
} from "@react-email/components";
import * as React from "react";

interface AutoReplyEmailProps {
  name: string;
}

const AutoReplyEmail = ({ name }: AutoReplyEmailProps) => {
  return (
    <Html>
      <Head />
      <Preview>Thanks for your message — I’ll get back to you soon!</Preview>
      <Body style={main}>
        <Container style={container}>
          {/* Header */}
          <Section style={header}>
            <Heading style={h1}>✨ Thank You for Reaching Out!</Heading>
            <Text style={subtitle}>
              I appreciate your message — I’ll reply as soon as possible.
            </Text>
          </Section>

          {/* Content */}
          <Section style={content}>
            <Text style={text}>Hi {name},</Text>
            <Text style={text}>
              Thanks for taking the time to contact me through my portfolio
              website. I’ve received your message and will get back to you as
              soon as possible.
            </Text>
            <Text style={text}>
              Meanwhile, feel free to explore my{" "}
              <Link href="https://azdodev.com" style={link}>
                portfolio
              </Link>{" "}
              or connect with me on{" "}
              <Link href="https://linkedin.com/in/keorkes-azdo" style={link}>
                LinkedIn
              </Link>
              .
            </Text>
          </Section>

          <Hr style={hr} />

          {/* Footer */}
          <Section style={footer}>
            <Text style={footerText}>
              This is an automated message — please do not reply directly to
              this email.
            </Text>
            <Text style={footerText}>
              For urgent matters, reach me at{" "}
              <Link href="mailto:bazo.assyr@gmail.com" style={link}>
                bazo.assyr@gmail.com
              </Link>
              .
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export default AutoReplyEmail;

/* 🎨 Styles */
const main = {
  backgroundColor: "#f3f4f6",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
  padding: "40px 0",
};

const container = {
  backgroundColor: "#ffffff",
  margin: "0 auto",
  padding: "0",
  borderRadius: "10px",
  maxWidth: "600px",
  boxShadow:
    "0 10px 25px rgba(0, 0, 0, 0.08), 0 4px 8px rgba(0, 0, 0, 0.04)",
};

const header = {
  background:
    "linear-gradient(135deg, #0ea5e9 0%, #2563eb 50%, #1e3a8a 100%)",
  color: "#ffffff",
  padding: "32px 40px",
  borderRadius: "10px 10px 0 0",
  textAlign: "center" as const,
};

const h1 = {
  fontSize: "24px",
  fontWeight: "700",
  margin: "0 0 6px 0",
};

const subtitle = {
  color: "rgba(255,255,255,0.85)",
  fontSize: "15px",
  margin: "0",
};

const content = {
  padding: "32px 40px",
};

const text = {
  color: "#1f2937",
  fontSize: "16px",
  lineHeight: "26px",
  margin: "10px 0",
};

const link = {
  color: "#2563eb",
  textDecoration: "underline",
};

const hr = {
  borderColor: "#e5e7eb",
  margin: "0 40px",
};

const footer = {
  backgroundColor: "#f9fafb",
  borderRadius: "0 0 10px 10px",
  padding: "24px 40px",
  textAlign: "center" as const,
};

const footerText = {
  color: "#6b7280",
  fontSize: "14px",
  lineHeight: "20px",
  margin: "6px 0",
};
