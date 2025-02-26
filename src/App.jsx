import './App.css'
import Header from './assets/components/Header'
import Contact from './assets/pages/Contact';
import MainPage from './assets/pages/MainPage'
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Shop from './assets/pages/ShoppingCart';
import Menu from './assets/pages/Menu';





function App() {

  return (
    <>
      <Router>
        <Header></Header>
        <Routes>
          <Route path='/' element={<div style={{ margin: "7% 0% 0% 10%" }}><MainPage></MainPage></div>}></Route>
          <Route path='/contact' element={<div style={{ margin: "7% 0% 0% 0%" }}><Contact></Contact></div>}></Route>
          <Route path='/menu' element={<div style={{ margin: "7% 0% 0% 26%" }}><Menu></Menu></div>}></Route>
          <Route path='/shop' element={<div style={{ margin: "7% 0% 0% 26%" }}><Shop></Shop></div>}></Route>
        </Routes>
      </Router >
    </>
  )
}

export default App
