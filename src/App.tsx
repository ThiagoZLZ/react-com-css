import { ThemeProvider } from 'styled-components'
import Projetos from './Containers/Projetos'
import EstiloGlobal, { Container } from './styles'
import Sobre from './Containers/Sobre'
import Sidebar from './Containers/Sidebar'
import TemaLight from './Themes/light'
import TemaDark from './Themes/Dark'
import { useState } from 'react'

function App() {
  const [estaUsandoDark, setEstaUsandoDark] = useState(false)

  function TrocaTema() {
    setEstaUsandoDark(!estaUsandoDark)
  }

  return (
    <ThemeProvider theme={estaUsandoDark ? TemaDark : TemaLight}>
      <EstiloGlobal />
      <Container>
        <Sidebar trocaTema={TrocaTema} />
        <main>
          <Sobre />
          <Projetos />
        </main>
      </Container>
    </ThemeProvider>
  )
}

export default App
