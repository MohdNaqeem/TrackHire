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
    <div className="w-full max-w-xl rounded-3xl border border-slate-200 bg-white p-8 shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold text-[#211A52]">
            TrackHire Dashboard
          </h3>

          <p className="text-sm text-[#5F5B80]">Your job search at a glance</p>
        </div>

        <span className="rounded-full bg-[#ECFBF8] px-3 py-1 text-xs font-medium text-[#3CBFA4]">
          Live Preview
        </span>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-3 sm:gap-4">
        {stats.map((stat) => (
          <div
            key={stat.id}
            className="rounded-xl bg-[#F7F7FB] p-4 text-center"
          >
            <h4 className="text-2xl font-bold text-[#211A52]">{stat.value}</h4>

            <p className="mt-1 text-sm text-[#5F5B80]">{stat.title}</p>
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
              className="flex items-center justify-between rounded-xl bg-white border border-slate-100 p-4 transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
            >
              <div>
                <h5 className="font-medium text-[#211A52]">{job.role}</h5>

                <p className="text-sm text-[#5F5B80]">{job.company}</p>
              </div>

              <span
                className={`rounded-full px-3 py-1 text-sm font-medium ${job.bgColor} ${job.textColor}`}
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
