import Product from '../../components/Product'
import ProductClass from '../../models/ProductClass'
import { List } from './styles'

type Props = {
  products: ProductClass[]
}

const ProductList = ({ products }: Props) => (
  <div className="container">
    <List>
      {products.map((product) => (
        <Product
          key={product.id}
          image={product.image}
          name={product.name}
          description={product.description}
        />
      ))}
    </List>
  </div>
)

export default ProductList
