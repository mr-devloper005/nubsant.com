import type { TaskKey, TaskLayoutKey } from '@/design/factory/types'

export const TASK_MODULES: Record<TaskKey, TaskLayoutKey[]> = {
  listing: ['listing-directory', 'listing-showcase'],
  classified: ['classified-bulletin', 'classified-market'],
  article: ['article-editorial', 'article-journal'],
  image: ['image-masonry', 'image-portfolio'],
  profile: ['profile-creator', 'profile-business', 'profile-social-ribbon'],
  sbm: ['sbm-curation', 'sbm-library'],
  pdf: ['pdf-reading-room'],
}
