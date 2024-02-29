import { useEffect } from 'react'

const useRedirect = (condition: boolean, location: string): void => {
  useEffect(() => {
    if (condition) {
      window.location.href = location
    }
  }, [condition])
}

export default useRedirect
