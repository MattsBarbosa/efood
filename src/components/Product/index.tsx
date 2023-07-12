import { useState } from 'react'

import {
  Card,
  Description,
  Title,
  Img,
  Modal,
  ModalContent,
  Infos
} from './styles'

import Button from '../Button'
import { Menu } from '../../pages/Profile'

type ModalState = {
  isVisible: boolean
}

const Product = ({ foto, nome, descricao, porcao, preco }: Menu) => {
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
              <p>Serve: de {porcao}</p>
              <button>Adicionar ao carrinho - R$ ${preco}</button>
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
