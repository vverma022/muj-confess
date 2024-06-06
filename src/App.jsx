import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Signup from './pages/Signup'
import Signin from './pages/Signin'
import Header from './components/ui/header'
import MainPage from './pages/MainPage'
import SubmitConfession from './pages/SubmitConfession'
import Sidebar from './components/ui/sidebar'

function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Sidebar/>
    <Routes>
      <Route path='/signup' element={<Signup/>} />
      <Route path='/signin' element={<Signin/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
