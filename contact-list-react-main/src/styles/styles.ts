import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
*{
  padding: 0;
  margin: 0;
  font-size:14px;
  font-family: "Roboto", sans-serif;

  hr{
  margin-bottom:24px;
  }
}
  body{
  overflow-y: hidden;
  }
`

export const MainContainer = styled.div`
  background-color: ${(props) => props.theme.backgroundColor};
  border: 1px solid ${(props) => props.theme.color3};
  max-width: 1200px;
  width: 100%;
  margin: 24px auto;
  border-radius: 8px;
  position: relative;

  @media (max-width: 768px) {
    max-width: 90vw;
  }

  @media (max-width: 500px) {
    max-width: 100vw;
    border: none;
  }
`

export const ThemeButton = styled.button`
  background: none;
  border: 1px solid ${(props) => props.theme.color5};
  padding: 4px;
  border-radius: 8px;
  cursor: pointer;
  position: absolute;
  right: 16px;
  bottom: 20px;

  @media (max-width: 500px) {
    right: 8px;
    bottom: 20px;
  }

  img {
    width: 40px;
    height: 40px;
    background-color: transparent;
  }

  &:hover {
    transform: scale(1.1);
  }
`
export default GlobalStyle
