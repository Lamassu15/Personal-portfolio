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
      <Preview>Thank you for your message!</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={header}>
            <Heading style={h1}>Thank You for Reaching Out!</Heading>
          </Section>

          <Section style={content}>
            <Text style={text}>Hi {name},</Text>
            <Text style={text}>
              Thank you for taking the time to contact me through my portfolio
              website. I have received your message and will get back to you as
              soon as possible.
            </Text>
            <Text style={text}>
              In the meantime, feel free to check out my{" "}
              <Link href="https://gabara.se" style={link}>
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

          <Section style={footer}>
            <Text style={footerText}>
              This is an automated message. Please do not reply to this email.
            </Text>
            <Text style={footerText}>
              If you have any urgent inquiries, please contact me directly at{" "}
              <Link href="mailto:bazo.assyr@gmail.com" style={link}>
                bazo.assyr@gmail.com
              </Link>
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export default AutoReplyEmail;

const main = {
  backgroundColor: "#f6f9fc",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  backgroundColor: "#ffffff",
  margin: "0 auto",
  padding: "20px 0 48px",
  marginBottom: "64px",
  borderRadius: "8px",
  boxShadow:
    "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
};

const header = {
  padding: "24px 48px",
  backgroundColor: "#000000",
  color: "#ffffff",
  borderRadius: "8px 8px 0 0",
};

const h1 = {
  color: "#ffffff",
  fontSize: "24px",
  fontWeight: "bold",
  margin: "0",
  padding: "0",
  textAlign: "center" as const,
};

const content = {
  padding: "24px 48px",
};

const text = {
  color: "#333333",
  fontSize: "16px",
  lineHeight: "24px",
  margin: "8px 0",
};

const link = {
  color: "#2563eb",
  textDecoration: "underline",
};

const hr = {
  borderColor: "#e5e7eb",
  margin: "24px 48px",
};

const footer = {
  padding: "24px 48px",
  backgroundColor: "#f9fafb",
  borderRadius: "0 0 8px 8px",
};

const footerText = {
  color: "#6b7280",
  fontSize: "14px",
  lineHeight: "20px",
  margin: "0",
};
