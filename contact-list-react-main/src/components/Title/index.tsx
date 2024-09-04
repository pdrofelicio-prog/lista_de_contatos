import { Title as TitleStyle } from './styles'

export type Props = {
  children: string
  fontSize?: string
  color?: string
}

const Title = ({ children, fontSize, color }: Props) => (
  <TitleStyle color={color} fontSize={fontSize}>
    {children}
  </TitleStyle>
)

export default Title
