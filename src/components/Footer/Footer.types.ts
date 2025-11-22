export type NavigationItem = {
  title: string
  url: string
  target: string
}

export type FooterTemplate = {
  title: string
  logo?: string
  navigation: NavigationItem[]
}
