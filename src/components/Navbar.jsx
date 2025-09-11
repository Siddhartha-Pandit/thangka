import React, { useState, useEffect, useRef } from "react";
import { Globe, Search, ShoppingCart } from "lucide-react";
import "..//assets/css/navbar.css"; // Ensure this path is correct in your project
import { Link } from "react-router-dom";

const navLinks = [
  { href: "#home", label: "首页" },
  { href: "#tangka", label: "唐卡" },
  { href: "#buddha", label: "佛像" },
  { href: "#bowls", label: "颂钵" },
  { href: "#paintings", label: "绘画" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [isTop, setIsTop] = useState(true);
  const [isHidden, setIsHidden] = useState(false); // This state will now be less critical for hiding behavior
  const prevY = useRef(0);
  const firstLinkRef = useRef(null);

  // Scroll behavior: Always visible, but transitions color/transparency
  useEffect(() => {
    prevY.current = window.scrollY;
    let ticking = false;

    function onScroll() {
      const y = window.scrollY;
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsTop(y < 80); // Still useful for transparent/solid background transition

          // --- REMOVED SCROLL-UP HIDE LOGIC ---
          // The original logic to hide on scroll up has been removed.
          // The navbar will now remain visible regardless of scroll direction,
          // but its background and shadow will change based on 'isTop'.

          prevY.current = y;
          ticking = false;
        });
        ticking = true;
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Handle Escape key
  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape" && open) {
        setOpen(false);
      }
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  // Lock body scroll & focus management
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      setTimeout(() => {
        firstLinkRef.current?.focus();
      }, 50);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Constructing class names: 'hidden' class is no longer applied based on scroll direction
  const navClass = [
    "navbar",
    isTop ? "transparent" : "solid",
    // isHidden ? "hidden" : "", // This line is effectively removed/commented out
    open ? "open" : "",
  ].join(" ");

  return (
    <>
      <nav className={navClass} role="navigation" aria-label="Main navigation">
        <div className="nav-container">
          <Link to="/"><div className="logo">🏠 尼泊尔珍宝</div></Link>

          <ul className="nav-menu">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href}>{l.label}</a>
              </li>
            ))}
          </ul>

          <div className="nav-icons">
            <span title="Language">
              <Globe size={20} />
            </span>
            <span title="Search">
              <Search size={20} />
            </span>
            <span title="Cart">
              <Link to="/cart">
                <ShoppingCart size={20} />
              </Link>
            </span>
          </div>

          {/* Hamburger button */}
          <button
            className="hamburger"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </button>
        </div>
      </nav>

      {/* Overlay */}
      <div
        className={`sidenav-overlay ${open ? "show" : ""}`}
        onClick={() => setOpen(false)}
        role="presentation"
        aria-hidden={!open}
      />

      {/* Sidenav drawer */}
      <aside
        className={`sidenav ${open ? "open" : ""}`}
        role="dialog"
        aria-modal={open}
        aria-label="Site navigation"
      >
        <div className="sidenav-header">
          <div className="logo">🏠 尼泊尔珍宝</div>
          <button
            className="sidenav-close"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
          >
            ✕
          </button>
        </div>

        <nav className="sidenav-links">
          {navLinks.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              ref={i === 0 ? firstLinkRef : null}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="sidenav-actions">
          <button className="sidenav-cta">联系我们</button>
        </div>
      </aside>
    </>
  );
};

export default Navbar;