import { ComponentClass } from '@utilities/component-class.utilities'
import './Sidebar.styles.scss'

export class Sidebar extends ComponentClass {
  constructor(module: HTMLElement) {
    super(module)

    this.load()
  }
}

export default (module: HTMLElement) => new Sidebar(module)
