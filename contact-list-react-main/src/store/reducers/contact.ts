import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import Contact from '../../models/Contact'

type ContactState = {
  contacts: Contact[]
}

const initialState: ContactState = {
  contacts: []
}

const contactSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: (state, action: PayloadAction<Contact>) => {
      const contactExists = state.contacts.some(
        (contactInList) =>
          contactInList.contactName.toLocaleLowerCase() ===
          action.payload.contactName.toLocaleLowerCase()
      )
      if (contactExists) {
        alert('Já está na lista')
      } else {
        const lastContact = state.contacts[state.contacts.length - 1]
        const newContact = {
          ...action.payload,
          id: lastContact ? lastContact.id + 1 : 1
        }
        state.contacts.push(newContact)
      }
    },

    remove: (state, action: PayloadAction<number>) => {
      state.contacts = state.contacts.filter(
        (contact) => contact.id !== action.payload
      )
    },

    edit: (state, action: PayloadAction<Contact>) => {
      const contactIndex = state.contacts.findIndex(
        (c) => c.id === action.payload.id
      )
      if (contactIndex >= 0) {
        state.contacts[contactIndex] = action.payload
      }
    }
  }
})

export const { addContact, remove, edit } = contactSlice.actions
export default contactSlice.reducer
