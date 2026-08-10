import { RiBuildingLine, RiMapPinLine, RiCalendarLine } from "react-icons/ri";

const KanbanCard = ({
  company,
  position,
  location,
  appliedDate,
}) => {
  return (
    <div className="rounded-2xl border border-[#E7E7EF] bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
      {/* Company */}
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F5F6FA]">
            <RiBuildingLine
              size={19}
              className="text-[#3CBFA4]"
            />
          </div>

          <div>
            <h3 className="font-semibold text-[#211A52]">
              {company}
            </h3>

            <p className="text-sm text-[#8A86A3]">
              {position}
            </p>
          </div>
        </div>
      </div>

      {/* Details */}
      <div className="mt-4 space-y-2">
        <div className="flex items-center gap-2 text-sm text-[#5F5B80]">
          <RiMapPinLine size={16} />
          <span>{location}</span>
        </div>

        <div className="flex items-center gap-2 text-sm text-[#5F5B80]">
          <RiCalendarLine size={16} />
          <span>{appliedDate}</span>
        </div>
      </div>
    </div>
  );
};

export default KanbanCard;