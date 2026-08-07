import ApplicationRow from "./ApplicationRow";

const ApplicationsTable = ({ applications, onEdit }) => {
  return (
    <section className="overflow-hidden rounded-3xl border border-[#E7E7EF] bg-white shadow-sm">
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          {/* Table Header */}
          <thead className="bg-[#F8F9FC]">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-semibold text-[#5F5B80]">
                Company
              </th>

              <th className="px-6 py-4 text-left text-sm font-semibold text-[#5F5B80]">
                Status
              </th>

              <th className="px-6 py-4 text-left text-sm font-semibold text-[#5F5B80]">
                Applied
              </th>

              <th className="px-6 py-4 text-left text-sm font-semibold text-[#5F5B80]">
                Location
              </th>

              <th className="px-6 py-4 text-right text-sm font-semibold text-[#5F5B80]">
                Action
              </th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {applications.length > 0 ? (
              applications.map((application) => (
                <ApplicationRow
                  key={application.id}
                  application={application}
                  company={application.company}
                  position={application.position}
                  status={application.status}
                  appliedDate={application.appliedDate}
                  location={application.location}
                  onEdit={onEdit}
                />
              ))
            ) : (
              <tr>
                <td colSpan="5" className="py-10 text-center text-[#8A86A3]">
                  No applications found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default ApplicationsTable;
