import { Card, Description, Head, Infos, Tags } from './styles'

import star from '../../assets/images/star_favorite.svg'
import Tag from '../Tag'
import Button from '../Button'

type Props = {
  image: string
  name: string
  description: string
  review: number
  tags: string[]
}

const Restaurant = ({ image, name, description, review, tags }: Props) => (
  <Card>
    <img src={image} alt={name} />
    <Tags>
      {tags.map((tag) => (
        <Tag key={tag}>{tag}</Tag>
      ))}
    </Tags>
    <Infos>
      <Head>
        <h2>{name}</h2>
        <div>
          <p>{review}</p>
          <img src={star} alt="star" />
        </div>
      </Head>
      <Description>{description}</Description>
    </Infos>
    <Button to="/profile">Saiba mais</Button>
  </Card>
)

export default Restaurant
