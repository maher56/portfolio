import React from 'react'
import Heading from './Heading'
import { BsGithub , BsFacebook , BsLinkedin} from 'react-icons/bs'

const Contact = () => {
    return (
        <footer className='contact' id='contact'>
            <Heading text={"Contact Us"}/>
            <div className='container'>
            <form>
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="user name" placeholder="john" required/>
                    <label htmlFor="user name">User name</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="email" className="form-control" id="email" placeholder="name@example.com" required/>
                    <label htmlFor="email">Email address</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="password" className="form-control" id="password" placeholder="Password" required/>
                    <label htmlFor="password">Password</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="text" placeholder="your Text"/>
                    <label htmlFor="text">your Text</label>
                </div>
                <div className='d-grid'><button className='btn btn-block btn-primary' type='submit'>Submit</button></div>
            </form>
            <div className='links'>
                <a href='https://github.com/maher56/'><BsGithub/></a>
                <a href='https://www.facebook.com/maher.sefo.7'><BsFacebook/></a>
                <a href='https://www.linkedin.com/in/maher-sefo-1283b8228'><BsLinkedin/></a>
            </div>
            </div>
        </footer>
    )
}

export default Contact
