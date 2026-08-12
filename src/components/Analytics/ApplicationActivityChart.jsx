const ApplicationActivityChart = ({ activity }) => {
  const maxApplications = Math.max(
    ...activity.map((item) => item.applications),
    1,
  );

  return (
    <section className="rounded-3xl border border-[#E7E7EF] bg-white p-6 shadow-sm">
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-xl font-bold text-[#211A52]">
          Application Activity
        </h2>

        <p className="mt-1 text-sm text-[#8A86A3]">
          Applications submitted over the last four weeks.
        </p>
      </div>

      {/* Chart */}
      <div className="flex h-64 items-end gap-4 sm:gap-8">
        {activity.map((item) => {
          const height =
            (item.applications / maxApplications) * 100;

          return (
            <div
              key={item.week}
              className="flex h-full flex-1 flex-col items-center justify-end"
            >
              {/* Number */}
              <span className="mb-2 text-xs font-semibold text-[#5F5B80]">
                {item.applications}
              </span>

              {/* Bar */}
              <div className="flex h-full w-full items-end justify-center">
                <div
                  className="w-full max-w-12 rounded-t-xl bg-[#3CBFA4] transition-all duration-500 hover:bg-[#32A88F]"
                  style={{
                    height: `${height}%`,
                  }}
                />
              </div>

              {/* Week */}
              <span className="mt-3 text-xs font-medium text-[#8A86A3]">
                {item.week}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ApplicationActivityChart;