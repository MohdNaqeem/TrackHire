import { RiNotification3Line } from "react-icons/ri";


const NotificationButton = () => {
  return (
    <button
      type="button"
      className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition duration-300 hover:bg-[#F5F6FA]"
      aria-label="Notifications"
    >
      <RiNotification3Line
        size={22}
        className="text-[#211A52]"
      />

      <span className="absolute right-1.5 top-1.5 h-2.5 w-2.5 rounded-full bg-red-500" />
    </button>
  );
};


export default NotificationButton;