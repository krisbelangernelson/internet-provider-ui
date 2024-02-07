import { createRoot } from 'react-dom/client'
import App from './App'

if (process.env.NODE_ENV === 'development') {
  const rootElement = document.querySelector('#root')
  if (rootElement != null) {
    createRoot(rootElement).render(<App />)
  }
}
