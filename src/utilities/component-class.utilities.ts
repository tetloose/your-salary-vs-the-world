export class ComponentClass {
  module: HTMLElement

  constructor(module: HTMLElement) {
    this.module = module
  }

  load() {
    const { module } = this
    const { classList } = module
    const animate = {
      show: 'u-load-fade-in',
      hide: 'u-load-hide'
    }

    module.style.opacity = ''

    setTimeout(() => {
      classList.add(animate.show)

      setTimeout(() => {
        classList.remove(animate.show)
        classList.remove(animate.hide)
      }, 400)
    }, 400)
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
