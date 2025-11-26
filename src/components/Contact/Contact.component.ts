import { ComponentClass } from '@utilities/component-class.utilities'
import './Contact.styles.scss'

export class Contact extends ComponentClass {
  constructor(module: HTMLElement) {
    super(module)

    this.load()
  }
}

export default (module: HTMLElement) => new Contact(module)
