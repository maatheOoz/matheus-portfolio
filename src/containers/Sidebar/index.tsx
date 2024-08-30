import Avatar from '../../components/Avatar'
import Paragrafo from '../../components/Paragrafo'
import Titulo from '../../components/Titulo'

import { Descricao, BotaoTema, SidebarContainer } from './styles'

type Props = {
  trocaTema: () => void
}

const Sidebar = (props: Props) => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Titulo fontSize={17}>Matheus Vieira</Titulo>
      <Paragrafo tipo="secundario" fontSize={16}>
        maatheOoz
      </Paragrafo>
      <Descricao tipo="principal" fontSize={11}>
        Desenvolvedor Python
      </Descricao>
      <BotaoTema onClick={props.trocaTema}>Troca tema</BotaoTema>
    </SidebarContainer>
  </aside>
)

export default Sidebar
