import {
  HiOutlineCalendar,
  HiOutlineDocumentText,
  HiOutlineFlag,
  HiOutlineChartBar,
} from "react-icons/hi";

const aboutCards = [
  {
    id: 1,
    icon: HiOutlineCalendar,
    title: "Upcoming Interview",
    value: "Google",
    description: "Tomorrow • 10:00 AM",
  },
  {
    id: 2,
    icon: HiOutlineDocumentText,
    title: "Active Resume",
    value: "Frontend_Resume.pdf",
    description: "Updated Today",
  },
  {
    id: 3,
    icon: HiOutlineFlag,
    title: "Weekly Goal",
    value: "24 / 50",
    description: "Applications Submitted",
  },
  {
    id: 4,
    icon: HiOutlineChartBar,
    title: "Progress",
    value: "80%",
    description: "Goal Completed",
    progress: 80,
  },
];

export default aboutCards;