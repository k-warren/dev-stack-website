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
    slug: 'northwind-coffee',
    name: 'Northwind Coffee',
    category: 'E-commerce',
    year: '2025',
    description:
      'A headless storefront and subscription flow for a specialty roaster, up 38% in checkout conversion.',
    summary:
      'We rebuilt Northwind Coffee as a headless commerce experience, pairing a fast Next.js storefront with a frictionless subscription flow that turned one-time buyers into recurring customers.',
    client: 'Northwind Coffee Roasters',
    services: ['Design', 'Engineering', 'Strategy'],
    timeline: '10 weeks',
    results: [
      { label: 'Checkout conversion', value: '+38%' },
      { label: 'Subscription signups', value: '2.4x' },
      { label: 'Page load time', value: '0.9s' },
    ],
    challenge:
      'Northwind had a loyal local following but a slow, templated storefront that buried its subscription product and leaked customers at checkout. They wanted an experience that felt as crafted as their coffee.',
    approach: [
      'Audited the existing funnel and identified the three biggest drop-off points in cart and checkout.',
      'Designed a streamlined subscription builder that lets customers pick roast, grind, and cadence in a single step.',
      'Built a headless storefront on Next.js with an edge-cached catalog and an instant cart drawer.',
      'Integrated analytics and post-purchase email so the team could iterate on offers after launch.',
    ],
    outcome:
      'Within the first quarter, checkout conversion rose 38% and subscription signups more than doubled, giving Northwind predictable recurring revenue for the first time.',
    quote: {
      text: 'The new store finally feels like us. Subscriptions went from an afterthought to our biggest growth channel.',
      author: 'Dana Okafor',
      role: 'Founder, Northwind Coffee',
    },
  },
  {
    slug: 'lumen-health',
    name: 'Lumen Health',
    category: 'Marketing site',
    year: '2025',
    description:
      'Brand refresh and Next.js rebuild for a telehealth startup ahead of their Series A.',
    summary:
      'Ahead of a Series A raise, Lumen Health needed a marketing site that signaled credibility to investors and clarity to patients. We delivered a full brand refresh and a fast, accessible rebuild.',
    client: 'Lumen Health',
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
  },
  {
    slug: 'fieldnote',
    name: 'Fieldnote',
    category: 'Web app',
    year: '2024',
    description:
      'Design system and dashboard for a field-research SaaS used by 12k scientists.',
    summary:
      'Fieldnote needed to scale its product without its UI falling apart. We built a durable design system and rebuilt the core dashboard used daily by thousands of researchers.',
    client: 'Fieldnote',
    services: ['Design', 'Engineering'],
    timeline: '14 weeks',
    results: [
      { label: 'Active scientists', value: '12k' },
      { label: 'Support tickets', value: '-41%' },
      { label: 'Time to first insight', value: '-3 min' },
    ],
    challenge:
      'Years of fast shipping had left Fieldnote with inconsistent UI, slow pages, and a dashboard that overwhelmed new users with dense data.',
    approach: [
      'Built a token-driven design system to unify components across the product.',
      'Redesigned the dashboard around the researcher’s most common daily tasks.',
      'Improved data-loading patterns so large datasets render without jank.',
      'Documented the system so Fieldnote’s team could extend it confidently.',
    ],
    outcome:
      'The new dashboard cut support tickets by 41% and gave researchers a clearer path to insight, while the design system sped up every future release.',
    quote: {
      text: 'We finally have a UI we can build on instead of fight against. Our team ships faster now.',
      author: 'Marcus Lindqvist',
      role: 'Head of Product, Fieldnote',
    },
  },
  {
    slug: 'atlas-type',
    name: 'Atlas Type',
    category: 'Portfolio',
    year: '2024',
    description:
      'An interactive type foundry showcase with live font previews and instant licensing.',
    summary:
      'Atlas Type wanted its catalog to feel alive. We built an interactive foundry showcase where visitors can test typefaces in real time and license them in a few clicks.',
    client: 'Atlas Type Foundry',
    services: ['Design', 'Engineering'],
    timeline: '6 weeks',
    results: [
      { label: 'Avg. session', value: '4m 12s' },
      { label: 'License sales', value: '+54%' },
      { label: 'Specimen views', value: '3.1x' },
    ],
    challenge:
      'Static specimen images failed to convey how the typefaces behaved at different sizes and weights, and the licensing flow was a clunky email exchange.',
    approach: [
      'Designed an interactive specimen editor with live, editable previews.',
      'Built variable-font rendering so weight and size update instantly.',
      'Created a streamlined, self-serve licensing checkout.',
      'Optimized font loading so previews stay smooth on any device.',
    ],
    outcome:
      'Visitors now spend over four minutes exploring typefaces, and self-serve licensing lifted sales 54% while freeing the team from manual quoting.',
    quote: {
      text: 'People actually play with our fonts now. The site does the selling for us.',
      author: 'Sofia Reyes',
      role: 'Creative Director, Atlas Type',
    },
  },
]

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((study) => study.slug === slug)
}
