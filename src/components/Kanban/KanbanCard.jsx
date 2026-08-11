import { RiBuildingLine, RiMapPinLine, RiCalendarLine } from "react-icons/ri";

const KanbanCard = ({ application }) => {
  const handleDragStart = (event) => {
    event.dataTransfer.setData("applicationId", application.id.toString());
  };

  return (
    <div
      draggable
      onDragStart={handleDragStart}
      className="cursor-grab rounded-2xl border border-[#E7E7EF] bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md active:cursor-grabbing"
    >
      {/* Company */}
      <div className="flex items-start gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#F5F6FA]">
          <RiBuildingLine size={19} className="text-[#3CBFA4]" />
        </div>

        <div className="min-w-0">
          <h3 className="truncate font-semibold text-[#211A52]">
            {application.company}
          </h3>

          <p className="truncate text-sm text-[#8A86A3]">
            {application.position}
          </p>
        </div>
      </div>

      {/* Details */}
      <div className="mt-4 space-y-2">
        <div className="flex items-center gap-2 text-sm text-[#5F5B80]">
          <RiMapPinLine size={16} />
          <span className="truncate">{application.location}</span>
        </div>

        <div className="flex items-center gap-2 text-sm text-[#5F5B80]">
          <RiCalendarLine size={16} />

          <span>{application.appliedDate}</span>
        </div>
      </div>
    </div>
  );
};

export default KanbanCard;
