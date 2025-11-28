import { ComponentClass } from '@utilities/component-class.utilities'

export class Chapter extends ComponentClass {
  constructor(module: HTMLElement) {
    super(module)

    this.initObserver()
    this.load()
  }
}

export default (module: HTMLElement) => new Chapter(module)
