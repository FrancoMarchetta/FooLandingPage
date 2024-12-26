import React from 'react'

const RatingStars = () => {

    return (
        <>
            <div>
                <img src="../../public/star.svg" alt="" />
                <img src="../../public/star.svg" alt="" />
                <img src="../../public/star.svg" alt="" />
                <img src="../../public/star.svg" alt="" />
                <img src="../../public/star.svg" alt="" />
            </div>
            <strong style={{ fontSize: "larger", fontFamily: "Poppins" }}>5 Star Rating</strong>
            <p style={{ color: "#909090" }}>Based on 1788 reviews</p>
        </>
    )
}


export default RatingStars