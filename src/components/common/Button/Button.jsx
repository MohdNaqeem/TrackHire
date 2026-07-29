import { NavLink } from "react-router-dom";

function Button({ children, to, variant = "primary" }) {
  const baseClasses =
    "inline-flex items-center justify-center rounded-xl px-6 py-3 font-medium transition-all duration-200";

  const variants = {
    primary: "bg-[#3CBFA4] text-white hover:bg-[#31A88F]",

    secondary:
      "border border-[#D9D9E6] bg-white text-[#211A52] hover:bg-[#ECFBF8]",
  };

  return (
    <NavLink to={to} className={`${baseClasses} ${variants[variant]}`}>
      {children}
    </NavLink>
  );
}

export default Button;
