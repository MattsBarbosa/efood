import { RestaurantType } from '../../pages/Home'
import { Herobg } from './styles'

type Props = {
  restaurant: RestaurantType
}

const Hero = ({ restaurant }: Props) => (
  <>
    <Herobg style={{ backgroundImage: `url(${restaurant.capa})` }}>
      <div className="container">
        <p>{restaurant.tipo}</p>
        <h2>{restaurant.titulo}</h2>
      </div>
    </Herobg>
  </>
)

export default Hero
