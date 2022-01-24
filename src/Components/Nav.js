import React from 'react'
import Logo from './logo'
const Nav = () => {
    return (
        <div className='main-nav'>
            <div className='container'>
                <Logo />
                <ul className='main-ul'>
                    <li><a href='#goals'>goals</a></li>
                    <li><a href='#projects'>projects</a></li>
                    <li><a href='#contact'>contact</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Nav
