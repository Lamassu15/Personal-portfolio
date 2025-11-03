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
  Button,
  Link,
} from "@react-email/components";
import * as React from "react";

interface MyEmailProps {
  name: string;
  email: string;
  subject: string;
  message: string;
  phone?: string;
}

const MyEmail = ({ name, email, subject, message, phone }: MyEmailProps) => {
  return (
    <Html>
      <Head />
      <Preview>New message from your portfolio contact form</Preview>
      <Body style={main}>
        <Container style={container}>
          {/* Header */}
          <Section style={header}>
            <Heading style={h1}>📩 New Message Received</Heading>
            <Text style={subtitle}>
              Someone reached out via your portfolio contact form
            </Text>
          </Section>

          {/* Content */}
          <Section style={content}>
            <Text style={label}>From:</Text>
            <Text style={info}>
              {name} —{" "}
              <Link href={`mailto:${email}`} style={link}>
                {email}
              </Link>
            </Text>

            {phone && (
              <>
                <Text style={label}>Phone:</Text>
                <Text style={info}>{phone}</Text>
              </>
            )}

            <Hr style={divider} />

            <Text style={label}>Subject:</Text>
            <Text style={info}>{subject}</Text>

            <Hr style={divider} />

            <Text style={label}>Message:</Text>
            <Text style={messageBox}>{message}</Text>
          </Section>

          {/* Button */}
          <Section style={buttonSection}>
            <Button
              href={`mailto:${email}?subject=Re: ${subject}`}
              style={button}
            >
              Reply to {name}
            </Button>
          </Section>

          {/* Footer */}
          <Hr style={hr} />
          <Section style={footer}>
            <Text style={footerText}>
              This message was automatically forwarded from your contact form.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export default MyEmail;

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
  borderRadius: "10px",
  maxWidth: "600px",
  boxShadow: "0 10px 25px rgba(0, 0, 0, 0.08), 0 4px 8px rgba(0, 0, 0, 0.04)",
  overflow: "hidden",
};

const header = {
  background: "linear-gradient(135deg, #0ea5e9 0%, #2563eb 50%, #1e3a8a 100%)",
  color: "#ffffff",
  padding: "32px 40px",
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

const label = {
  color: "#6b7280",
  fontSize: "13px",
  fontWeight: "600",
  textTransform: "uppercase" as const,
  marginTop: "14px",
  marginBottom: "2px",
};

const info = {
  color: "#1f2937",
  fontSize: "15px",
  lineHeight: "22px",
  margin: "4px 0",
};

const messageBox = {
  backgroundColor: "#f9fafb",
  border: "1px solid #e5e7eb",
  borderRadius: "8px",
  padding: "16px",
  color: "#111827",
  fontSize: "15px",
  lineHeight: "24px",
  marginTop: "4px",
};

const link = {
  color: "#2563eb",
  textDecoration: "underline",
};

const divider = {
  borderColor: "#e5e7eb",
  margin: "20px 0",
};

const buttonSection = {
  textAlign: "center" as const,
  padding: "0 40px 32px 40px",
};

const button = {
  backgroundColor: "#2563eb",
  color: "#ffffff",
  borderRadius: "6px",
  padding: "12px 28px",
  fontSize: "15px",
  fontWeight: "600",
  textDecoration: "none",
  display: "inline-block",
};

const hr = {
  borderColor: "#e5e7eb",
  margin: "0",
};

const footer = {
  backgroundColor: "#f9fafb",
  padding: "20px 40px",
  textAlign: "center" as const,
};

const footerText = {
  color: "#6b7280",
  fontSize: "13px",
  margin: "0",
};
