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
    slug: 'unit-cladding',
    name: 'Unit Cladding',
    category: 'Construction',
    year: '2025',
    description:
      'A modern, high-performance website showcasing Unit Cladding’s expertise, completed projects, and services.',
    summary:
      'We redesigned and developed the Unit Cladding website using Next.js, creating a fast, responsive experience that showcases the company’s capabilities, highlights completed projects, and makes it easy for potential clients to get in touch.',
    client: 'Unit Cladding',
    services: ['Design', 'Engineering', 'Development'],
    timeline: '6 weeks',
    results: [
      { label: 'PageSpeed score', value: '98/100' },
      { label: 'Load time', value: '0.8s' },
      { label: 'Core Web Vitals', value: '100%' },
    ],
    challenge:
      'Unit Cladding needed a modern digital presence that reflected the quality of its work. The previous website lacked clear navigation, showcased very few projects, and did not effectively communicate the company’s expertise or encourage enquiries.',
    approach: [
      'Restructured the site architecture to improve navigation and content discovery.',
      'Designed a clean, professional interface aligned with the Unit Cladding brand.',
      'Developed the website in Next.js with responsive layouts, fast performance, and SEO best practices.',
      'Created dedicated project and service pages with clear calls to action to encourage client enquiries.',
    ],
    outcome:
      'The finished website provides Unit Cladding with a modern online presence that showcases its expertise, improves user experience, performs exceptionally well across devices, and makes it easier for prospective clients to explore services and get in touch.',
    quote: {
      text: 'The new website reflects the quality of our work and gives clients a much better understanding of our services and completed projects.',
      author: 'Olivers Neighbour',
      role: 'Founder Unit Cladding',
},
  },
  {
    slug: 'sy53-live',
    name: 'SY53 Live',
    category: 'Radio & Podcasting',
    year: '2025',
    description:
      'A modern website for an independent radio station, designed to showcase live broadcasts, podcasts, and community content.',
    summary:
      'We designed and developed a fast, responsive website for SY53 Live, creating a modern platform where listeners can discover live shows, browse podcasts, and stay connected with the station’s latest content.',
    client: 'SY53 Live',
    services: ['Design', 'Development', 'Strategy'],
    timeline: '8 weeks',
    results: [
      { label: 'PageSpeed score', value: '97/100' },
      { label: 'Load time', value: '0.9s' },
      { label: 'Responsive pages', value: '100%' },
    ],
    challenge:
      'SY53 Live needed a website that reflected the energy of the station while making it easy for listeners to access live broadcasts, explore podcast episodes, and discover new content across any device.',
    approach: [
      'Created a clean information architecture focused on live radio, podcasts, and station updates.',
      'Designed a modern interface that reflects the station’s personality and branding.',
      'Developed the site with Next.js to deliver fast performance, responsive layouts, and strong SEO.',
      'Integrated streaming links, podcast content, and clear calls to action for listeners and contributors.',
    ],
    outcome:
      'The completed website provides SY53 Live with a modern digital presence that is fast, accessible, and easy to maintain, giving listeners a seamless experience across desktop and mobile devices.',
    quote: {
      text: 'The new website captures the spirit of our station perfectly. It is faster, easier to use, and gives our audience a much better experience.',
      author: 'Paul Froggat',
      role: 'Founder SY53 Live',
    },
  }
]

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((study) => study.slug === slug)
}
