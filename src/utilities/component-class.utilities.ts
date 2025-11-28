import { settings } from '@config/settings.config'

export class ComponentClass {
  module: HTMLElement
  scrollId?: string
  observer?: IntersectionObserver

  constructor(module: HTMLElement) {
    this.module = module
    this.scrollId = module.dataset.scrollId ?? ''
  }

  load() {
    const { module } = this
    const { classList } = module
    const { fadeIn, hide, duration } = settings

    module.style.opacity = ''

    setTimeout(() => {
      classList.add(fadeIn)

      setTimeout(() => {
        classList.remove(fadeIn)
        classList.remove(hide)
      }, duration)
    }, duration)
  }

  render<T>({
    template,
    data
  }: {
    template: (context?: T) => string
    data: T
  }) {
    const { module } = this

    if (!module || !template || !data) return

    const html = template(data)
    const parser = new DOMParser()
    const doc = parser.parseFromString(html, 'text/html')
    const rendered = doc.body.firstElementChild as HTMLElement

    module.replaceWith(rendered)

    if (!rendered) return

    this.module = rendered
  }

  initObserver() {
    const { module, scrollId } = this

    if (!scrollId) return

    const options: IntersectionObserverInit = {
      root: null,
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0
    }

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const navItems = document.querySelectorAll('.js-section')

          navItems.forEach((item) => item.classList.remove('is-active'))

          const matchingNavItems = document.querySelectorAll(
            `.js-section[data-scroll-to="${scrollId}"]`
          )
          matchingNavItems.forEach((item) => {
            item.classList.add('is-active')
          })
        }
      })
    }, options)

    this.observer.observe(module)
  }
}
