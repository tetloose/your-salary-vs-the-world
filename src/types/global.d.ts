declare module '*.hbs' {
  const template: <T>(context?: T) => string

  export default template
}

declare module '*.scss' {
  const content: Record<string, string>
  export default content
}
