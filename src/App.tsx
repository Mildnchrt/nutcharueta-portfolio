import './styles/App.scss'
import { AboutMe } from './pages/about-me/AboutMe'
import { Experiences } from './pages/experiences/Experiences'
import { Home } from './pages/home/Home'
// import { RecentWork } from './pages/recent-work/RecentWork'
import { SideNav } from './pages/side-nav/SideNav'
import deco1 from './assets/deco1.png'
import deco3 from './assets/deco3.png'
import deco4 from './assets/deco4.png'

function App() {
  return (
    <>
      <SideNav/>
      <img src={deco1} className="absolute -z-10 top-[-100px] left-[-120px] w-[550px]"/>
      <img src={deco3} className="absolute -z-10 top-[-150px] left-[30px] w-[550px]"/>
      <img src={deco4} className="absolute -z-10 bottom-[-50px] right-0 w-[550px]"/>
      <div className="snap-mandatory snap-y h-screen w-screen overflow-scroll">
        <Home/>
        <AboutMe/>
        <Experiences/>
        {/* <RecentWork/> */}
      </div>
    </>
  )
}

export default App
