import { Card, Description, Title, Img } from './styles'

import Button from '../Button'

type Props = {
  image: string
  name: string
  description: string
}

const Product = ({ image, name, description }: Props) => (
  <Card>
    <Img src={image} alt={name} />
    <Title>{name}</Title>
    <Description>{description}</Description>
    <Button to="#">Adicionar ao carrinho</Button>
  </Card>
)

export default Product
