import Avatar from '../../Components/Avatar'
import Paragrafo from '../../Components/Paragrafo'
import Titulo from '../../Components/Titulo'
import { Descricao, BotaoTema, SideBarContainer } from './styles'

const Sidebar = () => (
  <aside>
    <SideBarContainer>
      <Avatar />
      <Titulo fontSize={15}>Thiago Carvalho</Titulo>
      <Paragrafo tipo="secundario" fontSize={16}>
        ThiagoZLZ
      </Paragrafo>
      <Descricao tipo="principal" fontSize={12}>
        Desenvolvedor Júnior
      </Descricao>
      <BotaoTema>Trocar tema</BotaoTema>
    </SideBarContainer>
  </aside>
)

export default Sidebar
