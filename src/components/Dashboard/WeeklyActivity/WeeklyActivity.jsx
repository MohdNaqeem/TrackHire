import ActivityChart from "./ActivityChart";

const WeeklyActivity = () => {
  return (
    <section className="flex h-full flex-col rounded-3xl border border-[#E7E7EF] bg-white p-5 sm:p-6 lg:p-7 shadow-sm">
      {/* Header */}
      <div className="mb-5">
        <h2 className="text-xl font-bold text-[#211A52] sm:text-2xl">
          Weekly Activity
        </h2>

        <p className="mt-1 max-w-xs text-sm text-[#8A86A3]">
          Applications submitted over the last 7 days.
        </p>
      </div>

      {/* Chart */}
      <div className="min-h-0 flex-1">
        <ActivityChart />
      </div>
    </section>
  );
};

export default WeeklyActivity;