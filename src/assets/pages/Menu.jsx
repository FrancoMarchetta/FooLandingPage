import React from 'react'
import MenuCard from '../components/MenuCard'
import menu from "../../Menu.json"

const Menu = () => {

    return (
        <>
            <section className='menuSection'>
                {menu.map((menu, i) => (
                    <MenuCard id={menu.id} name={menu.name} description={menu.description} price={menu.price} image={menu.image}></MenuCard>
                ))}
            </section>
        </>
    )
}

export default Menu