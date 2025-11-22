import type { HeadTemplate } from './Head.types'
import Favicon from './images/favicon.png'
import Social from './images/social.jpg'

export const headData: HeadTemplate = {
  favicon: Favicon ?? '',
  social: Social ?? ''
}
