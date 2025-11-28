import { ComponentClass } from '@utilities/component-class.utilities'
import './Blog.styles.scss'

export class Blog extends ComponentClass {
  constructor(module: HTMLElement) {
    super(module)

    this.initObserver()
    this.load()
  }
}

export default (module: HTMLElement) => new Blog(module)
