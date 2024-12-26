import './App.css'
import Header from './assets/components/Header'
import { Hero } from './assets/components/Hero'
import RatingStars from './assets/components/RatingStars'

function App() {

  return (
    <>
      <section style={{ margin: "2% 0 0 2%" }}>
        <Header></Header>
        <Hero></Hero>

        <div style={{ margin: "4em 0 0 15em" }}>
          <RatingStars></RatingStars>
        </div>
      </section>
    </>
  )
}

export default App
