import { ComponentClass } from '@utilities/component-class.utilities'

export class Footer extends ComponentClass {
  constructor(module: HTMLElement) {
    super(module)

    this.load()
  }
}

export default (module: HTMLElement) => new Footer(module)
