import {
  Tailwind,
  Button,
  Text,
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Section,
  Row,
  Column,
} from "@react-email/components";
import React from "react";

interface MyEmailProps {
  name: string;
  email: string;
  subject: string;
  message: string;
  phone?: string;
}

const MyEmail = ({ name, email, subject, message, phone }: MyEmailProps) => {
  return (
    <Tailwind
      config={{
        theme: {
          extend: {
            colors: {
              primary: "#0ea5e9",
              background: "#020817",
              foreground: "#f8fafc",
              muted: "#94a3b8",
              card: "#1e293b",
            },
          },
        },
      }}
    >
      <Html>
        <Head />
        <Preview>New message from your portfolio contact form</Preview>
        <Body className="bg-background text-foreground font-sans">
          <Container className="max-w-2xl mx-auto p-6">
            <Heading className="text-2xl font-bold text-primary mb-6">
              📧 New Message from {name}
            </Heading>

            <Section className="bg-card rounded-lg shadow-sm p-6 mb-6 border border-muted/20">
              <Row className="mb-4">
                <Column>
                  <Text className="text-muted text-sm mb-1 underline">
                    From
                  </Text>
                  <Text className="font-medium">{name}</Text>
                </Column>
                {phone && (
                  <Column>
                    <Text className="text-muted text-sm mb-1 underline">
                      Phone
                    </Text>
                    <Text className="font-medium">{phone}</Text>
                  </Column>
                )}
              </Row>

              <Row className="mb-4">
                <Column>
                  <Text className="text-muted text-sm mb-1 underline">
                    Subject
                  </Text>
                  <Text className="font-medium">{subject}</Text>
                </Column>
              </Row>

              <Row>
                <Column>
                  <Text className="text-muted text-sm mb-1 underline">
                    Message
                  </Text>
                  <Text className="font-medium">{message}</Text>
                </Column>
              </Row>
            </Section>

            <Section className="text-center">
              <Button
                href={`mailto:${email}`}
                className="bg-primary text-white px-6 py-3 rounded-md font-medium"
              >
                Reply to {name}
              </Button>
            </Section>
          </Container>
        </Body>
      </Html>
    </Tailwind>
  );
};

export default MyEmail;
