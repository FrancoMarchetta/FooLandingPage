import './App.css'
import Header from './assets/components/Header'
import Contact from './assets/pages/Contact';
import MainPage from './assets/pages/MainPage'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from './assets/pages/ShoppingCart';
import Menu from './assets/pages/Menu';




function App() {

  return (
    <>
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path='/' element={<div style={{ margin: "0% 0% 0% 8%" }}><MainPage></MainPage></div>}></Route>
          <Route path='/contact' element={<Contact></Contact>}></Route>
          <Route path='/shop' element={<Shop></Shop>}></Route>
          <Route path='/menu' element={<Menu></Menu>}></Route>
        </Routes>
      </BrowserRouter >
    </>
  )
}

export default App
