import { ComponentClass } from '@utilities/component-class.utilities'
import type { ToggleMenuProps } from './Header.types'
import './Header.styles.scss'

export class Header extends ComponentClass {
  trigger?: HTMLElement
  menu?: HTMLElement
  constructor(module: HTMLElement) {
    super(module)
    this.trigger = module.querySelector('.js-headerTrigger')
    this.menu = module.querySelector('.js-headerMenu')

    this.loadEventListeners()
    this.load()
  }

  loadEventListeners() {
    const { trigger, menu } = this

    if (!trigger || !menu) return

    trigger.addEventListener('click', (e) => {
      e.preventDefault()

      const triggerState = trigger.classList.contains('is-active')

      this.toggleMenu({
        element: trigger,
        expanded: triggerState ? 'false' : 'true',
        hide: triggerState
      })
      this.toggleMenu({
        element: menu,
        hidden: triggerState ? 'true' : 'false',
        hide: triggerState
      })
    })

    menu.addEventListener('click', (e) => {
      const target = e.target as HTMLElement
      const link = target.closest('a')

      if (link) {
        this.closeMenu()
      }
    })

    document.addEventListener('click', (e) => {
      const target = e.target as HTMLElement
      const isMenuOpen = menu.classList.contains('is-active')

      if (!isMenuOpen) return

      const isClickInsideMenu = menu.contains(target)
      const isClickOnTrigger = trigger.contains(target)

      if (!isClickInsideMenu && !isClickOnTrigger) {
        this.closeMenu()
      }
    })
  }

  closeMenu() {
    const { trigger, menu } = this

    if (!trigger || !menu) return

    this.toggleMenu({
      element: trigger,
      expanded: 'false',
      hide: true
    })
    this.toggleMenu({
      element: menu,
      hidden: 'true',
      hide: true
    })
  }

  toggleMenu({ element, expanded, hidden, hide }: ToggleMenuProps) {
    if (expanded) {
      element.setAttribute('aria-expanded', expanded)
    }
    if (hidden) {
      element.setAttribute('aria-hidden', hidden)
    }

    if (hide) {
      element.classList.remove('is-active')
    } else {
      element.classList.add('is-active')
    }
  }
}

export default (module: HTMLElement) => new Header(module)
