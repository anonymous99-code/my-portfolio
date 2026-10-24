import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import site from "../data/site";
import useActiveSection from "../hooks/useActiveSection";

const navLinks = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Experience", id: "experience" },
  { name: "Skills", id: "skills" },
  { name: "Projects", id: "projects" },
  { name: "Cybersecurity", id: "cybersecurity" },
  { name: "Certifications", id: "certifications" },
  { name: "Contact", id: "contact" },
];

const sectionIds = navLinks.map((l) => l.id);

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();
  const isHome = pathname === "/";
  const activeId = useActiveSection(sectionIds);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu on Escape
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e) => e.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  // Router links so hash navigation also works from /projects
  const hrefFor = (id) => ({ pathname: "/", hash: `#${id}` });
  const close = () => setMenuOpen(false);

  return (
    <header className="fixed left-0 top-0 z-50 w-full px-3 sm:px-4">
      <nav
        aria-label="Primary"
        className={`mx-auto mt-3 sm:mt-4 flex max-w-7xl items-center justify-between rounded-2xl border px-4 sm:px-5 py-3 sm:py-3.5 backdrop-blur-xl transition-all duration-300 ${
          scrolled
            ? "border-white/15 bg-black/75 shadow-2xl shadow-black/40"
            : "border-white/10 bg-black/50 shadow-2xl shadow-black/20"
        }`}
      >
        <Link
          to={hrefFor("home")}
          onClick={close}
          className="shrink-0 text-base sm:text-lg font-bold tracking-tight text-white"
        >
          {site.brand}
          <span className="text-emerald-400">.</span>
        </Link>

        {/* Desktop Links (lg breakpoint for intermediate screens) */}
        <div className="hidden items-center gap-0.5 lg:gap-1 lg:flex">
          {navLinks.map((link) => {
            const isActive = isHome && activeId === link.id;
            return (
              <Link
                key={link.id}
                to={hrefFor(link.id)}
                aria-current={isActive ? "true" : undefined}
                className={`relative whitespace-nowrap rounded-full px-2.5 lg:px-3 py-1.5 text-xs transition-colors duration-200 ${
                  isActive
                    ? "bg-white/10 text-white"
                    : "text-white/50 hover:text-white"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        <Link
          to={hrefFor("contact")}
          className="hidden shrink-0 rounded-full border border-white/15 px-3.5 lg:px-4 py-2 text-xs font-medium text-white transition-all duration-300 hover:bg-white hover:text-black lg:block"
        >
          Let's Talk
        </Link>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          className="rounded-lg p-1.5 sm:p-2 text-white transition-colors hover:bg-white/10 lg:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div
          id="mobile-menu"
          className="mx-auto mt-2 max-w-7xl rounded-2xl border border-white/10 bg-black/95 p-4 sm:p-5 shadow-2xl backdrop-blur-xl lg:hidden"
        >
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => {
              const isActive = isHome && activeId === link.id;
              return (
                <Link
                  key={link.id}
                  to={hrefFor(link.id)}
                  onClick={close}
                  className={`rounded-xl px-3.5 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm transition-colors hover:bg-white/[0.05] hover:text-white ${
                    isActive ? "bg-white/[0.06] text-white font-medium" : "text-white/60"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}

            <Link
              to={hrefFor("contact")}
              onClick={close}
              className="mt-2 sm:mt-3 rounded-full bg-white px-5 py-2.5 sm:py-3 text-center text-xs sm:text-sm font-medium text-black transition hover:bg-white/90"
            >
              Let's Talk
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;