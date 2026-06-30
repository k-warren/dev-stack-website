'use client'

import { Heading, Text, Stack, Label, Link } from '@primer/react'
import { ArrowUpRightIcon } from '@primer/octicons-react'

type Project = {
  name: string
  category: string
  description: string
  year: string
}

const projects: Project[] = [
  {
    name: 'Northwind Coffee',
    category: 'E-commerce',
    description:
      'A headless storefront and subscription flow for a specialty roaster, up 38% in checkout conversion.',
    year: '2025',
  },
  {
    name: 'Lumen Health',
    category: 'Marketing site',
    description:
      'Brand refresh and Next.js rebuild for a telehealth startup ahead of their Series A.',
    year: '2025',
  },
  {
    name: 'Fieldnote',
    category: 'Web app',
    description:
      'Design system and dashboard for a field-research SaaS used by 12k scientists.',
    year: '2024',
  },
  {
    name: 'Atlas Type',
    category: 'Portfolio',
    description:
      'An interactive type foundry showcase with live font previews and instant licensing.',
    year: '2024',
  },
]

export function Work() {
  return (
    <section id="work" style={{ padding: '64px 24px' }}>
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
              Selected work
            </Text>
            <Heading as="h2" style={{ fontSize: 32, letterSpacing: '-0.01em' }}>
              Sites we&apos;ve shipped lately
            </Heading>
          </Stack>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: 16,
            }}
          >
            {projects.map((project) => (
              <div
                key={project.name}
                style={{
                  backgroundColor: 'var(--bgColor-default)',
                  border:
                    'var(--borderWidth-thin) solid var(--borderColor-default)',
                  borderRadius: 'var(--borderRadius-large)',
                  padding: 24,
                  boxShadow: 'var(--shadow-resting-small)',
                }}
              >
                <Stack direction="vertical" gap="normal">
                  <Stack
                    direction="horizontal"
                    align="center"
                    justify="space-between"
                  >
                    <Label variant="secondary">{project.category}</Label>
                    <Text size="small" style={{ color: 'var(--fgColor-muted)' }}>
                      {project.year}
                    </Text>
                  </Stack>
                  <Stack direction="vertical" gap="condensed">
                    <Heading as="h3" style={{ fontSize: 22 }}>
                      {project.name}
                    </Heading>
                    <Text style={{ color: 'var(--fgColor-muted)' }}>
                      {project.description}
                    </Text>
                  </Stack>
                  <Link
                    href="#contact"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 4,
                      fontWeight: 600,
                    }}
                  >
                    View case study
                    <ArrowUpRightIcon size={16} />
                  </Link>
                </Stack>
              </div>
            ))}
          </div>
        </Stack>
      </div>
    </section>
  )
}
