import { ComponentClass } from '@utilities/component-class.utilities'
import './Hero.styles.scss'

export class Hero extends ComponentClass {
  constructor(module: HTMLElement) {
    super(module)

    this.initObserver()
    this.load()
  }
}

export default (module: HTMLElement) => new Hero(module)
