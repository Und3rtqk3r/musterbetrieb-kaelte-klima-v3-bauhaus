export default function Profile() {
  return (
    <section id="profil" className="section">
      <div className="section-head">
        <div className="num-block">
          <div className="num">№<span className="accent">II</span></div>
          <div className="label">Profil</div>
        </div>
        <div>
          <h2>
            Werkbund-<br />
            <span className="red">Handwerk</span>.
          </h2>
          <p className="lead">
            Drei Generationen Familienbetrieb. Was im Jahr 1927 als
            kleine Werkstatt in Cottbus begann, ist heute ein
            Meisterbetrieb mit Standorten in Cottbus und Berlin.
          </p>
        </div>
      </div>

      <div className="profile">
        <div className="profile-text">
          <p>
            <span className="em">1927</span> gegründet — als kleine
            Werkstatt für Kühlanlagen in einer Lausitzer Werkstattgasse.
          </p>
          <p>
            <span className="em">III. Generation</span> — heute geführt
            von den Enkeln des Gründers. Acht Mitarbeiter, zwei Meister,
            ein Lehrling.
          </p>
          <p>
            Was uns blieb: die Überzeugung, dass gutes Handwerk Zeit
            braucht — und sich auszahlt. Was kam: neue Technik,
            neue Normen, eine Filiale in Berlin-Schöneberg.
          </p>
        </div>

        <figure className="profile-quote">
          <q>
            Ehrlich, pünktlich, sauber gearbeitet — so soll Handwerk sein,
            und so machen wir es seit drei Generationen.
          </q>
          <div className="author">
            <span>M. KRÜGER · BAUHERR · COTTBUS</span>
            <span className="star">★★★★★</span>
          </div>
        </figure>
      </div>

      <div className="profile-stats">
        <div>
          <div className="pstat-n">98<span className="u">+</span></div>
          <div className="pstat-l">Jahre</div>
        </div>
        <div>
          <div className="pstat-n">III</div>
          <div className="pstat-l">Generationen</div>
        </div>
        <div>
          <div className="pstat-n">500<span className="u">/a</span></div>
          <div className="pstat-l">Projekte / Jahr</div>
        </div>
        <div>
          <div className="pstat-n">4,9<span className="u">★</span></div>
          <div className="pstat-l">Bewertung</div>
        </div>
      </div>
    </section>
  );
}
