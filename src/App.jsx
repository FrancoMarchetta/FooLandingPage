import './App.css'
import Header from './assets/components/Header'
import { Hero } from './assets/components/Hero'
import RatingStars from './assets/components/RatingStars'
import MainPage from './assets/pages/MainPage'



function App() {

  return (
    <>
      <section style={{ margin: "2% 0 0 2%" }}>
        <Header></Header>

        <div style={{ margin: "0% 0% 0% 8%" }}>
          <MainPage></MainPage>
        </div>
      </section>
    </>
  )
}

export default App
