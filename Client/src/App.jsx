import { useState } from 'react'
import Home from './components/Home/Home'
import { Route, Routes } from 'react-router-dom'
import ProductDetails from './components/ProductDetail/ProductDetails'
import Header from './components/Basic-Compo/Header'
import Footer from './components/Basic-Compo/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
      <Routes>
        
        <Route path='/' element={<Home />}/>
        <Route path='/product/:id/:name/:type'  element={<ProductDetails />} />

        {/*<Route path="*" element={} />*/}

        

      </Routes>
      <Footer />
    </>
  )
}

export default App
