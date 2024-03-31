import { FC, MutableRefObject } from 'react';
import profilePic from '../../assets/profile-pic.png'
interface IAboutMeProps {
  aboutMeRef: MutableRefObject<HTMLDivElement | null>
}

export const AboutMe: FC<IAboutMeProps> = ({ aboutMeRef }) => {
  const age = new Date().getFullYear() - 1996;
  const intro = "I am graduated from Kasetsart University in Software and Knowledge Engineering field. Currently I am a full time employee of SCB TechX as a Frontend developer. I have experiences in web development and  others. I'm looking for a role where i can grow,  explore my skills, and learn from other experienced team members."
  return (
    <div  className="relative flex flex-col justify-center gap-8 snap-center h-screen px-[10%]">
      <h1 className="mt-[5%]">About me!</h1>
      <div ref={aboutMeRef} className="h-auto flex flex-col items-center gap-8 lg:grid lg:grid-cols-3 lg:gap-16 lg:content-center mb-[5%] bg-neon rounded-2xl p-[20px] text-[20px]">
        <img src={profilePic} className=" -rotate-12 w-[50%] md:w-[40%] lg:w-full"/>
        <div className="col-span-2 font-mono text-[14px] lg:text-[20px]">
          <div className="lg:pl-[40px] lg:pr-[10px]">
            <div>
              <p><span className="font-black">Name: </span>Nutcharueta Sihirunwong (Mild)</p>
              <p><span className="font-black">Date of birth: </span>10 Nov 1996 ({age} years old)</p>
              <p><span className="font-black">Email: </span>nutcharueta.s@gmail.com</p>
              <p><span className="font-black">LinkedIn: </span><a href='https://www.linkedin.com/in/nutcharueta' target="_blank">linkedin.com/in/nutcharueta</a></p>
            </div>
            <div className="mt-[26px]">
              {/* <p className="font-bebasNeue text-[24px] lg:text-[36px]">SKILLS</p> */}
              <p><span className="font-black">Languages: </span>Javascript, Typescript, Java, HTML, CSS/SCSS</p>
              <p><span className="font-black">Frameworks & Libaries: </span>Angular, Node.js, ExpressJS, React.js, Spring boot</p>
              <p><span className="font-black">Database & others: </span>MongoDB, PostgreSQL, Git, Jenkins, Kubernetes</p>
            </div>
            <p className="mt-[26px] indent-20 text-justify">{intro}</p>
          </div>
        </div>
      </div>
    </div>
  )
}