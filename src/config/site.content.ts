import type { TaskKey } from '@/lib/site-config'

export const siteContent = {
  navbar: {
    tagline: 'PDF library & social profiles',
  },
  footer: {
    tagline: 'Shared documents and public profile presence',
  },
  hero: {
    badge: 'Read in the browser or save for later',
    title: ['Your PDF shelf and', 'your public social profile, together.'],
    description:
      'Nubsant is built for people who collect documents worth keeping and want a clear public profile to match—without noisy feeds or generic business-directory chrome.',
    primaryCta: {
      label: 'Open PDF library',
      href: '/pdf',
    },
    secondaryCta: {
      label: 'Browse social profiles',
      href: '/profile',
    },
    searchPlaceholder: 'Search PDFs, profiles, and more',
    focusLabel: 'Focus',
    featureCardBadge: 'Fresh uploads',
    featureCardTitle: 'The homepage pairs file-first browsing with people-first presence.',
    featureCardDescription:
      'Documents stay easy to scan and open; profiles stay human and legible. Core platform behavior is unchanged—only the presentation is tuned for this product.',
  },
  home: {
    metadata: {
      title: 'Nubsant — PDF library & social profiles',
      description:
        'Browse a focused PDF library and discover public social profiles in one calm, colorful experience.',
      openGraphTitle: 'Nubsant — PDF library & social profiles',
      openGraphDescription:
        'Open shared PDFs, meet public profiles, and move between files and people without leaving the same site.',
      keywords: [
        'PDF library',
        'read PDF online',
        'social profile',
        'public profile',
        'document sharing',
        'Nubsant',
      ],
    },
    introBadge: 'Why this exists',
    introTitle: 'Two main surfaces: files you can open, and people you can trust.',
    introParagraphs: [
      'Nubsant keeps long-form documents and profile identity in the same place so visitors are never guessing whether a site is “about files” or “about people.”',
      'The PDF area reads like a reading room: big previews, clear titles, and a calm path to open or download. The social profile area reads like a meet-the-person card: face-forward layout, short bios, and clear links.',
      'Other task types in the system stay available by URL and search; the main navigation here highlights exactly what this product is for.',
    ],
    sideBadge: 'In one visit you can',
    sidePoints: [
      'Open shared PDFs in a clear, file-first layout.',
      'See who is behind the work with social-style profile cards.',
      'Search across both without switching to a different product skin.',
    ],
    primaryLink: {
      label: 'Go to PDF library',
      href: '/pdf',
    },
    secondaryLink: {
      label: 'View profiles',
      href: '/profile',
    },
  },
  cta: {
    badge: 'Get started',
    title: 'Publish documents and a profile that feel like one brand.',
    description:
      'Create an account to upload PDFs, tune your public profile, and help visitors connect files to the people who share them.',
    primaryCta: {
      label: 'Create account',
      href: '/register',
    },
    secondaryCta: {
      label: 'Contact us',
      href: '/contact',
    },
  },
  taskSectionHeading: 'Latest {label}',
  taskSectionDescriptionSuffix: 'Browse the newest posts in this section.',
} as const

export const taskPageMetadata: Record<Exclude<TaskKey, 'comment' | 'org' | 'social'>, { title: string; description: string }> = {
  article: {
    title: 'Articles and stories',
    description: 'Read articles, stories, guides, and long-form posts across topics and interests.',
  },
  listing: {
    title: 'Listings and discoverable pages',
    description: 'Explore listings, services, brands, and structured pages organized for easier browsing.',
  },
  classified: {
    title: 'Classifieds and announcements',
    description: 'Browse classifieds, offers, notices, and time-sensitive posts across categories.',
  },
  image: {
    title: 'Images and visual posts',
    description: 'Explore image-led posts, galleries, and visual stories from across the platform.',
  },
  profile: {
    title: 'Social profiles',
    description: 'Discover public profiles, bios, and the people behind shared PDFs and posts.',
  },
  sbm: {
    title: 'Curated links and saved resources',
    description: 'Browse useful links, saved references, and curated resources organized for discovery.',
  },
  pdf: {
    title: 'PDF library',
    description: 'Open, browse, and download shared PDFs in a file-first reading layout.',
  },
}

export const taskIntroCopy: Record<
  TaskKey,
  { title: string; paragraphs: string[]; links: { label: string; href: string }[] }
