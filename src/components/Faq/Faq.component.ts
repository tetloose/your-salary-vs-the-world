import { ComponentClass } from '@utilities/component-class.utilities'
import './Faq.styles.scss'

export class Faq extends ComponentClass {
  constructor(module: HTMLElement) {
    super(module)

    this.loadEventListeners()
  }

  loadEventListeners() {
    const { module } = this

    if (!module) return

    module.addEventListener('click', (e) => this.handleClick(e))

    this.initObserver()
    this.load()
  }

  handleClick(e: Event) {
    e.preventDefault()

    const { target } = e

    if (
      target instanceof HTMLElement &&
      target.classList.contains('js-faqItemTrigger')
    ) {
      const item = target.parentElement as HTMLElement
      const content = target.nextElementSibling as HTMLElement

      if (item.classList.contains('is-visible')) {
        this.hide(item, content)
      } else {
        this.show(item, content)
      }
    }
  }

  show(item: HTMLElement, content: HTMLElement) {
    item.querySelector('button').setAttribute('aria-expanded', 'true')
    content.setAttribute('aria-hidden', 'false')

    const getHeight = () => {
      content.style.display = 'block'

      const height = content.scrollHeight + 'px'

      content.style.display = ''

      return height
    }

    const height = getHeight()

    item.classList.add('is-visible')

    content.style.height = height

    setTimeout(() => {
      content.style.height = ''
    }, 400)
  }

  hide(item: HTMLElement, content: HTMLElement) {
    item.querySelector('button').setAttribute('aria-expanded', 'false')
    content.setAttribute('aria-hidden', 'true')
    content.style.height = content.scrollHeight + 'px'

    setTimeout(() => {
      content.style.height = '0'
    }, 1)

    setTimeout(() => {
      item.classList.remove('is-visible')
    }, 400)
  }
}

export default (module: HTMLElement) => new Faq(module)
