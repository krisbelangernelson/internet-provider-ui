import { createRoot } from 'react-dom/client'
import AppRoutes from '@/routes/Routes'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

const rootElement = document.getElementById('root')
if (rootElement != null) {
  createRoot(rootElement).render(
    <QueryClientProvider client={queryClient}>
      <AppRoutes />
    </QueryClientProvider>
  )
}
