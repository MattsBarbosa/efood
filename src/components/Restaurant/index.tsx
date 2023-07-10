import { Card, Description, Head, Infos, Tags } from './styles'

import star from '../../assets/images/star_favorite.svg'
import Tag from '../Tag'
import Button from '../Button'

type Props = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
}

const Restaurant = ({
  id,
  titulo,
  destacado = false,
  tipo,
  avaliacao,
  descricao,
  capa
}: Props) => (
  <Card>
    <img src={capa} alt={titulo} />
    <Tags>
      {destacado && <Tag>Destaque da Semana</Tag>}
      <Tag key={id}>{tipo}</Tag>
    </Tags>
    <Infos>
      <Head>
        <h2>{titulo}</h2>
        <div>
          <p>{avaliacao}</p>
          <img src={star} alt="star" />
        </div>
      </Head>
      <Description>{descricao}</Description>
    </Infos>
    <Button to={`/profile/${id}`}>Saiba mais</Button>
  </Card>
)

export default Restaurant
