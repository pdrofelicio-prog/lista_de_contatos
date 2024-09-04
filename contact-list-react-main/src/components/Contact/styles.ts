import styled from 'styled-components'
import lightTheme from '../../themes/light'

export type Props = {
  cardWidth?: string
}

export const ContactCardStyle = styled.div<Props>`
  font-size: 24px;
  border-radius: 8px;
  border: 1px solid ${(props) => props.theme.color4};
  max-width: 300px;
  padding: 24px;
  margin: 8px;
  position: relative;
  text-align: center;

  img {
    width: 80px;
    height: 80px;
    display: block;
    margin: 0 auto 24px auto;
    border-radius: 8px;
  }

  h3,
  input {
    font-weight: 900;
    margin: 4px 2px;
    color: ${(props) => props.theme.secondaryColor};

    &[disabled] {
      border-color: transparent;
      background-color: transparent;
    }
  }

  div {
    display: flex;
    margin: 4px 0;
    justify-content: space-between;
  }

  @media (max-width: 500px) {
    margin: 8px auto;
  }
`

export const EditButton = styled.button`
  background-color: ${(props) => props.color || 'transparent'};
  padding: 4px;
  border-radius: 8px;
  border: 1px solid ${lightTheme.color5};
  max-height: 32px;
  text-align: center;
  cursor: pointer;
  position: absolute;
  right: 4px;
  top: 4px;

  &:hover {
    transform: scale(1.1);
  }

  &:active {
    transform: scale(1);
  }

  img {
    width: 24px;
    height: 24px;
  }
`

export const RemoveButton = styled(EditButton)`
  position: relative;
  background-color: ${(props) => props.color};
  padding: 8px;
  font-weight: bold;
`
