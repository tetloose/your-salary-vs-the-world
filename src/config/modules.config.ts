export const modules = {
  Head: () =>
    import(/* webpackChunkName: 'head' */ '@components/Head/Head.component'),
  Footer: () =>
    import(
      /* webpackChunkName: 'footer' */ '@components/Footer/Footer.component'
    ),
  Hero: () =>
    import(/* webpackChunkName: 'hero' */ '@components/Hero/Hero.component')
}
