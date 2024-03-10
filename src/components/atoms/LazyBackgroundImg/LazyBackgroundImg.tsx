import { type FC, useState, type ReactNode } from 'react'

interface Props {
  img: string
  children?: ReactNode
  style?: React.CSSProperties
  isDarkened?: boolean
}

const LazyBackgroundImg: FC<Props> = ({ img, children, style, isDarkened }) => {
  const [loaded, setLoaded] = useState(false)

  const handleLoad = (): void => {
    setLoaded(true)
  }

  return (
    <div
      style={{
        backgroundImage: `${isDarkened === true ? 'linear-gradient( rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6) ),' : ''}url(${img})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
        filter: loaded ? 'none' : 'blur(20px)',
        transition: 'filter 0.5s',
        ...style
      }}
    >
      <img src={img} alt="" onLoad={handleLoad} style={{ display: 'none' }} />
      {loaded ? children : null}
    </div>
  )
}

export default LazyBackgroundImg
