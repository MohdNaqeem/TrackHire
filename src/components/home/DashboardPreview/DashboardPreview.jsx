const stats = [
  {
    id: 1,
    title: "Applications",
    value: 24,
  },
  {
    id: 2,
    title: "Interviews",
    value: 6,
  },
  {
    id: 3,
    title: "Offers",
    value: 2,
  },
];

const jobs = [
  {
    id: 1,
    role: "Frontend Developer",
    company: "Google",
    status: "Applied",
    bgColor: "bg-blue-100",
    textColor: "text-blue-700",
  },
  {
    id: 2,
    role: "React Developer",
    company: "Microsoft",
    status: "Interview",
    bgColor: "bg-yellow-100",
    textColor: "text-yellow-700",
  },
  {
    id: 3,
    role: "MERN Stack Developer",
    company: "Amazon",
    status: "Offer",
    bgColor: "bg-green-100",
    textColor: "text-green-700",
  },
];

function DashboardPreview() {
  return (
    <div className="w-full max-w-xl rounded-3xl border border-slate-200 bg-white p-5 shadow-[0_20px_60px_rgba(15,23,42,0.08)] sm:p-8">
      {/* Header */}
      <div className="mb-6 flex items-start justify-between gap-3">
        <div className="min-w-0">
          <h3 className="text-lg font-semibold text-[#211A52]">
            TrackHire Dashboard
          </h3>

          <p className="text-sm text-[#5F5B80]">
            Your job search at a glance
          </p>
        </div>

        <span className="shrink-0 rounded-full bg-[#ECFBF8] px-3 py-2 text-xs font-medium text-[#3CBFA4]">
          Live Preview
        </span>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-2 sm:gap-4">
        {stats.map((stat) => (
          <div
            key={stat.id}
            className="min-w-0 rounded-xl bg-[#F7F7FB] p-3 text-center sm:p-4"
          >
            <h4 className="text-2xl font-bold text-[#211A52]">
              {stat.value}
            </h4>

            <p className="mt-1 break-words text-xs leading-tight text-[#5F5B80] sm:text-sm">
              {stat.title}
            </p>
          </div>
        ))}
      </div>

      {/* Recent Applications */}
      <div className="mt-8">
        <h4 className="mb-4 text-lg font-semibold text-[#211A52]">
          Recent Applications
        </h4>

        <div className="space-y-3">
          {jobs.map((job) => (
            <div
              key={job.id}
              className="flex items-center justify-between gap-3 rounded-xl border border-slate-100 bg-white p-4 transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
            >
              <div className="min-w-0">
                <h5 className="truncate font-medium text-[#211A52]">
                  {job.role}
                </h5>

                <p className="text-sm text-[#5F5B80]">
                  {job.company}
                </p>
              </div>

              <span
                className={`shrink-0 rounded-full px-3 py-1 text-xs font-medium sm:text-sm ${job.bgColor} ${job.textColor}`}
              >
                {job.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default DashboardPreview;