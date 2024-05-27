import styled from 'styled-components'
import { P } from '../../Components/Paragrafo/styles'

export const Descricao = styled(P)`
  margin-top: 24px;
  margin-bottom: 40px;
`

export const BotaoTema = styled.button`
  border-radius: 12px;
  padding: 10px;
  color: ${(props) => props.theme.corDeFundo};
  font-size: 10px;
  font-weigth: bold;
  background-color: ${(props) => props.theme.corPrincipal};

  @media (max-width: 768px) {
    width: 100%;
  }
`

export const SideBarContainer = styled.div`
  position: sticky;
  top: 80px;
  left: 0;

  @media (max-width: 768px) {
    margin-botton: 40px;
    text-align: center;
  }
`
