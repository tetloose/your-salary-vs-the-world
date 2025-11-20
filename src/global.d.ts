import type jQuery from 'jquery'

declare global {
  interface Window {
    $: typeof jQuery
    jQuery: typeof jQuery
    ScrollHint: unknown
    SocialShareKit: unknown
  }
}

export {}
