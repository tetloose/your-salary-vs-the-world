import { ComponentClass } from '@utilities/component-class.utilities'

export class Content extends ComponentClass {
  constructor(module: HTMLElement) {
    super(module)

    this.load()
  }
}

export default (module: HTMLElement) => new Content(module)
