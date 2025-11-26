import { ComponentClass } from '@utilities/component-class.utilities'

export class Chapter extends ComponentClass {
  scrollId?: string
  observer?: IntersectionObserver

  constructor(module: HTMLElement) {
    super(module)

    this.scrollId = module.dataset.scrollId ?? undefined
    this.initObserver()
    this.load()
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
          // Remove is-active from all nav items
          const navItems = document.querySelectorAll('.js-section')
          navItems.forEach((item) => item.classList.remove('is-active'))

          // Add is-active to matching nav item
          const matchingNavItem = document.querySelector(
            `.js-section[data-scroll-to="${scrollId}"]`
          )
          if (matchingNavItem) {
            matchingNavItem.classList.add('is-active')
          }
        }
      })
    }, options)

    this.observer.observe(module)
  }
}

export default (module: HTMLElement) => new Chapter(module)
