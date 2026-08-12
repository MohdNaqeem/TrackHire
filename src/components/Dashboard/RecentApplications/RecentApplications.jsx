import { Link } from "react-router-dom";
import { RiArrowRightLine } from "react-icons/ri";

import ApplicationRow from "./ApplicationRow";
import { applicationsData } from "../../../data/applicationsData";


const RecentApplications = () => {
  const recentApplications = [...applicationsData]
    .sort(
      (a, b) =>
        new Date(b.appliedDate) - new Date(a.appliedDate),
    )
    .slice(0, 3);


  return (
    <section className="mt-8 rounded-3xl border border-[#E7E7EF] bg-white p-4 shadow-sm sm:p-6 lg:p-7">
      {/* Header */}
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-xl font-bold text-[#211A52] sm:text-2xl">
            Recent Applications
          </h2>

          <p className="mt-1 text-sm text-[#8A86A3]">
            Track your latest job applications.
          </p>
        </div>


        <Link
          to="/dashboard/applications"
          className="flex w-fit items-center gap-2 rounded-xl bg-[#F5F6FA] px-4 py-2 text-sm font-medium text-[#211A52] transition-all duration-300 hover:bg-[#3CBFA4] hover:text-white"
        >
          View All Applications

          <RiArrowRightLine size={18} />
        </Link>
      </div>


      {/* Table Scroll Container */}
      <div className="overflow-x-auto rounded-2xl border border-[#ECECF3]">
        <table className="min-w-[700px] w-full border-collapse">
          <thead className="bg-[#FAFAFC]">
            <tr>
              <th className="whitespace-nowrap px-6 py-4 text-left text-sm font-semibold text-[#8A86A3]">
                Company
              </th>

              <th className="whitespace-nowrap px-6 py-4 text-left text-sm font-semibold text-[#8A86A3]">
                Status
              </th>

              <th className="whitespace-nowrap px-6 py-4 text-left text-sm font-semibold text-[#8A86A3]">
                Location
              </th>

              <th className="whitespace-nowrap px-6 py-4 text-left text-sm font-semibold text-[#8A86A3]">
                Applied
              </th>

              <th className="whitespace-nowrap px-6 py-4 text-right text-sm font-semibold text-[#8A86A3]">
                Action
              </th>
            </tr>
          </thead>


          <tbody>
            {recentApplications.map((application) => (
              <ApplicationRow
                key={application.id}
                company={application.company}
                position={application.position}
                location={application.location}
                status={application.status}
                appliedDate={application.appliedDate}
              />
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};


export default RecentApplications;