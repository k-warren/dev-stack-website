import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { Services } from '@/components/services'
import { Work } from '@/components/work'
import { Team } from '@/components/team'
import { Contact } from '@/components/contact'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Services />
        <Work />
        <Team />
        <Contact />
      </main>
      <SiteFooter />
    </>
  )
}
