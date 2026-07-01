'use client'

import { useState } from 'react'
import {
  Heading,
  Text,
  Stack,
  FormControl,
  TextInput,
  Textarea,
  Button,
  Flash,
} from '@primer/react'
import { CheckIcon, PaperAirplaneIcon } from '@primer/octicons-react'

export function Contact() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" style={{ padding: '64px 24px 96px' }}>
      <div style={{ maxWidth: 640, margin: '0 auto' }}>
        <Stack direction="vertical" gap="spacious">
          <Stack direction="vertical" gap="condensed" align="center">
            <Heading
              as="h2"
              style={{
                fontSize: 36,
                textAlign: 'center',
                letterSpacing: '-0.01em',
              }}
            >
              Let&apos;s build your website
            </Heading>
            <Text
              size="large"
              style={{ color: 'var(--fgColor-muted)', textAlign: 'center' }}
            >
              Tell us a little about your project and we&apos;ll get back to you
              within two business days.
            </Text>
          </Stack>

          <div
            style={{
              backgroundColor: 'var(--bgColor-muted)',
              border:
                'var(--borderWidth-thin) solid var(--borderColor-default)',
              borderRadius: 'var(--borderRadius-large)',
              padding: 28,
            }}
          >
            {submitted ? (
              <Flash variant="success">
                <Stack direction="horizontal" gap="condensed" align="center">
                  <CheckIcon />
                  <span>
                    Thanks — your message is on its way. We&apos;ll be in touch
                    soon.
                  </span>
                </Stack>
              </Flash>
            ) : (
              <form onSubmit={handleSubmit}>
                <Stack direction="vertical" gap="normal">
                  <FormControl required>
                    <FormControl.Label>Name</FormControl.Label>
                    <TextInput block placeholder="Your name" />
                  </FormControl>
                  <FormControl required>
                    <FormControl.Label>Email</FormControl.Label>
                    <TextInput
                      block
                      type="email"
                      placeholder="you@company.com"
                    />
                  </FormControl>
                  <FormControl>
                    <FormControl.Label>Project details</FormControl.Label>
                    <Textarea
                      block
                      rows={5}
                      placeholder="What are you building, and what do you need help with?"
                      resize="none"
                    />
                  </FormControl>
                  <Stack direction="horizontal" justify="end">
                    <Button
                      type="submit"
                      variant="primary"
                      size="large"
                      leadingVisual={PaperAirplaneIcon}
                    >
                      Send message
                    </Button>
                  </Stack>
                </Stack>
              </form>
            )}
          </div>
        </Stack>
      </div>
    </section>
  )
}
