import React , {useState , useEffect} from 'react'
import { FaGithub } from 'react-icons/fa'
import { BsFillEyeFill, BsTelegram} from 'react-icons/bs'
import Heading from './Heading'
const Projects = () => {
    const [projects , setProjects] = useState([]);
    useEffect(()=>{setProjects(require("../data.json").projects);},[projects])
    return (
        <div className='project' id='projects'>
            <Heading text={"my Projects"} color={"white"}/>
            <div className='container'>
                <div className='body'>
                    {projects.map((project , i)=>{
                        return (
                        <div className='box' key={i}>
                            <div className='image'><img src={project.img} alt='project img'/></div>
                            <div className='text'>
                                <h4>{project.name}</h4>
                                <div className='links'>
                                    <a href={project.github} target="_blank"><FaGithub /></a>
                                    <a href={project.real} target="_blank"><BsFillEyeFill /></a>
                                </div>
                            </div>
                        </div>)
                    })}
                </div>
            </div>
        </div>
    )
}

export default Projects
