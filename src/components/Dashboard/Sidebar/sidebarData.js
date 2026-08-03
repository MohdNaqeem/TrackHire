import {
  RiDashboardLine,
  RiBriefcaseLine,
  RiBarChartBoxLine,
  RiKanbanView,
  RiCalendarLine,
  RiUser3Line,
  RiSettings3Line,
  RiLogoutCircleRLine,
} from "react-icons/ri";

export const sidebarLinks = [
  {
    id: 1,
    title: "Dashboard",
    path: "/dashboard",
    icon: RiDashboardLine,
  },
  {
    id: 2,
    title: "Applications",
    path: "/dashboard/applications",
    icon: RiBriefcaseLine,
  },
  {
    id: 3,
    title: "Analytics",
    path: "/dashboard/analytics",
    icon: RiBarChartBoxLine,
  },
  {
    id: 4,
    title: "Kanban",
    path: "/dashboard/kanban",
    icon: RiKanbanView,
  },
  {
    id: 5,
    title: "Calendar",
    path: "/dashboard/calendar",
    icon: RiCalendarLine,
  },
  {
    id: 6,
    title: "Profile",
    path: "/dashboard/profile",
    icon: RiUser3Line,
  },
  {
    id: 7,
    title: "Settings",
    path: "/dashboard/settings",
    icon: RiSettings3Line,
  },
];

export const logout = {
  title: "Logout",
  icon: RiLogoutCircleRLine,
};