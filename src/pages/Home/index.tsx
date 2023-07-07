import RestaurantsList from '../../container/RestaurantsList'
import RestaurantClass from '../../models/RestaurantClass'

import hioki from '../../assets/images/hioki.jpg'
import dolceVita from '../../assets/images/la_dolce_vita.png'
import Header from '../../components/Header'

const mockRestaurants: RestaurantClass[] = [
  {
    id: 1,
    image: hioki,
    name: 'Hioki Sushi',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
    review: 4.9,
    tags: ['Destaque da semana', 'Japonesa']
  },
  {
    id: 2,
    image: dolceVita,
    name: 'La Dolce Vita Trattoria',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    review: 4.6,
    tags: ['Italiana']
  },
  {
    id: 3,
    image: dolceVita,
    name: 'La Dolce Vita Trattoria',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    review: 4.6,
    tags: ['Italiana']
  },
  {
    id: 4,
    image: dolceVita,
    name: 'La Dolce Vita Trattoria',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    review: 4.6,
    tags: ['Italiana']
  },
  {
    id: 5,
    image: dolceVita,
    name: 'La Dolce Vita Trattoria',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    review: 4.6,
    tags: ['Italiana']
  },
  {
    id: 6,
    image: dolceVita,
    name: 'La Dolce Vita Trattoria',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    review: 4.6,
    tags: ['Italiana']
  }
]

const Home = () => (
  <>
    <Header category="home" />
    <RestaurantsList restaurants={mockRestaurants} />
  </>
)

export default Home
