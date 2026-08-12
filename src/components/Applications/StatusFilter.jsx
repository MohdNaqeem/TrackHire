import { RiArrowDownSLine } from "react-icons/ri";

const StatusFilter = ({
  selectedStatus,
  setSelectedStatus,
}) => {
  return (
    <div className="relative w-full sm:w-auto">
      <select
        value={selectedStatus}
        onChange={(e) => setSelectedStatus(e.target.value)}
        className="
          w-full
          appearance-none
          rounded-2xl
          border
          border-[#E7E7EF]
          bg-white
          px-5
          py-3
          pr-10
          text-sm
          font-medium
          text-[#211A52]
          outline-none
          transition-all
          duration-300
          hover:border-[#3CBFA4]
          focus:border-[#3CBFA4]
          focus:ring-4
          focus:ring-[#DDF7F2]
          sm:w-auto
        "
      >
        <option>All Status</option>
        <option>Applied</option>
        <option>Interview</option>
        <option>Offer</option>
        <option>Rejected</option>
      </select>

      <RiArrowDownSLine
        size={20}
        className="
          pointer-events-none
          absolute
          right-3
          top-1/2
          -translate-y-1/2
          text-[#8A86A3]
        "
      />
    </div>
  );
};

export default StatusFilter;