declare module '*.svg' {
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>
  export default content
}

declare module '*.jpg'

interface ScssVariables {
  primary: string
  'primary-hover': string
}

declare module '*.scss' {
  const content: ScssVariables
  export default content
}

interface Api {
  baseUrl: string
}

interface ResourcesConfig {
  environment: string
  internetApi: Api
  customersApi: Api
  ordersApi: Api
}

declare let Resources: ResourcesConfig
