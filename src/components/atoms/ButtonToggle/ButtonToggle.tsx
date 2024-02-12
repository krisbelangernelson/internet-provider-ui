import { type ReactElement, type FC } from 'react'
import Button from 'react-bootstrap/Button'

interface ButtonToggleProps {
  active: boolean
  label: string
  name: string
  full?: boolean
  onClick: (selection: string) => void
}

const ButtonToggle: FC<ButtonToggleProps> = ({ active, label, name, onClick, full }): ReactElement => (
  <Button
    variant={active ? 'primary' : 'secondary'}
    size="lg"
    className={full === true ? 'w-100 btn-block' : ''}
    onClick={() => {
      onClick(name)
    }}
  >
    {label}
  </Button>
)

export default ButtonToggle
