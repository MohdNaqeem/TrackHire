function AboutCard({ icon: Icon, title, value, description, progress }) {
  return (
    <div className="group rounded-3xl border border-[#E7E7EF] bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      {/* Icon */}
      <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#ECFBF8] text-[#3CBFA4] transition-colors duration-300 group-hover:bg-[#3CBFA4] group-hover:text-white">
        <Icon className="text-3xl" />
      </div>

      {/* Title */}
      <h3 className="text-sm font-medium text-[#5F5B80]">{title}</h3>

      {/* Main Value */}
      <p className="mt-1 text-lg font-semibold text-[#211A52]">{value}</p>

      {/* Description */}
      <p className="mt-1 text-sm text-[#5F5B80]">{description}</p>

      {/* Progress Bar */}
      {progress && (
        <div className="mt-4">
          <div className="h-2 w-full overflow-hidden rounded-full bg-[#E7E7EF]">
            <div
              className="h-full rounded-full bg-[#3CBFA4]"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AboutCard;
