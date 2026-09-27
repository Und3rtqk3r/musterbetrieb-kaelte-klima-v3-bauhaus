import { useState } from "react";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="nav-wrap">
      <nav className={`nav${open ? " open" : ""}`}>
        <a className="brand" href="#top" onClick={close}>
          <span className="brand-mark" aria-hidden="true">
            <span /><span /><span /><span />
          </span>
          <span>Musterbetrieb</span>
        </a>

        <div className="nav-meta">
          Werkbund · Kälte / Klima · MCMXXVII
        </div>

        <ul className="nav-links">
          <li><a href="#leistungen" onClick={close}>Leist.</a></li>
          <li><a href="#profil"     onClick={close}>Profil</a></li>
          <li><a href="#galerie"    onClick={close}>Werk</a></li>
          <li><a href="#kontakt"    onClick={close}>Kontakt</a></li>
        </ul>

        <button
          className="nav-toggle"
          aria-label="Menü"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span /><span /><span />
        </button>
      </nav>
    </header>
  );
}
