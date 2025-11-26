import { ComponentClass } from '@utilities/component-class.utilities'
import './Score-card.styles.scss'

export class ScoreCard extends ComponentClass {
  constructor(module: HTMLElement) {
    super(module)

    this.load()
  }
}

export default (module: HTMLElement) => new ScoreCard(module)
