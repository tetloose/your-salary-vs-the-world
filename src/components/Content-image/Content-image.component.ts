import { ComponentClass } from '@utilities/component-class.utilities'
import './Content-image.styles.scss'

export class ContentImage extends ComponentClass {
  constructor(module: HTMLElement) {
    super(module)

    this.initObserver()
    this.load()
  }
}

export default (module: HTMLElement) => new ContentImage(module)
