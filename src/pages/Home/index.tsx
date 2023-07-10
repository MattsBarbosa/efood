import { useEffect, useState } from 'react'

import Header from '../../components/Header'
import RestaurantsList from '../../container/RestaurantsList'

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
  const [restaurants, setRestaurants] = useState<RestaurantType[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes').then(
      (res) => res.json().then((res) => setRestaurants(res))
    )
  }, [])

  return (
    <>
      <Header category="home" />
      <RestaurantsList restaurants={restaurants} />
    </>
  )
}

export default Home
