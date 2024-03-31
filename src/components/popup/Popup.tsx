import { FC } from "react"
import { PopupProps } from "../../types/common"

export const Popup: FC<PopupProps> = ({ 
  isOpen,
  data, 
  handleClosePopup
 }) => {
  return (
    <>
    {isOpen ? (
      <>
        <div className="fixed h-screen w-screen z-[1] top-0 left-0 bg-overlay" onClick={handleClosePopup}/>
        <div className="tlc-popup font-mono">
          <div>
            <p className="text-[26px] mb-[10px]">{data.role}</p>
            <p className="text-[16px] mb-[10px]">
              <span>{data.jobType ?? null}</span>
              <span>{data.companyName ? ` @${data.companyName}` : null}</span>
            </p>
            <p className="text-[16px] mb-[10px]">{data.desc}</p>
          </div>
          <button className="close-btn" onClick={handleClosePopup}>
            <i className="bi bi-x"></i>
          </button>
        </div>
      </>) : null}
    </>
  )
}