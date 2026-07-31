import { RiArrowDownSLine } from "react-icons/ri";

const UserProfile = () => {
  return (
    <button className="flex items-center gap-3 rounded-xl px-3 py-2 transition duration-300 hover:bg-[#F5F6FA]">
      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#61C7B2] text-sm font-semibold text-white">
        NM
      </div>

      <div className="text-left">
        <h4 className="text-sm font-semibold text-[#211A52]">
          Naqeem Momin
        </h4>

        <p className="text-xs text-[#8A86A3]">
          Software Engineer
        </p>
      </div>

      <RiArrowDownSLine
        size={20}
        className="text-[#8A86A3]"
      />
    </button>
  );
};

export default UserProfile;