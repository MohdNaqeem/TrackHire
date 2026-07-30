const StatCard = ({
  title,
  value,
  icon: Icon,
  iconBg,
  iconColor,
}) => {
  return (
    <div className="rounded-2xl border border-[#E7E7EF] bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="flex items-center justify-between">
        {/* Left Section */}
        <div>
          <p className="text-sm font-medium text-[#5F5B80]">
            {title}
          </p>

          <h2 className="mt-3 text-3xl font-bold text-[#211A52]">
            {value}
          </h2>
        </div>

        {/* Right Section */}
        <div
          className={`flex h-14 w-14 items-center justify-center rounded-2xl ${iconBg}`}
        >
          <Icon className={`${iconColor}`} size={28} />
        </div>
      </div>
    </div>
  );
};

export default StatCard;