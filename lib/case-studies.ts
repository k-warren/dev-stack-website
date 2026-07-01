export type CaseStudy = {
  slug: string
  name: string
  category: string
  year: string
  description: string
  summary: string
  client: string
  services: string[]
  timeline: string
  results: { label: string; value: string }[]
  challenge: string
  approach: string[]
  outcome: string
  quote: { text: string; author: string; role: string }
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'unit-cladding', /*Need to update the information below to match the new case study*/
    name: 'Unit Cladding',
    category: 'Construction',
    year: '2025',
    description:
      'A headless storefront and subscription flow for a specialty roaster, up 38% in checkout conversion.',
    summary:
      'We rebuilt Unit Cladding as a headless commerce experience, pairing a fast Next.js storefront with a frictionless subscription flow that turned one-time buyers into recurring customers.',
    client: 'Unit Cladding',
    services: ['Design', 'Engineering', 'Strategy'],
    timeline: '10 weeks',
    results: [
      { label: 'Checkout conversion', value: '+38%' },
      { label: 'Subscription signups', value: '2.4x' },
      { label: 'Page load time', value: '0.9s' },
    ],
    challenge:
      'Unit Cladding had a loyal local following but a slow, templated storefront that buried its subscription product and leaked customers at checkout. They wanted an experience that felt as crafted as their coffee.',
    approach: [
      'Audited the existing funnel and identified the three biggest drop-off points in cart and checkout.',
      'Designed a streamlined subscription builder that lets customers pick roast, grind, and cadence in a single step.',
      'Built a headless storefront on Next.js with an edge-cached catalog and an instant cart drawer.',
      'Integrated analytics and post-purchase email so the team could iterate on offers after launch.',
    ],
    outcome:
      'Within the first quarter, checkout conversion rose 38% and subscription signups more than doubled, giving Unit Cladding predictable recurring revenue for the first time.',
    quote: {
      text: 'The new store finally feels like us. Subscriptions went from an afterthought to our biggest growth channel.',
      author: 'Dana Okafor',
      role: 'Founder, Unit Cladding',
    },
  },
  {
    slug: 'sy53-live', /*Need to update the information below to match the new case study*/
    name: 'SY53 Live',
    category: 'Radio & Podcasting',
    year: '2025',
    description:
      'Brand refresh and Next.js rebuild for a telehealth startup ahead of their Series A.',
    summary:
      'Ahead of a Series A raise, Lumen Health needed a marketing site that signaled credibility to investors and clarity to patients. We delivered a full brand refresh and a fast, accessible rebuild.',
    client: 'SY53 Live',
    services: ['Design', 'Engineering', 'Strategy'],
    timeline: '8 weeks',
    results: [
      { label: 'Demo requests', value: '+62%' },
      { label: 'Lighthouse score', value: '99' },
      { label: 'Bounce rate', value: '-27%' },
    ],
    challenge:
      'Lumen had outgrown its early DIY site. The messaging was unclear, the visual identity felt clinical, and the page was too slow to convert the traffic from their growing PR push.',
    approach: [
      'Reworked positioning around a single, patient-first value proposition.',
      'Created a warmer brand system with accessible color and type tokens.',
      'Rebuilt the site on Next.js with server components and optimized media.',
      'Set up a CMS so the team could publish updates without engineering.',
    ],
    outcome:
      'The refreshed site lifted demo requests by 62% and gave the founders a polished story to bring into investor meetings during their raise.',
    quote: {
      text: 'It looked like a company three times our size. That mattered in every investor conversation.',
      author: 'Priya Nair',
      role: 'CEO, Lumen Health',
    },
  }
]

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((study) => study.slug === slug)
}
