import 'react'

type CustomCSS = { [key in `--${string}`]: string | boolean }
declare module 'react' {
  export interface CSSProperties extends CustomCSS {}
}
