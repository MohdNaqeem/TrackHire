const SettingsSection = ({
  title,
  description,
  children,
}) => {
  return (
    <section className="min-w-0 rounded-3xl border border-[#E7E7EF] bg-white p-4 shadow-sm sm:p-6">
      <div className="mb-5 sm:mb-6">
        <h2 className="text-xl font-bold text-[#211A52]">
          {title}
        </h2>

        <p className="mt-1 text-sm leading-5 text-[#8A86A3]">
          {description}
        </p>
      </div>

      {children}
    </section>
  );
};

export default SettingsSection;