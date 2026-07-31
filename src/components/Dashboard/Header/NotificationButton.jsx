import { RiNotification3Line } from "react-icons/ri";

const NotificationButton = () => {
  return (
    <button className="relative flex h-12 w-12 items-center justify-center rounded-xl transition duration-300 hover:bg-[#F5F6FA]">
      <RiNotification3Line
        size={22}
        className="text-[#211A52]"
      />

      <span className="absolute right-2 top-2 h-2.5 w-2.5 rounded-full bg-red-500"></span>
    </button>
  );
};

export default NotificationButton;