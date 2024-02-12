import { createRoot } from 'react-dom/client'
import AppRoutes from '@/routes/Routes'

const rootElement = document.getElementById('root')
if (rootElement != null) {
  createRoot(rootElement).render(<AppRoutes />)
}
