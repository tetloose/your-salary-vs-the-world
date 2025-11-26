export const modules = {
  Header: () =>
    import(
      /* webpackChunkName: 'header' */ '@components/Header/Header.component'
    ),
  Footer: () =>
    import(
      /* webpackChunkName: 'footer' */ '@components/Footer/Footer.component'
    ),
  Hero: () =>
    import(/* webpackChunkName: 'hero' */ '@components/Hero/Hero.component'),
  Content: () =>
    import(
      /* webpackChunkName: 'content' */ '@components/Content/Content.component'
    ),
  ScoreCard: () =>
    import(
      /* webpackChunkName: 'score-card' */ '@components/Score-card/Score-card.component'
    ),
  Social: () =>
    import(
      /* webpackChunkName: 'social' */ '@components/Social/Social.component'
    ),
  Chapter: () =>
    import(
      /* webpackChunkName: 'chapter' */ '@components/Chapter/Chapter.component'
    ),
  ContentImage: () =>
    import(
      /* webpackChunkName: 'content-image' */ '@components/Content-image/Content-image.component'
    ),
  Blog: () =>
    import(/* webpackChunkName: 'blog' */ '@components/Blog/Blog.component')
}
