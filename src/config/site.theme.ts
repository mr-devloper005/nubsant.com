import { defineSiteTheme } from '@/config/site.theme.defaults'

export const SITE_THEME = defineSiteTheme({
  shell: 'editorial',
  hero: {
    variant: 'search-first',
    eyebrow: 'Documents & social presence',
  },
  home: {
    layout: 'editorial-rhythm',
    primaryTask: 'pdf',
    featuredTaskKeys: ['pdf', 'profile'],
  },
  navigation: {
    variant: 'capsule',
  },
  footer: {
    variant: 'editorial',
  },
  cards: {
    listing: 'listing-elevated',
    article: 'editorial-feature',
    image: 'studio-panel',
    profile: 'profile-identity',
    classified: 'catalog-grid',
    pdf: 'document-shelf',
    sbm: 'editorial-feature',
    social: 'editorial-feature',
    org: 'catalog-grid',
    comment: 'editorial-feature',
  },
})
