import type { FooterTemplate } from './Footer.types'
import Logo from './images/remitly-logo.svg'

export const footerData: FooterTemplate = {
  title: 'Brought to you by',
  logo: Logo ?? '',
  navigation: [
    {
      title: 'Homepage',
      url: 'https://www.remitly.com/',
      target: '_blank'
    }
  ]
}
