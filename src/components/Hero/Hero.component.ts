import { ComponentClass } from '@utilities/component-class.utilities'
import { heroData } from './Hero.data'
import template from './Hero.template.hbs'
import type { HeroTemplate } from './Hero.types'

export class Hero extends ComponentClass {
  constructor(module: HTMLElement) {
    super(module)

    this.render<HeroTemplate>({
      template,
      data: heroData
    })

    this.load()
  }
}

export default (module: HTMLElement) => new Hero(module)
