import React,{useRef} from 'react'
import TopBar from '../components/Topbar'
import Header from '../components/Header'
import Landing from '../components/Landing'
import Ratings from '../components/Ratings'
import AboutUs from '../components/AboutUs'
import Services from '../components/Services'
import ProjectList from '../components/ProjectList'
import BlogList from '../components/BlogList'
import TeamComponent from '../components/TeamComponent'
import TestimonialComponent from '../components/TestimonialComponent'
import ContactComponent from '../components/ContactComponent'
import Footer from '../components/Footer'

const Home = () => {
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
 
  function aboutScroll() {
    aboutRef.current.scrollIntoView();
  }
  function servicesScroll() {
    servicesRef.current.scrollIntoView();
  }
  function projectsScroll() {
    projectsRef.current.scrollIntoView();
  }
  function contactScroll() {
    contactRef.current.scrollIntoView();
  }
  return (
    <div>
    <TopBar />
    <Header 
    aboutScroll={aboutScroll}
    servicesScroll={servicesScroll}
    projectsScroll={projectsScroll}
    contactScroll={contactScroll}/>
    <Landing />
    <Ratings />
    <AboutUs aboutRef={aboutRef} />
    <Services servicesRef={servicesRef} />
    <ProjectList projectsRef={projectsRef} />
    <BlogList />
    <TeamComponent />
    <TestimonialComponent />
    <ContactComponent contactRef={contactRef}/>
    <Footer />
    </div>
  )
}

export default Home