'use client'

import { Heading, Text, Stack } from '@primer/react'
import {
  PaintbrushIcon,
  CodeIcon,
  RocketIcon,
  GraphIcon,
} from '@primer/octicons-react'
import type { Icon } from '@primer/octicons-react'

type Service = {
  icon: Icon
  title: string
  description: string
}

const services: Service[] = [
  {
    icon: PaintbrushIcon,
    title: 'Design',
    description:
      'Brand-aligned interfaces, design systems, and prototypes that feel as good as they look.',
  },
  {
    icon: CodeIcon,
    title: 'Engineering',
    description:
      'Fast, accessible, production-grade sites built on Next.js, React, and modern tooling.',
  },
  {
    icon: GraphIcon,
    title: 'Strategy',
    description:
      'Positioning, content, and conversion thinking baked in from the very first call.',
  },
  {
    icon: RocketIcon,
    title: 'Launch & care',
    description:
      'Deployment, analytics, and ongoing iteration so your site keeps getting better.',
  },
]

export function Services() {
  return (
    <section id="services" style={{ padding: '64px 24px' }}>
      <div style={{ maxWidth: 1080, margin: '0 auto' }}>
        <Stack direction="vertical" gap="spacious">
          <Stack direction="vertical" gap="condensed">
            <Text
              size="small"
              style={{
                color: 'var(--fgColor-accent)',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
              }}
            >
              What we do
            </Text>
            <Heading as="h2" style={{ fontSize: 32, letterSpacing: '-0.01em' }}>
              Everything your website needs, end to end
            </Heading>
          </Stack>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: 16,
            }}
          >
            {services.map((service) => {
              const Icon = service.icon
              return (
                <div
                  key={service.title}
                  style={{
                    backgroundColor: 'var(--bgColor-muted)',
                    border:
                      'var(--borderWidth-thin) solid var(--borderColor-default)',
                    borderRadius: 'var(--borderRadius-large)',
                    padding: 24,
                  }}
                >
                  <Stack direction="vertical" gap="normal">
                    <span
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: 44,
                        height: 44,
                        borderRadius: 'var(--borderRadius-medium)',
                        backgroundColor: 'var(--bgColor-accent-muted)',
                        color: 'var(--fgColor-accent)',
                      }}
                    >
                      <Icon size={22} />
                    </span>
                    <Stack direction="vertical" gap="condensed">
                      <Heading as="h3" style={{ fontSize: 18 }}>
                        {service.title}
                      </Heading>
                      <Text
                        size="medium"
                        style={{ color: 'var(--fgColor-muted)' }}
                      >
                        {service.description}
                      </Text>
                    </Stack>
                  </Stack>
                </div>
              )
            })}
          </div>
        </Stack>
      </div>
    </section>
  )
}
