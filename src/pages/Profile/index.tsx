import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { RestaurantType } from '../Home'
import Header from '../../components/Header'
import ProductList from '../../container/ProductList'
import Hero from '../../components/Hero'

export type Menu = {
  id: number
  foto: string
  preco: number
  nome: string
  descricao: string
  porcao: string
}

const Profile = () => {
  const { id } = useParams()

  const [restaurant, setRestaurant] = useState<RestaurantType>()

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`).then(
      (res) => res.json().then((res) => setRestaurant(res))
    )
  }, [id])

  if (!restaurant) {
    return <h3>Carregando...</h3>
  }

  return (
    <>
      <Header category="profile" />
      <Hero restaurant={restaurant} />
      <ProductList products={restaurant.cardapio} />
    </>
  )
}

export default Profile
