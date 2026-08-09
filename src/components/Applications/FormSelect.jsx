const FormSelect = ({ label, name, value, onChange, options, error }) => {
  return (
    <div>
      <label className="mb-2 block text-sm font-semibold text-[#211A52]">
        {label}
      </label>

      <select
        name={name}
        value={value}
        onChange={onChange}
        className="w-full rounded-2xl border border-[#E7E7EF] px-4 py-3 text-[#211A52] outline-none transition-all duration-300 focus:border-[#3CBFA4] focus:ring-4 focus:ring-[#DDF7F2]"
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>

      {error && (
        <p className="mt-1 text-xs font-medium text-[#DC2626]">{error}</p>
      )}
    </div>
  );
};

export default FormSelect;
