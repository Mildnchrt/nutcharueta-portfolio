import { useState } from "react";
import { TimelineCard } from "../../components/timeline/TimelineCard";
import { PopupData } from "../../types/common";
import { Popup } from "../../components/popup/Popup";

export const Experiences = () => {
  const [shouldShowPopup, setShouldShowPopup] = useState(false);
  const [popupData, setPopupData] = useState<PopupData>({});
  
  const data = [
    {
      year: '2018',
      jobType: 'Freelance',
      role: 'Frontend Web Application Developer',
      companyName: '',
      desc: 'Developed Getkaset, an agricultural market web application, using Ruby on Rails.'
    },
    {
      year: '',
      jobType: 'Internship',
      role: 'Web Application Developer',
      companyName: 'Sellsuki Co. Ltd.',
      period: '3 months',
      desc: 'Designed internal applications UX/UI.\nDeveloped notification flow using OneSignal API, NodeJS, Express, JestTest, Firebase and try to Apply in Vue.js project'
    },
    {
      year: '',
      jobType: 'Internship',
      role: 'Game developer',
      companyName: 'Dongseo University - Busan, South Korea.',
      period: '5 months',
      desc: 'Developed Autism Game - an interactive mobile game for developing social skills of autistic children by use Unity2D, C#, and Adobe Illustration.'
    },
    {
      year: '2019',
      jobType: 'Fulltime',
      role: 'IT Application Development Engineering',
      companyName: 'ExxonMobil Limited.',
      period: '3 years',
      desc: '2 years of experience as a frontend developer. Developed internal website for Sales by use Angular framework and Jasmine test.\nHalf year of experience as a full stack developer. Developed internal website for Sales by use Angular framework, Jasmine test, Java Sprint boot, MongoDB, and PostgreSQL.'
    },
    {
      year: '2022',
      jobType: 'Fulltime',
      role: 'Software Engineer',
      companyName: 'SCB TechX (current)',
      period: 'current',
      desc: '1 year 6 months of experience as a frontend developer (current role). Developed Robinhood Application(for Rider) using Flutter and Robinhood Operation Portal Website(for Admins/Operators) using ReactJS.\n6 months of experience as a backend developer. Developed SCB Corporate Banking Bulk Payment Service by use Java SprintBoot, PostgreSQL, and Axon framework.'
    },
    {
      year: '',
      jobType: 'Freelance',
      role: 'An Apprentice artist.',
      companyName: '',
      desc: 'Open for online commision.'
    },
    {
      year: 'NOW',
      jobType: '',
      role: 'What\'s next?',
      companyName: '',
      desc: ''
    }
  ]

  const handleOpenPopup = (index: number) => {
    setShouldShowPopup(true);
    setPopupData(data[index])
  }

  const handleClosePopup = () => {
    setShouldShowPopup(false);
    setPopupData({})
  }

  return (
    <div className="relative overflow-x-auto flex flex-col snap-center h-screen pl-[10%]">
      <h1 className="mt-[5%]">Experiences</h1>
      <div className="overflow-x-auto h-full flex">
        {data.map((t, i) => (
          <TimelineCard 
            index={i}
            companyName={t.companyName}
            role={t.role}
            type={t.jobType}
            year={t.year}
            handleOpenPopup={handleOpenPopup}
          />
        ))}
      </div>

      <Popup isOpen={shouldShowPopup} data={popupData} handleClosePopup={handleClosePopup}/>
    </div>
  )
}