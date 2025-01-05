import React from 'react';
import "../css/Card.css"
import { useState } from 'react';

const MenuCard = ({ id, image, name, price, description }) => {


    function addToCart() {

        const product = {
            id,
            image,
            name,
            price,
            description
        };

        const cart = JSON.parse(localStorage.getItem("cart")) || [];
        cart.push(product);

        localStorage.setItem("cart", JSON.stringify(cart));
        alert("added to cart");
    }



    return (
        <>
            <div className='menuCard'>
                <img src={image} alt="" />
                <div >
                    <strong>${price}</strong>

                    <div style={{ width: "fit-content" }}>
                        <h2>{name}</h2>
                        <p>{description}</p>
                        <button onClick={addToCart} style={{ cursor: "pointer", backgroundColor: "#f87d01", borderRadius: "10px", height: "3em", width: "5em" }}>Add</button>
                    </div>
                </div>
            </div>
            <br />
        </>
    );
}

export default MenuCard;
