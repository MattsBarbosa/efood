import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'

import { open } from '../../store/reducers/cart'

import logo from '../../assets/images/logo.svg'
import background from '../../assets/images/background.png'

import {
  BackgroundImg,
  BackgroundImgPro,
  Logo,
  Nav,
  Title,
  LinksNav
} from './styles'

type Props = {
  category: 'home' | 'profile'
}

const Header = ({ category }: Props) => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatch(open())
  }

  if (category === 'home') {
    return (
      <header>
        <BackgroundImg style={{ backgroundImage: `url(${background})` }}>
          <Link to="/">
            <Logo src={logo} alt="EFOOD" />
          </Link>
          <Title>
            Viva experiências gastronômicas
            <br />
            no conforto da sua casa
          </Title>
        </BackgroundImg>
      </header>
    )
  }

  return (
    <header>
      <BackgroundImgPro style={{ backgroundImage: `url(${background})` }}>
        <div className="container">
          <Nav>
            <LinksNav to="/">Restaurantes</LinksNav>
            <Link to="/">
              <img src={logo} alt="EFOOD" />
            </Link>
            <p onClick={openCart}>${items.length} produto(s) no carrinho</p>
          </Nav>
        </div>
      </BackgroundImgPro>
    </header>
  )
}

export default Header
