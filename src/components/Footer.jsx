export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div>
          <div className="footer-brand">
            DOTZ<span className="r">AU</span>ER<br />
            KÄLTE · KL<span className="y">IM</span>A
          </div>
          <div className="footer-brand-note">
            Werkbund · drei Generationen · MCMXXVII
          </div>
        </div>
        <div className="footer-col">
          <h4>Werkstatt</h4>
          <ul>
            <li>Musterstraße 1</li>
            <li>12345 Musterstadt</li>
            <li>Mo–Fr · 7–17 Uhr</li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Direkt</h4>
          <ul>
            <li><a href="tel:+49 000 000000">0000 / 00 00 00</a></li>
            <li><a href="mailto:info@musterbetrieb-kaelte-klima.example">E-Post</a></li>
            <li><a href="#kontakt">Anfrage</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bar">
        <span>© {new Date().getFullYear()} · DOTZAUER · COTTBUS</span>
        <div style={{ display: "flex", gap: "1.6rem", flexWrap: "wrap" }}>
          <a href="#impressum">Impressum</a>
          <a href="#datenschutz">Datenschutz</a>
          <a href="#agb">AGB</a>
        </div>
      </div>
    </footer>
  );
}
