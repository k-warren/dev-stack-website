'use client'

import NextLink from 'next/link'
import { Heading, Text, Stack, Label, Button, Link } from '@primer/react'
import {
  ArrowLeftIcon,
  CheckCircleFillIcon,
  QuoteIcon,
} from '@primer/octicons-react'
import type { CaseStudy } from '@/lib/case-studies'

export function CaseStudyDetail({ study }: { study: CaseStudy }) {
  return (
    <article style={{ padding: '48px 24px 80px' }}>
      <div style={{ maxWidth: 820, margin: '0 auto' }}>
        <Stack direction="vertical" gap="spacious">
          <Link
            as={NextLink}
            href="/work"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 6,
              color: 'var(--fgColor-muted)',
              fontWeight: 600,
            }}
          >
            <ArrowLeftIcon size={16} />
            All case studies
          </Link>

          {/* Header */}
          <Stack direction="vertical" gap="normal">
            <Stack direction="horizontal" align="center" gap="condensed">
              <Label variant="secondary">{study.category}</Label>
              <Text size="small" style={{ color: 'var(--fgColor-muted)' }}>
                {study.year}
              </Text>
            </Stack>
            <Heading as="h1" style={{ fontSize: 44, letterSpacing: '-0.02em' }}>
              {study.name}
            </Heading>
            <Text
              size="large"
              style={{ color: 'var(--fgColor-muted)', lineHeight: 1.6 }}
            >
              {study.summary}
            </Text>
          </Stack>

          {/* Meta + results */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
              gap: 16,
              padding: 24,
              backgroundColor: 'var(--bgColor-muted)',
              border:
                'var(--borderWidth-thin) solid var(--borderColor-default)',
              borderRadius: 'var(--borderRadius-large)',
            }}
          >
            <Stack direction="vertical" gap="none">
              <Text size="small" style={{ color: 'var(--fgColor-muted)' }}>
                Client
              </Text>
              <Text style={{ fontWeight: 600 }}>{study.client}</Text>
            </Stack>
            <Stack direction="vertical" gap="none">
              <Text size="small" style={{ color: 'var(--fgColor-muted)' }}>
                Timeline
              </Text>
              <Text style={{ fontWeight: 600 }}>{study.timeline}</Text>
            </Stack>
            <Stack direction="vertical" gap="none">
              <Text size="small" style={{ color: 'var(--fgColor-muted)' }}>
                Services
              </Text>
              <Text style={{ fontWeight: 600 }}>
                {study.services.join(', ')}
              </Text>
            </Stack>
          </div>

          {/* Results highlight */}
          <Stack direction="horizontal" gap="spacious" wrap="wrap">
            {study.results.map((result) => (
              <Stack key={result.label} direction="vertical" gap="none">
                <Text
                  style={{
                    fontSize: 32,
                    fontWeight: 700,
                    color: 'var(--fgColor-accent)',
                    letterSpacing: '-0.02em',
                  }}
                >
                  {result.value}
                </Text>
                <Text size="small" style={{ color: 'var(--fgColor-muted)' }}>
                  {result.label}
                </Text>
              </Stack>
            ))}
          </Stack>

          {/* Challenge */}
          <Stack direction="vertical" gap="condensed">
            <Heading as="h2" style={{ fontSize: 24 }}>
              The challenge
            </Heading>
            <Text style={{ color: 'var(--fgColor-muted)', lineHeight: 1.7 }}>
              {study.challenge}
            </Text>
          </Stack>

          {/* Approach */}
          <Stack direction="vertical" gap="normal">
            <Heading as="h2" style={{ fontSize: 24 }}>
              Our approach
            </Heading>
            <Stack direction="vertical" gap="condensed">
              {study.approach.map((step) => (
                <Stack
                  key={step}
                  direction="horizontal"
                  gap="condensed"
                  align="start"
                >
                  <span
                    style={{
                      color: 'var(--fgColor-success)',
                      marginTop: 3,
                      flexShrink: 0,
                    }}
                  >
                    <CheckCircleFillIcon size={18} />
                  </span>
                  <Text style={{ color: 'var(--fgColor-muted)', lineHeight: 1.6 }}>
                    {step}
                  </Text>
                </Stack>
              ))}
            </Stack>
          </Stack>

          {/* Outcome */}
          <Stack direction="vertical" gap="condensed">
            <Heading as="h2" style={{ fontSize: 24 }}>
              The outcome
            </Heading>
            <Text style={{ color: 'var(--fgColor-muted)', lineHeight: 1.7 }}>
              {study.outcome}
            </Text>
          </Stack>

          {/* Quote */}
          <div
            style={{
              padding: 28,
              backgroundColor: 'var(--bgColor-accent-muted)',
              borderRadius: 'var(--borderRadius-large)',
            }}
          >
            <Stack direction="vertical" gap="normal">
              <span style={{ color: 'var(--fgColor-accent)' }}>
                <QuoteIcon size={24} />
              </span>
              <Text
                style={{
                  fontSize: 20,
                  lineHeight: 1.5,
                  color: 'var(--fgColor-default)',
                }}
              >
                {study.quote.text}
              </Text>
              <Stack direction="vertical" gap="none">
                <Text style={{ fontWeight: 600 }}>{study.quote.author}</Text>
                <Text size="small" style={{ color: 'var(--fgColor-muted)' }}>
                  {study.quote.role}
                </Text>
              </Stack>
            </Stack>
          </div>

          {/* CTA */}
          <div
            style={{
              padding: 32,
              textAlign: 'center',
              border:
                'var(--borderWidth-thin) solid var(--borderColor-default)',
              borderRadius: 'var(--borderRadius-large)',
            }}
          >
            <Stack direction="vertical" gap="normal" align="center">
              <Heading as="h2" style={{ fontSize: 26 }}>
                Got a project like this?
              </Heading>
              <Text style={{ color: 'var(--fgColor-muted)', maxWidth: 460 }}>
                We&apos;d love to hear what you&apos;re building. Tell us about
                it and we&apos;ll get back within a day.
              </Text>
              <Button as={NextLink} href="/#contact" variant="primary" size="large">
                Start a project
              </Button>
            </Stack>
          </div>
        </Stack>
      </div>
    </article>
  )
}
