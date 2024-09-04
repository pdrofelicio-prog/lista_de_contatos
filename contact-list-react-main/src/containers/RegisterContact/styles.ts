import styled from 'styled-components'

import { ContactCardStyle } from '../../components/Contact/styles'

export const ContactEditCard = styled(ContactCardStyle)`
  margin: 0 auto;
  padding: 24px;
  margin-bottom: 32px;
  text-align: center;
  display: flex;
  flex-direction: column;

  img {
    width: 160px;
    height: 160px;
    margin-bottom: 48px;
  }

  @media (max-width: 500px) {
    max-width: 80%;
  }
`
export const InputContainer = styled.div`
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  margin-top: 20px;

  label {
  font-weight:bold;
    color:${(props) => props.theme.secondaryColor};
    margin-right: 8px;
    padding: 4px;
    text-align: right;
    min-width: 80px;
  }

  input {
    padding: 4px;
  }

 @media (max-width: 500px) {
    flex-direction: column;

    label {
      text-align: left;
      margin-right: 0;
      margin-bottom: 8px;
    }

    input {
      width: 100%;
    }
`
