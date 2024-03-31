import { useState } from "react";
import { TimelineCardProps } from "../../types/common";


export const TimelineCard = ({index, companyName, role, type, year, handleOpenPopup}: TimelineCardProps) => {
  const isSubCard = year === '' ? true : false;
  const [isHover, setIsHover] = useState(false);

  const getSeparaterStyle = () => {
    if (isSubCard) {
      return isHover ? 'timeline-separater-sub-effect' : 'timeline-separater-sub';
    }
    return isHover ? 'timeline-separater-effect' : 'timeline-separater';
  }

  return (
    <div className="timeline-card">
      <div className="timeline-title"
        onClick={() => handleOpenPopup(index)}
        onMouseOver={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        <p className="title-1">{role}</p>
        <p className="title-2">
          {type && <span className="tag-1">{type}</span>}
          <span>{companyName ? ` @${companyName}` : null}</span>
        </p>
      </div>
      <div className={getSeparaterStyle()}></div>
      <div>{year}</div>
    </div>
  )
}