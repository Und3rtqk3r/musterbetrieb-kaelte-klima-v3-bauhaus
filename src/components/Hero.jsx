export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-grid">
        <div className="hero-left">
          <div className="hero-anno">
            <span>Anno · Cottbus</span>
            <span className="badge">№ 1 / 4</span>
          </div>

          <div className="hero-year">
            19<span className="em">27</span>
          </div>

          <div className="hero-left-foot">
            <div className="tagline">
              Gegründet als Werkstatt für <span className="y">Kühltechnik</span> —
              heute drei Generationen stark.
            </div>
            <div className="sub">drei Generationen · ein Handwerk · Cottbus &amp; Berlin</div>
          </div>
        </div>

        <div className="hero-right">
          <div className="hero-eyebrow">
            <span className="dot" />
            <span>Meisterbetrieb · seit MCMXXVII</span>
          </div>

          <h1 className="hero-title">
            <span className="line">Kälte<span className="stop" />,</span>
            <span className="line"><span className="red">Klima</span></span>
            <span className="line">und <span className="blue">Wärme</span>.</span>
          </h1>

          <p className="hero-strap">
            Anlagenbau für gewerbliche Kälte, moderne Klimatechnik und
            Wärmepumpen — gemacht für <em>Wohnen</em>, <em>Gastro</em>,
            <em>Industrie</em>. Aus Cottbus, für ganz Deutschland.
          </p>

          <div className="hero-actions">
            <a href="#kontakt" className="btn btn-primary">
              Beratung anfragen <span className="arrow">→</span>
            </a>
            <a href="#leistungen" className="link-arrow">
              Leistungen ansehen
            </a>
          </div>

          <div className="hero-foot">
            <span>Notdienst <span className="em">24 / 7</span> · 0000 / 00 00 00</span>
            <span>Lausitz · Brandenburg · DE</span>
          </div>
        </div>
      </div>
    </section>
  );
}
