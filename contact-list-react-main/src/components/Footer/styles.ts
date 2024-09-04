import styled from 'styled-components'

export type Props = {
  padding?: string
}

export const Footer = styled.div<Props>`
  background-color: ${(props) => props.theme.color3};
  padding: 0;
  margin: 0;
  border-radius: 0 0 8px 8px;
  border: none;
  padding: ${(props) => (props.padding ? props.padding : '24px')};
  text-align: center;
  position: relative;
`