> = {
  listing: {
    title: 'Listings, services, and structured pages',
    paragraphs: [
      'Explore listings, services, brands, and discoverable pages across categories. Each entry is organized to make browsing clearer and help visitors quickly understand what a post offers.',
      'Listings connect naturally with articles, images, resources, and other content types so supporting information stays easy to reach from the same platform.',
      'Browse by category to compare posts in context, discover related content, and move between formats without losing your place.',
    ],
    links: [
      { label: 'Read articles', href: '/articles' },
      { label: 'Explore classifieds', href: '/classifieds' },
      { label: 'View profiles', href: '/profile' },
    ],
  },
  article: {
    title: 'Articles, stories, and long-form reading',
    paragraphs: [
      'This section is built for stories, explainers, guides, and long-form reading across topics and interests.',
      'Articles connect with listings, images, resources, and other content types so deeper reading can lead naturally into related discovery.',
      'Use this section to browse thoughtful posts, revisit useful writing, and move into supporting content when you want more context.',
    ],
    links: [
      { label: 'Explore listings', href: '/listings' },
      { label: 'Open images', href: '/images' },
      { label: 'Browse resources', href: '/pdf' },
    ],
  },
  classified: {
    title: 'Classifieds, offers, and timely updates',
    paragraphs: [
      'Classified posts help surface offers, notices, deals, and time-sensitive opportunities in a faster-scanning format.',
      'They work well alongside articles, listings, and profiles, making it easier to connect short-term posts with more structured content.',
      'Browse by category to find announcements quickly, then continue into related sections when you need more detail.',
    ],
    links: [
      { label: 'Business listings', href: '/listings' },
      { label: 'Read articles', href: '/articles' },
      { label: 'View profiles', href: '/profile' },
    ],
  },
  image: {
    title: 'Image-led posts and visual stories',
    paragraphs: [
      'Images take the lead in this section through galleries, visual posts, and story-led content where imagery carries the experience.',
      'These posts connect with articles, listings, and other sections so visuals can act as entry points into deeper content.',
      'Browse the latest visual updates, then continue into related stories or supporting pages for more context.',
    ],
    links: [
      { label: 'Read articles', href: '/articles' },
      { label: 'Explore listings', href: '/listings' },
      { label: 'Open classifieds', href: '/classifieds' },
    ],
  },
  profile: {
    title: 'Social profiles: people behind the work',
    paragraphs: [
      'This lane is the social side of Nubsant—public profiles with a card-style layout, photo-forward headers, and short, scannable bios.',
      'Use it to see who publishes PDFs, how they describe their work, and how to follow or connect. It is built to feel more like a meet-card than a corporate directory page.',
      'Start from a profile to jump into that person’s documents or other posts without losing the sense of who you are learning from.',
    ],
    links: [
      { label: 'Open PDF library', href: '/pdf' },
      { label: 'Search the site', href: '/search' },
      { label: 'Create account', href: '/register' },
    ],
  },
  sbm: {
    title: 'Curated links and bookmarked resources',
    paragraphs: [
      'This section collects useful links, references, tools, and saved resources in a text-first browsing format.',
      'Bookmarks stay connected to the rest of the platform, making it easier to move from a saved link into related stories, listings, or resources.',
      'Use this section to organize helpful sources and discover connected content without leaving the broader site experience.',
    ],
    links: [
      { label: 'Browse articles', href: '/articles' },
      { label: 'Explore listings', href: '/listings' },
      { label: 'Open PDFs', href: '/pdf' },
    ],
  },
  pdf: {
    title: 'PDF reading room',
    paragraphs: [
      'This is Nubsant’s file-first home: a PDF library designed for clear browsing, strong titles, and obvious open-or-download actions.',
      'The layout is closer to a document shelf than a social feed—more whitespace, calmer type, and a rhythm that helps you pick the right file quickly.',
      'From here you can jump to the author’s social profile when you want context about who published the work.',
    ],
    links: [
      { label: 'Social profiles', href: '/profile' },
      { label: 'Search', href: '/search' },
      { label: 'Sign in', href: '/login' },
    ],
  },
  social: {
    title: 'Short updates and community signals',
    paragraphs: [
      'Short updates add quick signals that keep activity flowing across the platform.',
      'They work well with stories, listings, and resources by helping visitors move from brief updates into deeper content.',
      'Use these posts as lightweight entry points into the broader site experience.',
    ],
    links: [
      { label: 'Open listings', href: '/listings' },
      { label: 'Read articles', href: '/articles' },
      { label: 'View PDFs', href: '/pdf' },
    ],
  },
  comment: {
    title: 'Comments and contextual responses',
    paragraphs: [
      'Comments surface responses connected directly to articles and help keep discussion close to the writing it belongs to.',
      'This layer adds perspective and reaction without needing a separate standalone content format.',
      'Use comments as supporting context beneath stories, then continue exploring related content from the same topic area.',
    ],
    links: [
      { label: 'Explore articles', href: '/articles' },
      { label: 'View listings', href: '/listings' },
      { label: 'See classifieds', href: '/classifieds' },
    ],
  },
  org: {
    title: 'Organizations, teams, and structured entities',
    paragraphs: [
      'Organization pages provide structured identity surfaces for teams, brands, communities, and agencies.',
      'Used with listings, stories, profiles, and resources, they help create stronger structure across the platform.',
      'Connect organization pages with related content to build a clearer and more unified site presence.',
    ],
    links: [
      { label: 'Business listings', href: '/listings' },
      { label: 'Read articles', href: '/articles' },
      { label: 'PDF library', href: '/pdf' },
    ],
  },
}
