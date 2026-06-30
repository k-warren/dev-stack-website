'use client'

import { Stack, Text } from '@primer/react'
import { CodeSquareIcon } from '@primer/octicons-react'

export function SiteFooter() {
  return (
    <footer
      style={{
        borderTop: 'var(--borderWidth-thin) solid var(--borderColor-muted)',
      }}
    >
      <div style={{ maxWidth: 1080, margin: '0 auto', padding: '32px 24px' }}>
        <Stack
          direction="horizontal"
          align="center"
          justify="space-between"
          gap="normal"
          wrap="wrap"
        >
          <Stack direction="horizontal" align="center" gap="condensed">
            <CodeSquareIcon size={20} />
            <Text style={{ fontWeight: 600 }}>Dev Stack</Text>
          </Stack>
          <Text size="small" style={{ color: 'var(--fgColor-muted)' }}>
            © {new Date().getFullYear()} Dev Stack. Built by Oliver, Kieran &
            Jayden.
          </Text>
        </Stack>
      </div>
    </footer>
  )
}
