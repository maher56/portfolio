import React from 'react'
import Eyes from './Eyes'

const Header = () => {
    return (
        <header className='header'>
            <div className='overlay'></div>
            <Eyes />
            <div className='text'>
                <h1>I'm <span className='type'>Maher Sefo</span></h1>
                <h1>Frontend Developer</h1>
            </div>
            <div className='emoji'></div>             
        </header>
    )
}

export default Header
