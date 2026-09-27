const ITEMS = [
  { code: "PRJ-014", year: "2024", title: "VRF Bürogebäude",         place: "Cottbus",     shape: "circle",   size: "big" },
  { code: "PRJ-022", year: "2024", title: "Kühlraum Gastronomie",    place: "Berlin",      shape: "square",   size: "small" },
  { code: "PRJ-019", year: "2023", title: "Wärmepumpe Eigenheim",    place: "Lübben",      shape: "triangle", size: "small" },
  { code: "PRJ-028", year: "2025", title: "VRF-System Hotel",         place: "Hoyerswerda", shape: "dot",      size: "small" },
  { code: "PRJ-031", year: "2025", title: "Tiefkühlanlage",            place: "Spremberg",   shape: "cross",    size: "small" },
  { code: "PRJ-024", year: "2024", title: "Loft-Klimatisierung",       place: "Berlin",      shape: "circle",   size: "big" },
  { code: "PRJ-026", year: "2025", title: "Wärmepumpen-Kaskade",       place: "Forst",       shape: "square",   size: "small" },
  { code: "PRJ-029", year: "2025", title: "Industrie-Kühlung",         place: "Cottbus",     shape: "triangle", size: "small" },
];

export default function Gallery() {
  return (
    <section id="galerie" className="section">
      <div className="section-head">
        <div className="num-block">
          <div className="num">№<span className="accent">III</span></div>
          <div className="label">Werkschau</div>
        </div>
        <div>
          <h2>
            Acht Anlagen.<br />
            <span className="blue">Eine</span> Auswahl.
          </h2>
          <p className="lead">
            Ausgewählte Arbeiten der letzten Jahre — vom 4-m²-Kühlraum
            in einer Berliner Hinterhof-Bäckerei bis zur VRF-Klimatisierung
            eines Lausitzer Hotels.
          </p>
        </div>
      </div>

      <div className="gallery">
        {ITEMS.map((it) => (
          <figure key={it.code} className={`g-item ${it.size}`}>
            <div className="g-cover">
              <div className={`g-shape ${it.shape}`} />
            </div>
            <div className="g-meta">
              <span className="code">{it.code}</span>
              <span>{it.year}</span>
            </div>
            <figcaption className="g-caption">
              <div className="title">{it.title}</div>
              <div className="place">{it.place}</div>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
