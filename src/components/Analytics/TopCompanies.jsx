const TopCompanies = ({ applications }) => {
  const companyCounts = applications.reduce(
    (result, application) => {
      const company = application.company;

      result[company] = (result[company] || 0) + 1;

      return result;
    },
    {},
  );

  const topCompanies = Object.entries(companyCounts)
    .sort(([, countA], [, countB]) => countB - countA)
    .slice(0, 5);

  /*
    Check whether all companies have the same application count.
    If they do, calling them "Top Companies" would be misleading.
  */
  const counts = topCompanies.map(([, count]) => count);

  const hasDifferentCounts = new Set(counts).size > 1;

  const title = hasDifferentCounts
    ? "Top Companies"
    : "Companies Applied To";

  const description = hasDifferentCounts
    ? "Companies you have applied to most frequently."
    : "Companies included in your application history.";

  return (
    <section className="rounded-3xl border border-[#E7E7EF] bg-white p-6 shadow-sm">
      {/* Header */}
      <div className="mb-5">
        <h2 className="text-xl font-bold text-[#211A52]">
          {title}
        </h2>

        <p className="mt-1 text-sm text-[#8A86A3]">
          {description}
        </p>
      </div>

      {/* Companies */}
      {topCompanies.length > 0 ? (
        <div className="space-y-3">
          {topCompanies.map(([company, count], index) => (
            <div
  key={company}
  className="flex items-center gap-3 rounded-2xl bg-[#FAFAFC] p-3 sm:p-4"
>
  {/* Company */}
  <div className="flex min-w-0 flex-1 items-center gap-3">
    {hasDifferentCounts && (
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#ECFBF8] text-sm font-bold text-[#3CBFA4]">
        {index + 1}
      </div>
    )}

    <span className="shrink-0 whitespace-nowrap font-semibold text-[#211A52]">
      {company}
    </span>
  </div>

  {/* Application Count */}
  <span className="min-w-0 flex-1 truncate text-right text-xs font-semibold text-[#8A86A3] sm:text-sm">
    {count} {count === 1 ? "application" : "applications"}
  </span>
</div>
          ))}
        </div>
      ) : (
        <div className="rounded-2xl border border-dashed border-[#DCDCE7] p-8 text-center">
          <p className="text-sm text-[#8A86A3]">
            No application data available.
          </p>
        </div>
      )}
    </section>
  );
};

export default TopCompanies;