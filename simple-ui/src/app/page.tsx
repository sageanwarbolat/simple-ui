import { Button, Text, Card } from "@/components";

export default function Home() {
  return (
    <main style={{ padding: "2rem", maxWidth: "1200px", margin: "0 auto" }}>
      <Text element="h1" style={{ fontSize: "2rem", marginBottom: "2rem" }}>
        Simple UI Library Demo
      </Text>

      <section style={{ marginBottom: "3rem" }}>
        <Text element="h2" style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>
          Button Component
        </Text>
        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginBottom: "1rem" }}>
          <Button variant="primary">Primary Button</Button>
          <Button variant="neutral">Neutral Button</Button>
          <Button variant="subtle">Subtle Button</Button>
        </div>
        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          <Button variant="primary" size="small">
            Small Primary
          </Button>
          <Button variant="primary" disabled>
            Disabled
          </Button>
        </div>
      </section>

      <section style={{ marginBottom: "3rem" }}>
        <Text element="h2" style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>
          Text Component
        </Text>
        <Text>
          This is a basic text component with default line height (body).
        </Text>
        <Text lineHeight="single" style={{ marginTop: "1rem" }}>
          This text has single line height.
        </Text>
        <Text lineClamp={2} style={{ marginTop: "1rem" }}>
          This is a longer text that will be clamped to 2 lines. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua.
        </Text>
      </section>

      <section style={{ marginBottom: "3rem" }}>
        <Text element="h2" style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>
          Card Component
        </Text>

        <div style={{ display: "grid", gap: "2rem", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))" }}>
          <Card variant="default" padding="600">
            <Text element="h3" style={{ fontSize: "1.25rem" }}>
              Default Card
            </Text>
            <Text>This is a default card variant with basic styling.</Text>
            <Button variant="primary" size="small">
              Action
            </Button>
          </Card>

          <Card variant="stroke" padding="600">
            <Text element="h3" style={{ fontSize: "1.25rem" }}>
              Stroke Card
            </Text>
            <Text>This card has a border stroke variant.</Text>
            <Button variant="neutral" size="small">
              Action
            </Button>
          </Card>

          <Card variant="brand" padding="600">
            <Text element="h3" style={{ fontSize: "1.25rem" }}>
              Brand Card
            </Text>
            <Text>This card uses the brand color variant.</Text>
            <Button variant="primary" size="small">
              Action
            </Button>
          </Card>
        </div>

        <div style={{ marginTop: "2rem" }}>
          <Card variant="default" direction="horizontal" align="center" padding="600">
            <div
              style={{
                width: "100px",
                height: "100px",
                backgroundColor: "#E5E7EB",
                borderRadius: "0.375rem",
              }}
            />
            <div>
              <Text element="h3" style={{ fontSize: "1.25rem" }}>
                Horizontal Card
              </Text>
              <Text>This card uses horizontal layout.</Text>
            </div>
          </Card>
        </div>
      </section>
    </main>
  );
}
