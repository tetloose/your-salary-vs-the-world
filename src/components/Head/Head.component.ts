import { ComponentClass } from '@utilities/component-class.utilities'
import { headData } from './Head.data'
import template from './Head.template.hbs'
import type { HeadTemplate } from './Head.types'

export class Head extends ComponentClass {
  constructor(module: HTMLElement) {
    super(module)

    this.render<HeadTemplate>({
      template,
      data: headData
    })
  }
}

export default (module: HTMLElement) => new Head(module)
