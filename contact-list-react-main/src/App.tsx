import { useState, useEffect } from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { ThemeProvider } from 'styled-components'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import { store, persistor } from './store'

import GlobalStyle, { ThemeButton, MainContainer } from './styles/styles'
import lightTheme from './themes/light'
import darkTheme from './themes/dark'
import darkIcon from './assets/dark-mode.png'
import lightIcon from './assets/light-mode.png'

import Home from './Pages/Home'
import RegisterPage from './Pages/Register'

export type Props = {
  isUsingDarkTheme: boolean
}

function App() {
  const [isUsingDarkTheme, setIsUsingDarkTheme] = useState(false)

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme')
    if (storedTheme !== null) {
      setIsUsingDarkTheme(JSON.parse(storedTheme))
    }
  }, [])

  const changeTheme = () => {
    const newTheme = !isUsingDarkTheme
    setIsUsingDarkTheme(newTheme)
    localStorage.setItem('theme', JSON.stringify(newTheme))
  }

  const routes = createBrowserRouter([
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/Register',
      element: <RegisterPage />
    }
  ])

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={isUsingDarkTheme ? darkTheme : lightTheme}>
          <GlobalStyle />
          <MainContainer>
            <RouterProvider router={routes} />
            <ThemeButton onClick={changeTheme}>
              <img
                src={isUsingDarkTheme ? lightIcon : darkIcon}
                alt="Theme button"
              />
            </ThemeButton>
          </MainContainer>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  )
}

export default App
