import { BrowserRouter, Routes ,Route } from 'react-router-dom'
import './App.css'
import { Home } from './views/Home'
import { Login } from './views/Login'
import { Register } from './views/Register'
import { List } from './views/List'
import { Hotel } from './views/Hotel'
import { Navbar } from './components/Navbar'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element ={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='register' element ={<Register />} />
        <Route path="/hotels" element={<List/>}/>
        <Route path="/hotels/:id" element={<Hotel/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
