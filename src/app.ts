import '@legacy/setup.js'
import '@legacy/landing-lib.js'
import '@legacy/page.js'
import '@legacy/main.js'
import { components } from '@utilities/components.utilities'
import { loadComponent } from '@utilities/load-component.utilities'
import { observer } from '@utilities/observer.utilities'
import '@styles/app.css'

components?.forEach((component) => {
  const { dataset } = component
  const { module, preload } = dataset

  if (preload && module) {
    loadComponent(component, module)
  } else {
    observer.observe(component)
  }
})
