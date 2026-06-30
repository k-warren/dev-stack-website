'use client'

import { Heading, Text, Stack, Button, Label } from '@primer/react'
import { ArrowRightIcon, StarFillIcon } from '@primer/octicons-react'

export function Hero() {
  return (
    <section style={{ padding: '96px 24px 64px' }}>
      <div style={{ maxWidth: 1080, margin: '0 auto' }}>
        <Stack direction="vertical" gap="spacious" align="center">
          <Stack direction="vertical" gap="normal" align="center">
            <Label variant="accent" size="large">
              A three-person web studio
            </Label>
            <Heading
              as="h1"
              style={{
                fontSize: 'clamp(40px, 7vw, 72px)',
                lineHeight: 1.05,
                textAlign: 'center',
                maxWidth: 820,
                letterSpacing: '-0.02em',
              }}
            >
              We build websites for people who build everything else.
            </Heading>
            <Text
              size="large"
              style={{
                color: 'var(--fgColor-muted)',
                textAlign: 'center',
                maxWidth: 600,
              }}
            >
              Maya, Devon, and Sora are a small, senior team. Design,
              engineering, and strategy under one roof — shipping fast,
              polished sites for founders and growing brands.
            </Text>
          </Stack>

          <Stack direction="horizontal" gap="normal" align="center">
            <Button
              as="a"
              href="#contact"
              variant="primary"
              size="large"
              trailingVisual={ArrowRightIcon}
            >
              Start a project
            </Button>
            <Button as="a" href="#work" variant="invisible" size="large">
              See our work
            </Button>
          </Stack>

          <Stack direction="horizontal" gap="condensed" align="center">
            <Stack direction="horizontal" gap="none">
              {[0, 1, 2, 3, 4].map((i) => (
                <StarFillIcon key={i} size={16} fill="var(--fgColor-attention)" />
              ))}
            </Stack>
            <Text size="small" style={{ color: 'var(--fgColor-muted)' }}>
              Rated 5/5 across 40+ launched projects
            </Text>
          </Stack>
        </Stack>
      </div>
    </section>
  )
}
