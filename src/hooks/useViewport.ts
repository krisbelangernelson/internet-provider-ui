import { useState, useEffect } from 'react'

const useViewport = (): { width: number } => {
  const [width, setWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleWindowResize = (): void => {
      setWidth(window.innerWidth)
    }
    window.addEventListener('resize', handleWindowResize)
    return () => {
      window.removeEventListener('resize', handleWindowResize)
    }
  }, [])

  return { width }
}

export default useViewport
