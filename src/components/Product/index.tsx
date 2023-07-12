import { useState } from 'react'
import { useDispatch } from 'react-redux'

import { add, open } from '../../store/reducers/cart'

import {
  Card,
  Description,
  Title,
  Img,
  ModalContent,
  Infos,
  Modal
} from './styles'

import Button from '../Button'
import { Menu } from '../../pages/Profile'

type ModalState = {
  isVisible: boolean
}

const Product = ({ foto, nome, descricao, porcao, preco, id }: Menu) => {
  const dispatch = useDispatch()

  const menu: Menu = {
    id,
    foto,
    nome,
    descricao,
    porcao,
    preco
  }

  const addToCart = () => {
    dispatch(add(menu))
    dispatch(open())
  }

  const [modal, setModal] = useState<ModalState>({
    isVisible: false
  })

  const getDescricao = (descricao: string) => {
    if (descricao.length > 95) {
      return descricao.slice(0, 120) + '...'
    }
  }

  return (
    <>
      <Card>
        <Img src={foto} alt={nome} />
        <Title>{nome}</Title>
        <Description>{getDescricao(descricao)}</Description>
        <Button onClick={() => setModal({ isVisible: true })}>
          Mais detalhes
        </Button>
      </Card>
      <Modal className={modal.isVisible ? 'visible' : ''}>
        <ModalContent>
          <div>
            <img src={foto} alt={nome} />
          </div>
          <Infos>
            <div>
              <span onClick={() => setModal({ isVisible: false })}>X</span>
              <h3>{nome}</h3>
              <p>{descricao}</p>
            </div>
            <div>
              <p>Serve de: {porcao}</p>
              <button onClick={addToCart}>
                Adicionar ao carrinho - R$ ${preco}
              </button>
            </div>
          </Infos>
        </ModalContent>
        <div
          className="overlay"
          onClick={() => setModal({ isVisible: false })}
        ></div>
      </Modal>
    </>
  )
}

export default Product
