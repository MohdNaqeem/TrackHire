const FormInput = ({
  label,
  name,
  type = "text",
  placeholder,
  value,
  onChange,
  error,
}) => {
  return (
    <div>
      <label className="mb-2 block text-sm font-semibold text-[#211A52]">
        {label}
      </label>

      <input
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full rounded-2xl border border-[#E7E7EF] px-4 py-3 text-[#211A52] outline-none transition-all duration-300 focus:border-[#3CBFA4] focus:ring-4 focus:ring-[#DDF7F2]"
      />
      {error && (
        <p className="mt-1 text-xs font-medium text-[#DC2626]">{error}</p>
      )}
    </div>
  );
};

export default FormInput;
