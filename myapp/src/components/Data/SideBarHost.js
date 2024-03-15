import { FaDashcube, FaGamepad, FaHome } from "react-icons/fa";

const SideBarHost = (hostId) => [
  {
    title: "Home",
    path: `/host/${hostId}/home`,
    icon: <FaHome className="text-warning" />,
    cName: "nav-text",
  },
  {
    title: "Dashboard",
    icon: <FaDashcube className="text-warning" />,
    path: "/host/",
    cName: "nav-text",
  },
  // {
  //   title: "Bookings",
  //   icon: <FaBook className="text-warning" />,
  //   path: "/host/bookings",
  //   cName: "nav-text",
  // },
  {
    title: "GameStation",
    icon: <FaGamepad className="text-warning" />,
    path: "/host/gameStations",
    cName: "nav-text",
  },
];

export default SideBarHost;
