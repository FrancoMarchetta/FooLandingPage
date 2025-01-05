import React from 'react'
import { useNavigate } from 'react-router-dom'

const Header = () => {

    const path = useNavigate();

    const goToContact = () => {
        path("/contact")
    }
    const goToHome = () => {
        path("/")
    }
    const goToMenu = () => {
        path("/menu")
    }
    const goToShop = () => {
        path("/shop")
    }



    return (
        <>
            <header className='header ' >
                <div style={{ cursor: "pointer" }} onClick={goToHome} id='foo-and-image'>
                    <img src="../../public/chef-hat (2) 1.svg" alt="" />
                    <h1>Foo</h1>
                </div>

                <div className='header-options'>
                    {window.location.pathname == "/" ? <p className='headerPaths headerPathsUnderlined' onClick={goToHome}>Home</p> : <p className='headerPaths ' onClick={goToHome}>Home</p>}
                    {window.location.pathname == "/contact" ? <p className='headerPaths headerPathsUnderlined' onClick={goToContact}>Contact</p> : <p className='headerPaths ' onClick={goToContact}>Contact</p>}
                    {window.location.pathname == "/menu" ? <p className='headerPaths headerPathsUnderlined' onClick={goToMenu} >Menu</p> : <p className='headerPaths ' onClick={goToMenu}>Menu</p>}
                    {window.location.pathname == "/shop" ? <p style={{ width: "12em" }} className='headerPaths headerPathsUnderlined' onClick={goToShop} >Shopping Cart</p> : <p style={{ width: "12em" }} className='headerPaths ' onClick={goToShop}>Shopping Cart</p>}
                    <input type="text" placeholder='Search' />
                    {/* {window.location.pathname == "/menu" && <input type="text" placeholder='Search' />} */} {/*<-- la alternativa al input */}

                </div>
            </header >


        </>
    )
}

export default Header