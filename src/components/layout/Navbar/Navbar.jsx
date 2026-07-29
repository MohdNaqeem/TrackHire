import { useState, useEffect} from "react";
import { HiMenu, HiX, HiLocationMarker } from "react-icons/hi";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Features",
      path: "/features",
    },
    {
      name: "Resources",
      path: "/resources",
    },
    {
      name: "About",
      path: "/about",
    },
  ];

  useEffect(() => {
  const handleScroll = () => {
    setIsScrolled(window.scrollY > 10);
  };

  window.addEventListener("scroll", handleScroll);

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, []);

  return (
    <nav
  className={`sticky top-0 z-50 transition-all duration-500 ease-in-out ${
    isScrolled
      ? "bg-white shadow-sm"
      : "bg-gradient-to-br from-[#FCFCFD] via-[#F8FAFC] to-[#F5FAF8]"
  }`}
>
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#3CBFA4] text-white shadow-sm">
            <HiLocationMarker className="text-2xl" />
          </div>

          <div className="flex flex-col">
            <span className="text-xl font-bold tracking-tight text-[#211A52]">
              TrackHire
            </span>

            <span className="text-xs font-medium text-[#7A7699]">
              Track Every Opportunity
            </span>
          </div>
        </NavLink>

        {/* Desktop Navigation */}
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.path}>
              <NavLink
                to={link.path}
                className="font-medium text-[#5F5B80] transition-colors duration-200 hover:text-[#3CBFA4]"
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Desktop Buttons */}
        <div className="hidden items-center gap-4 md:flex">
          <NavLink
            to="/login"
            className="rounded-xl border border-[#D9D9E6] px-5 py-2.5 font-medium text-[#5F5B80] transition-all duration-200 hover:bg-[#ECFBF8]"
          >
            Login
          </NavLink>

          <NavLink
            to="/signup"
            className="rounded-xl bg-[#3CBFA4] px-5 py-2.5 font-medium text-white shadow-sm transition-all duration-200 hover:bg-[#31A88F]"
          >
            Sign Up
          </NavLink>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-3xl text-[#5F5B80] md:hidden"
        >
          {isOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="border-t border-[#E7E7EF] bg-[#F7F7FB] md:hidden">
          <ul className="flex flex-col px-6 py-5">
            {navLinks.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="block rounded-lg py-3 font-medium text-[#5F5B80] transition hover:bg-[#ECFBF8] hover:text-[#3CBFA4]"
                >
                  {link.name}
                </NavLink>
              </li>
            ))}

            <NavLink
              to="/login"
              onClick={() => setIsOpen(false)}
              className="mt-5 rounded-xl border border-[#D9D9E6] py-3 text-center font-medium text-[#5F5B80] transition hover:bg-[#ECFBF8]"
            >
              Login
            </NavLink>

            <NavLink
              to="/signup"
              onClick={() => setIsOpen(false)}
              className="mt-3 rounded-xl bg-[#3CBFA4] py-3 text-center font-medium text-white transition hover:bg-[#31A88F]"
            >
              Sign Up
            </NavLink>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;