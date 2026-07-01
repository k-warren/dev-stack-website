'use client'

import NextLink from 'next/link'
import { Heading, Text, Stack, Label, Link } from '@primer/react'
import { ArrowUpRightIcon } from '@primer/octicons-react'
import { caseStudies } from '@/lib/case-studies'

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
            {caseStudies.map((project) => (
              <div
                key={project.slug}
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
                    as={NextLink}
                    href={`/work/${project.slug}`}
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
