import {
  RiArrowRightLine,
  RiBuildingLine,
  RiTimeLine,
} from "react-icons/ri";

const InterviewCard = ({
  company,
  role,
  date,
  time,
  mode,
}) => {
  const dateBadge =
    date === "Today"
      ? "bg-[#E8F8F5] text-[#3CBFA4]"
      : date === "Tomorrow"
      ? "bg-[#FFF5E5] text-[#F59E0B]"
      : "bg-[#EEF4FF] text-[#3B82F6]";

  const modeBadge =
    mode === "Online"
      ? "bg-[#F0FDF9] text-[#10B981]"
      : "bg-[#F5F6FA] text-[#6B7280]";

  return (
    <div className="rounded-2xl border border-[#ECECF3] bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      {/* Top */}

      <div className="mb-4 flex items-center justify-between">
        <span
          className={`rounded-full px-3 py-1 text-xs font-semibold ${dateBadge}`}
        >
          {date}
        </span>

        <span
          className={`rounded-full px-3 py-1 text-xs font-semibold ${modeBadge}`}
        >
          {mode}
        </span>
      </div>

      {/* Company */}

      <div className="flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#F5F6FA]">
          <RiBuildingLine
            size={20}
            className="text-[#3CBFA4]"
          />
        </div>

        <div className="flex-1">
          <h3 className="font-semibold text-[#211A52]">
            {company}
          </h3>

          <p className="mt-1 text-sm text-[#8A86A3]">
            {role}
          </p>
        </div>
      </div>

      {/* Bottom */}

      <div className="mt-5 flex items-center justify-between border-t border-[#F1F2F6] pt-4">
        <div className="flex items-center gap-2 text-sm font-medium text-[#5F5B80]">
          <RiTimeLine />
          {time}
        </div>

        <button className="flex h-9 w-9 items-center justify-center rounded-full transition-all duration-300 hover:bg-[#3CBFA4] hover:text-white">
          <RiArrowRightLine size={18} />
        </button>
      </div>
    </div>
  );
};

export default InterviewCard;