import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { CaseStudyDetail } from '@/components/case-study-detail'
import { caseStudies, getCaseStudy } from '@/lib/case-studies'

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const study = getCaseStudy(slug)
  if (!study) {
    return { title: 'Case study — Dev Stack' }
  }
  return {
    title: `${study.name} — Dev Stack`,
    description: study.summary,
  }
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const study = getCaseStudy(slug)

  if (!study) {
    notFound()
  }

  return (
    <>
      <SiteHeader />
      <main>
        <CaseStudyDetail study={study} />
      </main>
      <SiteFooter />
    </>
  )
}
