import Projetos from './Containers/Projetos'
import EstiloGlobal, { Container } from './styles'
import Sobre from './Containers/Sobre'
import Sidebar from './Containers/Sidebar'

function App() {
  return (
    <>
      <EstiloGlobal />
      <Container>
        <Sidebar />
        <main>
          <Sobre />
          <Projetos />
        </main>
      </Container>
    </>
  )
}

export default App
