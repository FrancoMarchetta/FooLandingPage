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

    return (
        <>
            <header className='header' >
                <div id='foo-and-image'>
                    <img src="../../public/chef-hat (2) 1.svg" alt="" />
                    <h1>Foo</h1>
                </div>

                <div className='header-options'>
                    <p className='headerPaths' onClick={goToHome}>Home</p>
                    <p className='headerPaths'>Menu</p>
                    <p className='headerPaths' onClick={goToContact}>Contact</p>
                    <p className='headerPaths'>Shop</p>
                    <input type="text" placeholder='Search' />
                </div>
            </header>


        </>
    )
}

export default Header