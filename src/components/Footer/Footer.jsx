import {
  FaGithub,
  FaLinkedin,
  FaXTwitter,
} from "react-icons/fa6";

import FooterLinks from "./FooterLinks";
import footerLinks from "./footerData";

function Footer() {
  return (
    <footer className="mt-24 bg-[#211A52] text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        {/* Top */}

        <div className="flex flex-col gap-10 border-b border-white/10 pb-12 md:flex-row md:items-start md:justify-between">
          <div className="max-w-md">
            <h2 className="text-3xl font-bold">
              TrackHire
            </h2>

            <p className="mt-4 leading-7 text-[#C7C3E0]">
              Track every application, interview, and opportunity in one place.
            </p>
          </div>

          <div className="flex items-center gap-6 text-xl text-[#C7C3E0]">
            <a
              href="#"
              className="transition-colors duration-300 hover:text-[#3CBFA4]"
            >
              <FaGithub />
            </a>

            <a
              href="#"
              className="transition-colors duration-300 hover:text-[#3CBFA4]"
            >
              <FaLinkedin />
            </a>

            <a
              href="#"
              className="transition-colors duration-300 hover:text-[#3CBFA4]"
            >
              <FaXTwitter />
            </a>
          </div>
        </div>

        {/* Middle */}

        <div className="grid gap-10 border-b border-white/10 py-14 sm:grid-cols-2 lg:grid-cols-4">
          {footerLinks.map((section) => (
            <FooterLinks
              key={section.id}
              title={section.title}
              links={section.links}
            />
          ))}
        </div>

        {/* Bottom */}

        {/* Bottom */}

<div className="flex flex-col items-center justify-center gap-2 border-t border-white/10 pt-8 text-center text-sm text-[#C7C3E0] md:flex-row">
  <p>© 2026 TrackHire. All rights reserved.</p>

  <span className="hidden md:inline">|</span>

  <p>
    Developed by{" "}
    <a
      href="https://www.linkedin.com/in/mohammad-naqeem-raza-momin-a8202a21a/"
      target="_blank"
      rel="noopener noreferrer"
      className="font-medium text-white transition-colors duration-300 hover:text-[#3CBFA4]"
    >
      Naqeem Momin
    </a>
  </p>
</div>
      </div>
    </footer>
  );
}

export default Footer;