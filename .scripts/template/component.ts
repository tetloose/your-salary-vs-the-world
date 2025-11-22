import { ComponentClass } from '@utilities/component-class.utilities'
import { COMPONENT_NAMEData } from './COMPONENT_NAME.data'
import template from './COMPONENT_NAME.template.hbs'
import type { EXPORT_NAMETemplate } from './COMPONENT_NAME.types'

export class EXPORT_NAME extends ComponentClass {
  constructor(module: HTMLElement) {
    super(module)

    this.render<EXPORT_NAMETemplate>({
      template,
      data: COMPONENT_NAMEData
    })

    this.load()
  }
}

export default (module: HTMLElement) => new EXPORT_NAME(module)
