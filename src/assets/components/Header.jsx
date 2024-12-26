import React from 'react'

const Header = () => {
    return (
        <>
            <header className='header' >
                <div id='foo-and-image'>
                    <img src="../../public/chef-hat (2) 1.svg" alt="" />
                    <h1>Foo</h1>
                </div>

                <div className='header-options'>
                    <p>Home</p>
                    <p>Menu</p>
                    <p>Contact</p>
                    <p>Shop</p>
                    <input type="text" placeholder='Search' />
                </div>
            </header>


        </>
    )
}

export default Header