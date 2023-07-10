import Product from '../../components/Product'
import { Menu } from '../../pages/Profile'

import { List } from './styles'

type Props = {
  products: Menu[]
}

const ProductList = ({ products }: Props) => {
  return (
    <div className="container">
      <List>
        {products.map((product) => (
          <Product
            id={product.id}
            key={product.id}
            foto={product.foto}
            nome={product.nome}
            preco={product.preco}
            porcao={product.porcao}
            descricao={product.descricao}
          />
        ))}
      </List>
    </div>
  )
}

export default ProductList
