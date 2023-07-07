import { BrowserRouter } from 'react-router-dom'
import { GlobalStyles } from './styles'
import Footer from './components/Footer'
import Paths from './routes'

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Paths />
      <Footer />
    </BrowserRouter>
  )
}

export default App
