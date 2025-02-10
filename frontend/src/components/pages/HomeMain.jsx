import React from 'react'
import Navbar from '../NavBar'
import Home from './Home'
import Projects from './Projects'
import Blog from './Blog'
import ContactForm from '../ContactForm'
import Skills from '../Skills'
import Links from './Links'
import PostCard from '../../blog/PostCard'



const HomeMain = () => {
  return (
    <>
    <Navbar />
    <Home/>
    <Projects/>
    
    <PostCard/>
    <ContactForm/>
    <Skills/>
    <Links/>
    </>
  )
}

export default HomeMain
