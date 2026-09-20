import Logo from "../assets/logo-text.png";

const columns = [
  { title: "Product", links: ["Home", "Technologies", "Projects"] },
  { title: "Company", links: ["About", "Contact", "Careers"] },
  { title: "Legal", links: ["Privacy Policy", "Terms of Service"] },
];

const socials = ["GitHub", "Twitter", "LinkedIn"];

const Footer = () => {
  return (
    <footer id="footer" className="mt-20 border-t border-gray-300">
      <div className="container mx-auto grid grid-cols-2 gap-10 px-5 py-14 md:grid-cols-4 lg:grid-cols-[2fr_1fr_1fr_1fr]">
        <div className="col-span-2 md:col-span-4 lg:col-span-1">
          <img src={Logo} alt="DevStack" className="h-9 w-auto" />
          <p className="mt-6 max-w-md leading-6 text-gray-400">
            Curated tools, technologies, and resources for developers building modern software.
          </p>
          <div className="mt-5 flex gap-4">
            {socials.map((name) => (
              <a key={name} href="#" className="hover:text-pink-500">
                {name}
              </a>
            ))}
          </div>
        </div>

        {columns.map((col) => (
          <div key={col.title}>
            <h3 className="font-semibold">{col.title}</h3>
            <ul className="mt-4 space-y-3 text-sm text-gray-500">
              {col.links.map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-pink-500">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-gray-200">
        <div className="container mx-auto flex flex-col items-center justify-between gap-2 px-5 py-5 text-sm text-[#aab1bf] sm:flex-row">
          <p>© 2026 Dev Stack. All rights reserved.</p>
          <div className="flex gap-5">
            <span>Privacy</span>
            <span>Terms</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;