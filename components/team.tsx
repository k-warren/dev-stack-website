'use client'

import { Heading, Text, Stack, Avatar, IconButton } from '@primer/react'
import { LogoGithubIcon, MarkGithubIcon } from '@primer/octicons-react'

type Member = {
  name: string
  role: string
  bio: string
  image: string
}

const members: Member[] = [
  {
    name: 'Maya Chen',
    role: 'Design & Brand',
    bio: 'Leads visual direction and design systems. Ten years crafting interfaces for startups and studios.',
    image: '/team/maya.png',
  },
  {
    name: 'Devon Reyes',
    role: 'Engineering',
    bio: 'Builds fast, accessible front-ends and the backends behind them. React, Next.js, and edge-everything.',
    image: '/team/devon.png',
  },
  {
    name: 'Sora Tanaka',
    role: 'Strategy & Product',
    bio: 'Connects business goals to what we build — positioning, content, and conversion from day one.',
    image: '/team/sora.png',
  },
]

export function Team() {
  return (
    <section
      id="team"
      style={{
        padding: '64px 24px',
        backgroundColor: 'var(--bgColor-muted)',
        borderTop: 'var(--borderWidth-thin) solid var(--borderColor-muted)',
        borderBottom: 'var(--borderWidth-thin) solid var(--borderColor-muted)',
      }}
    >
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
              The team
            </Text>
            <Heading as="h2" style={{ fontSize: 32, letterSpacing: '-0.01em' }}>
              Three people, one tight loop
            </Heading>
            <Text
              size="large"
              style={{ color: 'var(--fgColor-muted)', maxWidth: 600 }}
            >
              No account managers, no handoffs. You work directly with the
              people designing, building, and shipping your site.
            </Text>
          </Stack>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: 16,
            }}
          >
            {members.map((member) => (
              <div
                key={member.name}
                style={{
                  backgroundColor: 'var(--bgColor-default)',
                  border:
                    'var(--borderWidth-thin) solid var(--borderColor-default)',
                  borderRadius: 'var(--borderRadius-large)',
                  padding: 24,
                }}
              >
                <Stack direction="vertical" gap="normal">
                  <Avatar
                    src={member.image}
                    alt={member.name}
                    size={72}
                  />
                  <Stack direction="vertical" gap="condensed">
                    <Stack direction="vertical" gap="none">
                      <Heading as="h3" style={{ fontSize: 20 }}>
                        {member.name}
                      </Heading>
                      <Text
                        size="small"
                        style={{
                          color: 'var(--fgColor-accent)',
                          fontWeight: 600,
                        }}
                      >
                        {member.role}
                      </Text>
                    </Stack>
                    <Text style={{ color: 'var(--fgColor-muted)' }}>
                      {member.bio}
                    </Text>
                  </Stack>
                  <Stack direction="horizontal" gap="condensed">
                    <IconButton
                      icon={MarkGithubIcon}
                      aria-label={`${member.name} on GitHub`}
                      variant="invisible"
                      as="a"
                      href="#"
                    />
                    <IconButton
                      icon={LogoGithubIcon}
                      aria-label={`${member.name} portfolio`}
                      variant="invisible"
                      as="a"
                      href="#"
                    />
                  </Stack>
                </Stack>
              </div>
            ))}
          </div>
        </Stack>
      </div>
    </section>
  )
}
