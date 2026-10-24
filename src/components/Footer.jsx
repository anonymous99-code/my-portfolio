import { ArrowUp, FolderGit2, Globe, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import site from "../data/site";

const socialLinks = [
  { label: "GitHub", href: site.github, icon: FolderGit2 },
  { label: "LinkedIn", href: site.linkedin, icon: Globe },
  { label: "Email", href: site.email && `mailto:${site.email}`, icon: Mail },
].filter((link) => link.href);

const iconBtn =
  "flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/40 transition-all duration-300 hover:border-white/30 hover:bg-white hover:text-black";

function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-10">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <Link
              to={{ pathname: "/", hash: "#home" }}
              className="text-lg font-bold tracking-tight text-white"
            >
              {site.brand}
              <span className="text-emerald-400">.</span>
            </Link>

            <p className="mt-2 max-w-sm text-sm leading-6 text-white/40">
              Full-Stack Developer building modern web applications with
              security in mind.
            </p>
          </div>

          <div className="flex items-center gap-3">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              const external = link.label !== "Email";

              return (
                <a
                  key={link.label}
                  href={link.href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noreferrer" : undefined}
                  aria-label={link.label}
                  className={iconBtn}
                >
                  <Icon size={17} />
                </a>
              );
            })}

            <Link
              to={{ pathname: "/", hash: "#home" }}
              aria-label="Back to top"
              className={`ml-2 ${iconBtn}`}
            >
              <ArrowUp size={17} />
            </Link>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/30 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.brand}. All rights reserved.
          </p>

          <p>Designed & built with React.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
