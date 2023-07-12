import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import { GlobalStyles } from './styles'
import Footer from './components/Footer'
import Cart from './components/Cart'
import Paths from './routes'
import { store } from './store'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyles />
        <Paths />
        <Footer />
        <Cart />
      </BrowserRouter>
    </Provider>
  )
}

export default App
