import { ComponentClass } from '@utilities/component-class.utilities'
import './Header.styles.scss'

export class Header extends ComponentClass {
  constructor(module: HTMLElement) {
    super(module)

    this.load()
  }
}

export default (module: HTMLElement) => new Header(module)
