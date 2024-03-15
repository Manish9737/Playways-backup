import { FaBook, FaGamepad, FaHome, FaUser } from "react-icons/fa";

const SidebarGs = (stationId) => [
  {
    title: "Home",
    path: "/host/",
    icon: <FaHome className="text-warning" />,
    cName: "nav-text",
  },
  {
    title: "Profile",
    icon: <FaUser className="text-warning" />,
    path: `/host/gamestation/${stationId}`,
    cName: "nav-text",
  },
  {
    title: "Bookings",
    icon: <FaBook className="text-warning" />,
    path: `/host/gamestation/${stationId}/bookings`,
    cName: "nav-text",
  },
  {
    title: "Games",
    icon: <FaGamepad className="text-warning" />,
    path: `/host/gamestation/${stationId}/games`,
    cName: "nav-text",
  },
  {
    title: "Payments",
    icon: <FaGamepad className="text-warning" />,
    path: `/host/gamestation/${stationId}/payments`,
    cName: "nav-text",
  },
];

export default SidebarGs;
