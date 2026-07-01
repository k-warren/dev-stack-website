import type { Metadata } from 'next'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { CaseStudyList } from '@/components/case-study-list'

export const metadata: Metadata = {
  title: 'Case studies — Dev Stack',
  description:
    'Selected work from Dev Stack — storefronts, marketing sites, and web apps built by Oliver, Kieran, and Jayden.',
}

export default function WorkPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <CaseStudyList />
      </main>
      <SiteFooter />
    </>
  )
}
