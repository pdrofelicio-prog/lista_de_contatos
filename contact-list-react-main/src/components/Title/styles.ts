import styled from 'styled-components'
import { Props } from '.'

export const Title = styled.h3<Props>`
  color: ${(props) => props.theme.secondaryColor};
  font-size: ${(props) => (props.fontSize ? props.fontSize : '14px')};
  font-weight: 900;
  margin-bottom: 16px;
  text-align: center;
`
