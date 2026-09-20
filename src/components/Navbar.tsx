import { useState } from "react";
import { RxCross2, RxHamburgerMenu } from "react-icons/rx";
import Logo from "../assets/logo-text.png";

const links = [
  { label: "Home", href: "#home" },
  { label: "Technologies", href: "#technologies" },
  { label: "Projects", href: "#technologies" },
  { label: "About", href: "#footer" },
  { label: "Contact", href: "#footer" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("Home");

  const handleClick = (label: string) => {
    setActive(label);
    setOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white font-semibold">
      <nav className="container mx-auto flex items-center justify-between px-5 py-4">
        <a href="#home" onClick={() => handleClick("Home")} className="flex items-center">
          <img src={Logo} alt="DevStack" className="h-9 w-auto" />
        </a>

        {/* desktop links */}
        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <li key={link.label}>
              <a href={link.href} onClick={() => handleClick(link.label)} className={`transition-colors hover:text-pink-500 ${active === link.label ? "text-pink-500" : "text-ink"}`}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <button className="hidden cursor-pointer text-ink hover:text-pink-500 sm:block">
            Sign in
          </button>
          <button className="cursor-pointer rounded-full bg-accent px-5 py-2 text-white transition hover:opacity-90">
            Sign up
          </button>
          <button
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen(!open)}
            className="ml-1 cursor-pointer text-2xl text-ink md:hidden"
          >
            {open ? <RxCross2 /> : <RxHamburgerMenu />}
          </button>
        </div>
      </nav>

      {/* mobile menu — conditional rendering */}
      {open && (
        <ul className="space-y-1 border-t border-gray-100 bg-white px-5 pb-4 pt-2 md:hidden">
          {links.map((link) => (
            <li key={link.label}>
              <a href={link.href} onClick={() => handleClick(link.label)} className={`block rounded-lg px-3 py-2 ${active === link.label ? "bg-pink-50 text-pink-500" : "text-ink"}`}>
                {link.label}
              </a>
            </li>
          ))}
          <li className="sm:hidden">
            <button className="w-full rounded-lg px-3 py-2 text-left text-ink">Sign in</button>
          </li>
        </ul>
      )}
    </header>
  );
};

export default Navbar;