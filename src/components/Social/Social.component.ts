import { ComponentClass } from '@utilities/component-class.utilities'
import './Social.styles.scss'

export class Social extends ComponentClass {
  links?: NodeListOf<HTMLAnchorElement>
  url?: string
  title?: string

  constructor(module: HTMLElement) {
    super(module)
    this.links = module.querySelectorAll('.js-socialLink') ?? undefined
    this.url = encodeURIComponent(window.location.href) ?? ''
    this.title = encodeURIComponent(document.title) ?? ''
    this.share()
    this.load()
  }

  share() {
    const { links, url, title } = this

    if (!links && !url && !title) return

    links.forEach((link) => {
      const platform = link.dataset.platform

      let shareUrl = ''

      switch (platform) {
        case 'x':
          shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${title}`
          break
        case 'linkedin':
          shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`
          break
        case 'facebook':
          shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`
          break
        case 'reddit':
          shareUrl = `https://reddit.com/submit?url=${url}&title=${title}`
          break
      }

      link.href = shareUrl
    })
  }
}

export default (module: HTMLElement) => new Social(module)
