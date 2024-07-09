import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from '../header/header'
import Section from '../section/section'
import './App.css'
function App() {

  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Header/>}/>
    <Route index element={<Section/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
