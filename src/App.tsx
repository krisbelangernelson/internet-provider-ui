import { createRoot } from 'react-dom/client'
import AppRoutes from '@/routes/Routes'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import ErrorBoundary from '@/components/templates/ErrorBoundary/ErrorBoundary'
import CustomerProvider from '@/providers/customer/CustomerProvider'
import NotificationProvider from './providers/notification/NotificationProvider'

const queryClient = new QueryClient()

const rootElement = document.getElementById('root')
if (rootElement != null) {
  createRoot(rootElement).render(
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <CustomerProvider>
          <NotificationProvider>
            <AppRoutes />
          </NotificationProvider>
        </CustomerProvider>
      </QueryClientProvider>
    </ErrorBoundary>
  )
}
