import { ComponentClass } from '@utilities/component-class.utilities'
import './Toc.styles.scss'

export class Toc extends ComponentClass {
  constructor(module: HTMLElement) {
    super(module)

    this.load()
  }
}

export default (module: HTMLElement) => new Toc(module)
