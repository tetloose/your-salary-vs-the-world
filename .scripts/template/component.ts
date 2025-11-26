import { ComponentClass } from '@utilities/component-class.utilities'
import './COMPONENT_NAME.styles.scss'

export class EXPORT_NAME extends ComponentClass {
  constructor(module: HTMLElement) {
    super(module)

    this.load()
  }
}

export default (module: HTMLElement) => new EXPORT_NAME(module)
