import {
  RiBriefcaseLine,
  RiUserVoiceLine,
  RiMedalLine,
  RiCloseCircleLine,
} from "react-icons/ri";

export const dashboardStats = [
  {
    id: 1,
    title: "Applications",
    value: 48,
    icon: RiBriefcaseLine,
    iconBg: "bg-[#ECFBF8]",
    iconColor: "text-[#3CBFA4]",
  },
  {
    id: 2,
    title: "Interviews",
    value: 12,
    icon: RiUserVoiceLine,
    iconBg: "bg-[#EEF4FF]",
    iconColor: "text-[#4F7CFF]",
  },
  {
    id: 3,
    title: "Offers",
    value: 3,
    icon: RiMedalLine,
    iconBg: "bg-[#FFF7E8]",
    iconColor: "text-[#F5A623]",
  },
  {
    id: 4,
    title: "Rejected",
    value: 18,
    icon: RiCloseCircleLine,
    iconBg: "bg-[#FFF1F1]",
    iconColor: "text-[#F04438]",
  },
];