import KanbanCard from "./KanbanCard";

const KanbanColumn = ({ title, applications }) => {
  return (
    <div className="flex min-h-[500px] min-w-[280px] flex-1 flex-col rounded-3xl bg-[#F8F9FC] p-4">
      {/* Column Header */}
      <div className="mb-4 flex items-center justify-between">
        <h2 className="font-semibold text-[#211A52]">
          {title}
        </h2>

        <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-[#8A86A3]">
          {applications.length}
        </span>
      </div>

      {/* Application Cards */}
      <div className="space-y-3">
        {applications.length > 0 ? (
          applications.map((application) => (
            <KanbanCard
              key={application.id}
              company={application.company}
              position={application.position}
              location={application.location}
              appliedDate={application.appliedDate}
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