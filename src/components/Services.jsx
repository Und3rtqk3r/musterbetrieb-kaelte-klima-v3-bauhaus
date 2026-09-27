const SERVICES = [
  { num: "01", title: "Klimaanlagen",      desc: "Split- und Multisplit-Geräte, VRF-Systeme, mobile Lösungen für Wohnen, Büros und Gewerbe.", tag: "Wohnen · Gewerbe" },
  { num: "02", title: "Kältetechnik",      desc: "Begehbare Kühl- und Tiefkühlräume, gewerbliche Kühlmöbel, Prozesskühlung für die Industrie.", tag: "Gastro · Industrie" },
  { num: "03", title: "Wärmepumpen",       desc: "Luft-Wasser, Luft-Luft, Hybridsysteme. Heizen, kühlen, Warmwasser — nachhaltig.", tag: "Förderfähig" },
  { num: "04", title: "Wartung",           desc: "Inspektion nach F-Gase-Verordnung, Dichtheitsprüfungen, regelmäßige Funktionskontrollen.", tag: "F-Gase-Zert." },
  { num: "05", title: "Notdienst",         desc: "Wenn die Kühlung kippt — 24 Stunden, 7 Tage. Cottbus, Berlin, Lausitz und darüber hinaus.", tag: "24 / 7" },
  { num: "06", title: "Planung",           desc: "Individuelle Anlagenplanung für Neubau und Bestand — energieeffizient, BAFA-konform.", tag: "Neubau · Bestand" },
];

export default function Services() {
  return (
    <section id="leistungen" className="section">
      <div className="section-head">
        <div className="num-block">
          <div className="num">№<span className="accent">I</span></div>
          <div className="label">Leistungen</div>
        </div>
        <div>
          <h2>
            Sechs Disziplinen.<br />
            <span className="red">Ein</span> Haus.
          </h2>
          <p className="lead">
            Was wir bauen, warten und planen — solide gemacht,
            ehrlich dokumentiert, mit Verstand für Energie und Material.
          </p>
        </div>
      </div>

      <div className="services">
        {SERVICES.map((s) => (
          <article key={s.num} className="service">
            <div>
              <div className="service-num">
                {s.num}<span className="dot" aria-hidden="true" />
              </div>
              <h3 className="service-title">{s.title}</h3>
              <p className="service-desc">{s.desc}</p>
            </div>
            <div className="service-tag">{s.tag}</div>
          </article>
        ))}
      </div>
    </section>
  );
}
