import { FC } from 'react'
import character from '../../assets/character.gif'

interface IHomeProps {
  homeRef: React.MutableRefObject<HTMLDivElement | null>
}

export const Home: FC<IHomeProps> = ({homeRef}) => {
  const handleOnDownloadFile = async () => {
    try {
      const response = await fetch(`${window.location.href}/cv.pdf`);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'cv.pdf');
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Error downloading file:', error);
    } 
  }

  return (
    <div className="relative snap-center max-h-screen min-h-screen pl-[10%] pt-[15%]">
      <div className='mb-[10px]'>
        <p className="text-red-600 font-mono text-[16px] ml-[8px] mt-[18px]">Welcome to my website! My name is...</p>
        <div ref={homeRef} className="flex flex-col">
          <span className="font-paytoneOne text-[60px]/[52.5px] lg:text-[120px]/[105px]">NUTCHARUETA</span>
          <span className="text-webkit-stroke font-paytoneOne  text-[55px]/[50px] lg:text-[110px]/[100px]">SIHIRUNWONG</span>
        </div>
        <p className="font-mono text-[20px] ml-[8px] mt-[18px]">I'm a developer who is passionate for art.</p>
        <button className="button-outline mt-[20px] font-paytoneOne" onClick={handleOnDownloadFile}>
          Download CV
        </button>
      </div>
      <div className="absolute z-1 bottom-0 right-0">
        <img src={character} className="h-[75vh] lg:h-screen"/>
      </div>
    </div>  
  )
}