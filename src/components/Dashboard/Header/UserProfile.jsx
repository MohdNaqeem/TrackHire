import { RiArrowDownSLine } from "react-icons/ri";


const UserProfile = () => {
  return (
    <button
      type="button"
      className="flex shrink-0 items-center gap-2 rounded-xl px-2 py-2 transition duration-300 hover:bg-[#F5F6FA] sm:gap-3 sm:px-3"
    >
      {/* Avatar */}
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#61C7B2] text-sm font-semibold text-white sm:h-11 sm:w-11">
        NM
      </div>


      {/* User Information */}
      <div className="hidden text-left sm:block">
        <h4 className="text-sm font-semibold text-[#211A52]">
          Naqeem Momin
        </h4>

        <p className="text-xs text-[#8A86A3]">
          Software Engineer
        </p>
      </div>


      {/* Arrow */}
      <RiArrowDownSLine
        size={20}
        className="hidden text-[#8A86A3] sm:block"
      />
    </button>
  );
};


export default UserProfile;