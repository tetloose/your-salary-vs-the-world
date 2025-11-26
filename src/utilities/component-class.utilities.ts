import { settings } from '@config/settings.config'

export class ComponentClass {
  module: HTMLElement

  constructor(module: HTMLElement) {
    this.module = module
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
}
