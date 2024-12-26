import React from 'react'

export const Hero = () => {
    return (
        <>
            <main style={{ display: "flex", placeContent: "center", height: "auto" }}>
                <div style={{ marginLeft: "10%" }}>
                    <div style={{ display: "flex" }}>
                        <div id='fast'>
                            <h1>Fast</h1>
                        </div>
                        <div id='foodDelivery'>
                            <h2 >Food Delivery</h2>
                            <img src="../../public/arrow.svg" alt="" />
                        </div>

                        <div id='textin'>
                            <p>Sed ut perspiciatis unde omnis iste natus sit voluptatem accusantium doloremque laudantium</p>
                        </div>
                    </div>
                </div>

                <div style={{ marginRight: "10%" }}>
                    <img src="../../public/mainImage.svg" alt="" />
                </div>
            </main>

            <div className='buttonsDiv'>
                <button className='buttonOrderNow'>
                    Order Now
                </button>

                <div id='watchVideo' style={{ display: "flex" }} >
                    <img style={{ height: "fit-content" }} src="../../public/playIcon.svg" alt="" />
                    <p>Watch Video</p>
                </div>
            </div>
        </>
    )
}
