import { useNavigate } from 'react-router-dom'

import { Footer as FooterStyle } from './styles'

import Button from '../Button'

const Footer = () => {
  const navigate = useNavigate()

  return (
    <FooterStyle>
      <Button type="button" onClick={() => navigate('/Register')}>
        Adicionar contato +
      </Button>
    </FooterStyle>
  )
}

export default Footer
