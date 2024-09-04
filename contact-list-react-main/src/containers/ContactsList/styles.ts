import styled from 'styled-components'
import darkTheme from '../../themes/dark'

export const ContactListContainer = styled.div`
  padding: 24px;
  position: sticky;
  height: 80vh;
  overflow-y: auto;
  text-align: center;

  @media (max-width: 500px) {
    display: block;
    padding: 8px;
  }
`

export const ContactListStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  @media (max-width: 500px) {
    display: block;
  }
`

export const Message = styled.h3`
  color: ${(props) => (props.theme === darkTheme ? '#fff' : '#000')};
  font-weight: bold;
  font-size: 18px;
`
