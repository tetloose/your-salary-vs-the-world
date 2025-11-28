import { ComponentClass } from '@utilities/component-class.utilities'
import './Quote.styles.scss'

export class Quote extends ComponentClass {
  constructor(module: HTMLElement) {
    super(module)

    this.initObserver()
    this.load()
  }
}

export default (module: HTMLElement) => new Quote(module)
