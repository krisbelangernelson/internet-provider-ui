// declare module 'react' {
//   type CSSProperties = Record<`--${string}`, string | number>
// }

import 'react'

interface ResourcesConfig {
  environment: string
}

declare let Resources: ResourcesConfig

type CustomCSS = { [key in `--${string}`]: string | boolean }
declare module 'react' {
  export interface CSSProperties extends CustomCSS {}
}
