'use client'

import NextLink from 'next/link'
import { Heading, Text, Stack, Label, Link } from '@primer/react'
import { ArrowUpRightIcon } from '@primer/octicons-react'
import { caseStudies } from '@/lib/case-studies'

export function CaseStudyList() {
  return (
    <section style={{ padding: '64px 24px' }}>
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
              Case studies
            </Text>
            <Heading as="h1" style={{ fontSize: 40, letterSpacing: '-0.02em' }}>
              Work we&apos;re proud of
            </Heading>
            <Text
              size="large"
              style={{ color: 'var(--fgColor-muted)', maxWidth: 620 }}
            >
              A closer look at how we partner with founders and teams to design,
              build, and ship websites that move the numbers that matter.
            </Text>
          </Stack>

          <Stack direction="vertical" gap="normal">
            {caseStudies.map((project) => (
              <NextLink
                key={project.slug}
                href={`/work/${project.slug}`}
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                <div
                  style={{
                    backgroundColor: 'var(--bgColor-default)',
                    border:
                      'var(--borderWidth-thin) solid var(--borderColor-default)',
                    borderRadius: 'var(--borderRadius-large)',
                    padding: 28,
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
                      <Text
                        size="small"
                        style={{ color: 'var(--fgColor-muted)' }}
                      >
                        {project.year}
                      </Text>
                    </Stack>
                    <Stack direction="vertical" gap="condensed">
                      <Heading as="h2" style={{ fontSize: 26 }}>
                        {project.name}
                      </Heading>
                      <Text
                        size="large"
                        style={{ color: 'var(--fgColor-muted)' }}
                      >
                        {project.description}
                      </Text>
                    </Stack>
                    <Stack direction="horizontal" gap="spacious" wrap="wrap">
                      {project.results.map((result) => (
                        <Stack
                          key={result.label}
                          direction="vertical"
                          gap="none"
                        >
                          <Text
                            style={{
                              fontSize: 20,
                              fontWeight: 600,
                              color: 'var(--fgColor-default)',
                            }}
                          >
                            {result.value}
                          </Text>
                          <Text
                            size="small"
                            style={{ color: 'var(--fgColor-muted)' }}
                          >
                            {result.label}
                          </Text>
                        </Stack>
                      ))}
                    </Stack>
                    <Link
                      as="span"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: 4,
                        fontWeight: 600,
                      }}
                    >
                      Read case study
                      <ArrowUpRightIcon size={16} />
                    </Link>
                  </Stack>
                </div>
              </NextLink>
            ))}
          </Stack>
        </Stack>
      </div>
    </section>
  )
}
