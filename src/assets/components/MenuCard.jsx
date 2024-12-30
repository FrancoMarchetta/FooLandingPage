import React from 'react';
import "../css/Card.css"
const MenuCard = ({ id, image, name, price, description }) => {

    return (
        <>
            <div className='menuCard'>
                <img src={image} alt="" />
                <div >
                    <strong>${price}</strong>

                    <div style={{ width: "fit-content" }}>
                        <h2>{name}</h2>
                        <p>{description}</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default MenuCard;
