import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth' // mapeia se a autenticação do usuário foi feita com sucesso

import './styles.css'

//components
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'

//hooks
import { useState, useEffect } from 'react'
import { useAuthentication } from './hooks/useAuthentication'

//context
import { AuthProvider } from './context/authContext'
import { CartProvider } from './context/cartContext'
import { OpenProvieder } from './context/openCartContext'

// pages
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Collections from './pages/Collections/Collections'
import Men from './pages/Men/Men'
import Women from './pages/Women/Women'
import Contact from './pages/Contact/Contact'

function App() {

  const [user, setUser] = useState(undefined)
  const { auth } = useAuthentication()
  const [openCart, setOpenCart] = useState(false)

  const loadingUser = user === undefined

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user)
    }, [auth])
  })

  if (loadingUser) {
    return <p>Carregando...</p>
  }

  return (
    <div className='containerGeral'>
      <AuthProvider value={{ user }}> {/* acessar o usuário em todos os locais  */}
        <CartProvider>
          <OpenProvieder>
            <BrowserRouter>
              <Navbar openCart={openCart} setOpenCart={setOpenCart} />
              <div className="container">
                <Routes>
                  <Route path='/' element={user ? <Home setOpenCart={setOpenCart}/> : <Navigate to="/login" />} />
                  <Route path='/collections' element={user ? <Collections /> : <Navigate to="/login" />} />
                  <Route path='/men' element={user ? <Men /> : <Navigate to="/login" />} />
                  <Route path='/women' element={user ? <Women /> : <Navigate to="/login" />} />
                  <Route path='/about' element={user ? <About /> : <Navigate to="/login" />} />
                  <Route path='/contact' element={user ? <Contact /> : <Navigate to="/login" />} />
                  <Route path='/login' element={!user ? <Login /> : <Navigate to="/" />} />
                  <Route path='/register' element={!user ? <Register /> : <Navigate to="/" />} />
                </Routes>
              </div>
              <Footer />
            </BrowserRouter>
          </OpenProvieder>
        </CartProvider>
      </AuthProvider>
    </div>
  )
}

export default App
