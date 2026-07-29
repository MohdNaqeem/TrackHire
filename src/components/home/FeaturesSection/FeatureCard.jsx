function FeatureCard({ icon: Icon, title, description }) {
  return (
    <div className="group rounded-3xl border border-[#E8EDF3] bg-white p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      {/* Icon */}
      <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#ECFBF8] text-[#3CBFA4] transition-colors duration-300 group-hover:bg-[#3CBFA4] group-hover:text-white">
        <Icon className="text-3xl" />
      </div>

      {/* Title */}
      <h3 className="mb-3 text-xl font-semibold text-[#211A52]">
        {title}
      </h3>

      {/* Description */}
      <p className="leading-7 text-[#5F5B80]">
        {description}
      </p>
    </div>
  );
}

export default FeatureCard;