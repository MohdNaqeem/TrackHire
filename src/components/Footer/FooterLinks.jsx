function FooterLinks({ title, links }) {
  return (
    <div>
      <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-[#8E89B3]">
        {title}
      </h3>

      <ul className="space-y-4">
        {links.map((link) => (
          <li key={link.id}>
            <a
              href={link.href}
              className="text-[#C7C3E0] transition-colors duration-300 hover:text-[#3CBFA4]"
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FooterLinks;