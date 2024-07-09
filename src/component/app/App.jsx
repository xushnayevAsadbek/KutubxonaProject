import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Error } from '../Page/error/error'
import Header from '../header/header'
import Section from '../section/section'
import './App.css'
import Auth from '../Page/auth/auth'
function App() {

  return (
    <BrowserRouter>
    <Routes>
    <Route path="/auth/login" element={<Auth/>} />
    <Route path='/' element={<Header/>}/>
    <Route index element={<Section/>} />

    <Route path="*" element={<Error/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
