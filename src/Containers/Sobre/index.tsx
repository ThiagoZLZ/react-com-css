import Titulo from '../../Components/Titulo'
import { P as Paragrafo } from '../../Components/Paragrafo/styles'
import { GithubSecao } from './style'

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre min</Titulo>
    <Paragrafo tipo="secundario">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi ipsa
      praesentium corporis explicabo perspiciatis voluptatum earum facere non
      suscipit iste, facilis voluptatibus natus quisquam, tenetur consectetur,
      esse iusto sed animi?
    </Paragrafo>
    <GithubSecao>
      <img src="https://github-readme-stats.vercel.app/api?username=ThiagoZLZ&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=ThiagoZLZ&layout=compact&langs_count=7&theme=dracula" />
    </GithubSecao>
  </section>
)

export default Sobre
