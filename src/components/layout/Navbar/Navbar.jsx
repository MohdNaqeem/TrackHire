import { useState } from "react";
import { HiMenu, HiX, HiLocationMarker } from "react-icons/hi";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = ["Home", "Features", "Pricing", "Resources"];

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white shadow-md">
            <HiLocationMarker className="text-2xl" />
          </div>

          <div className="flex flex-col">
            <span className="text-xl font-bold tracking-tight text-gray-900">
              TrackHire
            </span>

            <span className="text-xs text-gray-500">
              Track Every Opportunity
            </span>
          </div>
        </a>

        {/* Desktop Links */}
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link}>
              <a
                href="/"
                className="font-medium text-gray-700 transition hover:text-blue-600"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop Buttons */}
        <div className="hidden items-center gap-4 md:flex">
          <button className="rounded-lg border border-gray-300 px-5 py-2 font-medium transition hover:bg-gray-100">
            Login
          </button>

          <button className="rounded-lg bg-blue-600 px-5 py-2 font-medium text-white transition hover:bg-blue-700">
            Sign Up
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-3xl text-gray-700 md:hidden"
        >
          {isOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="border-t border-gray-200 bg-white md:hidden">
          <ul className="flex flex-col px-6 py-4">
            {navLinks.map((link) => (
              <li key={link}>
                <a
                  href="/"
                  className="block rounded-lg py-3 text-gray-700 transition hover:bg-gray-100 hover:text-blue-600"
                >
                  {link}
                </a>
              </li>
            ))}

            <button className="mt-4 rounded-lg border border-gray-300 py-3">
              Login
            </button>

            <button className="mt-3 rounded-lg bg-blue-600 py-3 font-medium text-white">
              Sign Up
            </button>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
