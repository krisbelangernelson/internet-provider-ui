declare module '*.svg' {
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>
  export default content
}

interface ScssVariables {
  primary: string
  'primary-hover': string
}

declare module '*.scss' {
  const content: ScssVariables
  export default content
}
