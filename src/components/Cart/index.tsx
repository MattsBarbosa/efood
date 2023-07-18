import { useDispatch, useSelector } from 'react-redux'

import { close, remove, openOrder } from '../../store/reducers/cart'

import { RootReducer } from '../../store'
import {
  CartContainer,
  Delete,
  Img,
  List,
  ListItem,
  Overlay,
  SideBar,
  TotalPrice
} from './styles'
import Button from '../Button'
import trash from '../../assets/images/trash.png'

const formataPreco = (preco = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}

const Cart = () => {
  const { items, isOpen } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  const getTotalPrice = () => {
    return items.reduce((acumulador, comida) => {
      return (acumulador += comida.preco!)
    }, 0)
  }

  const closeCart = () => {
    dispatch(close())
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  const openOrderAction = () => {
    dispatch(openOrder())
    dispatch(close())
  }

  return (
    <>
      <CartContainer className={isOpen ? 'is-open' : ''}>
        <Overlay onClick={closeCart} />
        <SideBar>
          <List>
            {items.map((item) => (
              <ListItem key={item.id}>
                <Img src={item.foto} alt="" />
                <div>
                  <h3>{item.nome}</h3>
                  <p>R${item.preco}</p>
                </div>
                <Delete
                  src={trash}
                  alt="deletar"
                  onClick={() => removeItem(item.id)}
                />
              </ListItem>
            ))}
          </List>
          <TotalPrice>
            <p>Valor total</p>
            <p>{formataPreco(getTotalPrice())}</p>
          </TotalPrice>
          <Button onClick={openOrderAction}>Continuar com a entrega</Button>
        </SideBar>
      </CartContainer>
    </>
  )
}

export default Cart
