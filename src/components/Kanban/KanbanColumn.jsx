import {
  RiArrowDownSLine,
} from "react-icons/ri";

import KanbanCard from "./KanbanCard";

const KanbanColumn = ({
  title,
  applications,
  onDrop,
  onApplicationClick,
  isOpen,
  onToggle,
}) => {
  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();

    const applicationId = Number(
      event.dataTransfer.getData("applicationId"),
    );

    onDrop(applicationId, title);
  };

  return (
    <div
      className="
        min-w-0
        rounded-3xl
        bg-[#F8F9FC]
        p-3
        sm:p-4
        md:min-h-[500px]
      "
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      {/* Column Header */}
      <button
        type="button"
        onClick={onToggle}
        className="
          flex
          w-full
          items-center
          justify-between
          rounded-2xl
          px-1
          py-2
          text-left
          md:cursor-default
        "
      >
        <h2 className="font-semibold text-[#211A52]">
          {title}
        </h2>

        <div className="flex items-center gap-2">
          <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-[#8A86A3]">
            {applications.length}
          </span>

          {/* Arrow - Mobile Only */}
          <RiArrowDownSLine
            size={20}
            className={`
              text-[#8A86A3]
              transition-transform
              duration-300
              md:hidden
              ${isOpen ? "rotate-180" : ""}
            `}
          />
        </div>
      </button>

      {/* Application Cards */}
      <div
        className={`
          mt-2
          space-y-3
          md:mt-2
          md:block
          ${
            isOpen
              ? "block"
              : "hidden"
          }
        `}
      >
        {applications.length > 0 ? (
          applications.map((application) => (
            <KanbanCard
              key={application.id}
              application={application}
              onClick={() =>
                onApplicationClick(application)
              }
            />
          ))
        ) : (
          <div className="rounded-2xl border border-dashed border-[#DCDCE7] bg-white p-6 text-center">
            <p className="text-sm text-[#8A86A3]">
              No applications
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default KanbanColumn;