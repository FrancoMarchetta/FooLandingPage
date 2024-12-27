import React from 'react'

export const Hero = () => {
    return (
        <>
            <main style={{ display: "flex" }}>
                <div >
                    <div style={{ display: "flex" }}>
                        <div id='fast'>
                            <h1>Fast</h1>
                        </div>
                        <div id='foodDelivery'>
                            <h2 >Food Delivery</h2>
                            <img src="../../public/arrow.svg" alt="" />
                        </div>
                    </div>

                    <div id='textin'>
                        <p>Sed ut perspiciatis unde omnis iste natus sit voluptatem accusantium doloremque laudantium</p>
                    </div>
                </div>

                <div>
                    <img src="../../public/mainImage.svg" alt="" />
                </div>
            </main>

            <div className='buttonsDiv'>
                <button className='buttonOrderNow'>
                    Order Now
                </button>

                <div id='watchVideo' style={{ display: "flex" }} >
                    <a target='blank' href="https://www.youtube.com/watch?v=B4LvDiIi128&t=49s">
                        <img astyle={{ height: "fit-content" }} src="../../public/playIcon.svg" alt="" />
                    </a>
                    <a target='blank' href="https://www.youtube.com/watch?v=B4LvDiIi128&t=49s">
                        <p>Watch Video</p>
                    </a>
                </div>
            </div>
        </>
    )
}
