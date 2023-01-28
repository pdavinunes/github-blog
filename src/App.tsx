import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { BlogProvider } from './contexts/BlogContext'
import { Router } from './Router'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BlogProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </BlogProvider>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
