import './styles/App.scss'
import { AboutMe } from './pages/about-me/AboutMe'
import { Experiences } from './pages/experiences/Experiences'
import { Home } from './pages/home/Home'
// import { RecentWork } from './pages/recent-work/RecentWork'
import { SideNav } from './pages/side-nav/SideNav'
import deco1 from './assets/deco1.png'
import deco3 from './assets/deco3.png'
import deco4 from './assets/deco4.png'
import {  useRef } from 'react'
import { useIsVisible } from './hooks/useIsVisible'
// import { useRef, useState } from 'react'

function App() {
  const homeRef = useRef(null);
  const aboutMeRef = useRef(null);
  const experiencesRef = useRef(null);

  const isHomeVisible = useIsVisible(homeRef)
  const isAboutMeVisible = useIsVisible(aboutMeRef)
  const isExperiencesVisible = useIsVisible(experiencesRef)
  
  // const [isInView, setIsInView] = useState(false) 

  // const checkInView = () => {
  //   if (homeRef.current) {
  //     const rect = homeRef.current.getBoundingClientRect();
  //     setIsInView(
  //         rect.top < window.innerHeight && rect.bottom >= 0
  //     );
  //   }
  
// };

  return (
    <>
      <SideNav 
      homeRef={homeRef} 
      aboutMeRef={aboutMeRef} 
      expRef={experiencesRef}
      isHomeVisible={isHomeVisible}
      isAboutMeVisible={isAboutMeVisible}
      isExperiencesVisible={isExperiencesVisible}
      />
      <img src={deco1} className="absolute -z-10 top-[-100px] left-[-120px] w-[550px]"/>
      <img src={deco3} className="absolute -z-10 top-[-150px] left-[30px] w-[550px]"/>
      <img src={deco4} className="absolute -z-10 bottom-[-50px] right-0 w-[550px]"/>
      <div className="snap-mandatory snap-y h-screen w-screen overflow-scroll">
        <Home homeRef={homeRef}/>
        <AboutMe aboutMeRef={aboutMeRef}/>
        <Experiences expRef={experiencesRef}/>
        {/* <RecentWork/> */}
      </div>
    </>
  )
}

export default App
