const SettingsSection = ({
  title,
  description,
  children,
}) => {
  return (
    <section className="rounded-3xl border border-[#E7E7EF] bg-white p-6 shadow-sm">
      <div className="mb-6">
        <h2 className="text-xl font-bold text-[#211A52]">
          {title}
        </h2>

        <p className="mt-1 text-sm text-[#8A86A3]">
          {description}
        </p>
      </div>

      {children}
    </section>
  );
};

export default SettingsSection;