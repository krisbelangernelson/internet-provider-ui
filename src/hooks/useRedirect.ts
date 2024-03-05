import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const useRedirect = (condition: boolean, location: string): void => {
  const navigate = useNavigate()
  useEffect(() => {
    if (condition) {
      navigate(location)
    }
  }, [condition])
}

export default useRedirect
