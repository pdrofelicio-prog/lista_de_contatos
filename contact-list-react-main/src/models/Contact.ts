class Contact {
  contactName: string
  phone: number | string
  email: string
  photo: string
  id: number

  constructor(
    contactName: string,
    phone: number | string,
    email: string,
    photo: string,
    id: number
  ) {
    this.contactName = contactName
    this.phone = phone
    this.email = email
    this.photo = photo
    this.id = id
  }
}

export default Contact
