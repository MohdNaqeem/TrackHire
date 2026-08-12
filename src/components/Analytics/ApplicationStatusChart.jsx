const ApplicationStatusChart = ({ applications }) => {
  const statuses = [
    {
      name: "Applied",
      color: "bg-[#3CBFA4]",
    },
    {
      name: "Interview",
      color: "bg-[#6C63A8]",
    },
    {
      name: "Offer",
      color: "bg-[#F2B84B]",
    },
    {
      name: "Rejected",
      color: "bg-[#E57373]",
    },
  ];

  const totalApplications = applications.length;

  const getStatusCount = (status) => {
    return applications.filter(
      (application) => application.status === status,
    ).length;
  };

  const getPercentage = (count) => {
    if (totalApplications === 0) {
      return 0;
    }

    return Math.round(
      (count / totalApplications) * 100,
    );
  };

  return (
    <section className="min-w-0 rounded-3xl border border-[#E7E7EF] bg-white p-5 shadow-sm sm:p-6">
      {/* Header */}
      <div className="mb-5">
        <h2 className="text-xl font-bold text-[#211A52]">
          Application Status
        </h2>

        <p className="mt-1 text-sm text-[#8A86A3]">
          Overview of your applications by stage.
        </p>
      </div>

      {/* Statuses */}
      <div className="space-y-4">
        {statuses.map((status) => {
          const count = getStatusCount(status.name);
          const percentage = getPercentage(count);

          return (
            <div key={status.name} className="min-w-0">
              <div className="mb-2 flex items-center justify-between gap-3">
                <div className="flex min-w-0 items-center gap-2">
                  <span
                    className={`h-2.5 w-2.5 shrink-0 rounded-full ${status.color}`}
                  />

                  <span className="truncate text-sm font-semibold text-[#5F5B80]">
                    {status.name}
                  </span>
                </div>

                <span className="shrink-0 whitespace-nowrap text-sm font-semibold text-[#211A52]">
                  {count}
                </span>
              </div>

              <div className="h-2 w-full overflow-hidden rounded-full bg-[#F0F0F5]">
                <div
                  className={`h-full rounded-full transition-all duration-500 ${status.color}`}
                  style={{
                    width: `${percentage}%`,
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ApplicationStatusChart;