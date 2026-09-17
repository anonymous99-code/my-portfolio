import { ArrowUp, FolderGit2, Globe, Mail } from "lucide-react";

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/yourusername",
    icon: FolderGit2,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/yourusername",
    icon: Globe,
  },
  {
    label: "Email",
    href: "mailto:your@email.com",
    icon: Mail,
  },
];

function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-10">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <a
              href="#home"
              className="text-lg font-bold tracking-tight text-white"
            >
              Creator<span className="text-white/30">.</span>
            </a>

            <p className="mt-2 max-w-sm text-sm leading-6 text-white/30">
              Full-Stack Developer building modern web applications with
              security in mind.
            </p>
          </div>

          <div className="flex items-center gap-3">
            {socialLinks.map((link) => {
              const Icon = link.icon;

              return (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.label === "Email" ? undefined : "_blank"}
                  rel={link.label === "Email" ? undefined : "noreferrer"}
                  aria-label={link.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/40 transition-all duration-300 hover:border-white/30 hover:bg-white hover:text-black"
                >
                  <Icon size={17} />
                </a>
              );
            })}

            <a
              href="#home"
              aria-label="Back to top"
              className="ml-2 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/40 transition-all duration-300 hover:border-white/30 hover:bg-white hover:text-black"
            >
              <ArrowUp size={17} />
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/20 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Creator. All rights reserved.
          </p>

          <p>
            Designed & built with React.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;