import React from 'react'
import Nav from './Components/Nav'
import Header from './Components/Header'
import Goals from './Components/Goals'
import Projects from './Components/Projects'
import Contact from './Components/Contact'
import './main.css'
const App=()=>{
    return (
        <div className='App'>
            <Nav />
            <Header />
            <Goals />
            <Projects />
            <Contact />
        </div>
    );
}
export default App;
