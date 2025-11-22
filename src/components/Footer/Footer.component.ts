import { ComponentClass } from '@utilities/component-class.utilities'
import { footerData } from './Footer.data'
import template from './Footer.template.hbs'
import type { FooterTemplate } from './Footer.types'

export class Footer extends ComponentClass {
  constructor(module: HTMLElement) {
    super(module)

    this.render<FooterTemplate>({
      template,
      data: footerData
    })

    this.load()
  }
}

export default (module: HTMLElement) => new Footer(module)
