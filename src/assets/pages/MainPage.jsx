import React from 'react'
import { Hero } from '../components/Hero'
import RatingStars from '../components/RatingStars'

const MainPage = () => {
    return (
        <>
            <Hero></Hero>

            <div style={{ margin: "4% 0% 0% 3%" }}>
                <RatingStars></RatingStars>
            </div>
        </>
    )
}

export default MainPage