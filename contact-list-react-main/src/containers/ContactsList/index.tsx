import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'

import * as S from './styles'

import Title from '../../components/Title'
import ContactCard from '../../components/Contact/index'

const ContactsList = () => {
  const { contacts } = useSelector((state: RootReducer) => state.contacts)

  return (
    <S.ContactListContainer>
      <Title fontSize="24px">Contatos</Title>
      <hr />
      <S.ContactListStyle>
        {contacts.length === 0 ? (
          <S.Message>Você ainda não possui contatos na sua lista.</S.Message>
        ) : (
          contacts.map((contact) => (
            <ContactCard
              contactName={contact.contactName}
              phone={contact.phone}
              email={contact.email}
              photo={contact.photo}
              id={contact.id}
              key={contact.id}
            ></ContactCard>
          ))
        )}
      </S.ContactListStyle>
    </S.ContactListContainer>
  )
}

export default ContactsList
