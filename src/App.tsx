import ReactDOM from 'react-dom/client'

export default function App(): React.ReactElement {
  return <>App loaded</>
}

class AppElement extends HTMLElement {
  root: ReactDOM.Root | undefined

  connectedCallback(): void {
    this.root = ReactDOM.createRoot(this)
    this.root.render(<App />)
  }
}

customElements.define('internet-provider-ui', AppElement)
