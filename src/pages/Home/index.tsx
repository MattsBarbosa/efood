import Header from '../../components/Header'
import RestaurantsList from '../../container/RestaurantsList'

import { useGetRestaurantsQuery } from '../../services/api'

export type RestaurantType = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: [
    {
      id: number
      foto: string
      preco: number
      nome: string
      descricao: string
      porcao: string
    }
  ]
}

const Home = () => {
  const { data: restaurants } = useGetRestaurantsQuery()

  if (restaurants) {
    return (
      <>
        <Header category="home" />
        <RestaurantsList restaurants={restaurants} />
      </>
    )
  }
  return <h3>Carregando...</h3>
}

export default Home
