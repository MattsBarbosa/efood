import Restaurant from '../../components/Restaurant'
import RestaurantClass from '../../models/RestaurantClass'
import { List } from './styles'

type Props = {
  restaurants: RestaurantClass[]
}

const RestaurantsList = ({ restaurants }: Props) => (
  <div className="container">
    <List>
      {restaurants.map((restaurant) => (
        <Restaurant
          key={restaurant.id}
          image={restaurant.image}
          name={restaurant.name}
          review={restaurant.review}
          description={restaurant.description}
          tags={restaurant.tags}
        />
      ))}
    </List>
  </div>
)

export default RestaurantsList
