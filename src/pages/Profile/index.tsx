import { useParams } from 'react-router-dom'

import Header from '../../components/Header'
import ProductList from '../../container/ProductList'
import Hero from '../../components/Hero'
import { useGetProfileQuery } from '../../services/api'

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
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const { data: restaurant } = useGetProfileQuery(id!)

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
