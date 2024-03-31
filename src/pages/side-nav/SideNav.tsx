import { FC, MutableRefObject } from "react"

interface ISideNavProps {
  homeRef: MutableRefObject<HTMLDivElement | null>
  aboutMeRef: MutableRefObject<HTMLDivElement | null>
  expRef: MutableRefObject<HTMLDivElement | null>
  isHomeVisible: boolean
  isAboutMeVisible: boolean
  isExperiencesVisible: boolean
}

export const SideNav: FC<ISideNavProps> = ({
  homeRef,
   aboutMeRef, 
  expRef,
  isHomeVisible,
  isAboutMeVisible,
  isExperiencesVisible
}) => {

  console.log(isHomeVisible, isAboutMeVisible, isExperiencesVisible)
  
  const scrollIntoView = ({element}: {element: HTMLDivElement | null}) => {
    if (element === null) {
      return
    }
    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className="grid gap-2 absolute z-1 h-screen w-min content-center pl-[8px]">
      <a className={isHomeVisible ? "paging active" : "paging"} onClick={() => scrollIntoView({element: homeRef.current})}></a>
      <a className={isAboutMeVisible ? "paging active" : "paging"} onClick={() => scrollIntoView({element: aboutMeRef.current})}></a>
      <a className={isExperiencesVisible ? "paging active" : "paging"} onClick={() => scrollIntoView({element: expRef.current})}></a>
      {/* <a href="/">Home</a>
      <a href="/">About me</a>
      <a href="/">Experiences</a> */}
      {/* <a href="#">Recent work</a> */}
    </div>
  )
}