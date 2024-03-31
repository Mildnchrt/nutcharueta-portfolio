export type PopupData = {
  jobType?: string;
  role?: string;
  companyName?: string;
  desc?: string;
}

export type TimelineCardProps =  {
  index: number;
  companyName: string;
  role: string;
  type: string;
  year: string;
  handleOpenPopup: (index: number) => void;
}

export type PopupProps = {
  isOpen: boolean
  data: PopupData
  handleClosePopup: () => void
}

// type TimelineCardPopup = {
//   jobType?: string;
//   role?: string;
//   companyName?: string;
//   desc?: string;
// }