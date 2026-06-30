'use client'

import { Stack, Text, Button } from '@primer/react'
import { CodeSquareIcon } from '@primer/octicons-react'

const links = [
  { label: 'Work', href: '#work' },
  { label: 'Services', href: '#services' },
  { label: 'Team', href: '#team' },
]

export function SiteHeader() {
  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 10,
        backgroundColor: 'var(--bgColor-default)',
        borderBottom:
          'var(--borderWidth-thin) solid var(--borderColor-muted)',
      }}
    >
      <div style={{ maxWidth: 1080, margin: '0 auto', padding: '16px 24px' }}>
        <Stack
          direction="horizontal"
          align="center"
          justify="space-between"
          gap="normal"
        >
          <Stack direction="horizontal" align="center" gap="condensed">
            <CodeSquareIcon size={24} />
            <Text style={{ fontWeight: 600, fontSize: 18 }}>Trio Studio</Text>
          </Stack>

          <Stack
            direction="horizontal"
            align="center"
            gap="spacious"
            style={{ display: 'flex' }}
          >
            <nav aria-label="Primary">
              <Stack direction="horizontal" align="center" gap="spacious">
                {links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    style={{
                      color: 'var(--fgColor-muted)',
                      textDecoration: 'none',
                      fontSize: 14,
                    }}
                  >
                    {link.label}
                  </a>
                ))}
              </Stack>
            </nav>
            <Button as="a" href="#contact" variant="primary" size="medium">
              Start a project
            </Button>
          </Stack>
        </Stack>
      </div>
    </header>
  )
}
