import { Button as ButtonStyle } from './styles'

export type Props = {
  children: string
  color?: string
  type: 'button' | 'submit' | 'reset'
  onClick?: () => void
}

const Button = ({ children, color, type, onClick }: Props) => (
  <ButtonStyle type={type} onClick={onClick} style={{ backgroundColor: color }}>
    {children}
  </ButtonStyle>
)

export default Button
