import { useState } from "react";

export default function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="kontakt" className="section">
      <div className="section-head">
        <div className="num-block">
          <div className="num">№<span className="accent">IV</span></div>
          <div className="label">Kontakt</div>
        </div>
        <div>
          <h2>
            Sprechen wir <br />
            <span className="red">jetzt</span>.
          </h2>
          <p className="lead">
            Schreiben Sie uns — wir antworten in der Regel binnen eines
            Werktages. Bei akuten Ausfällen rufen Sie die Notdienst-Nummer.
          </p>
        </div>
      </div>

      <div className="contact">
        <aside className="contact-card">
          <div className="letterhead">
            <span>Musterbetrieb Kälte &amp; Klima GmbH</span>
            <span>USt-Id DE…</span>
          </div>
          <ul>
            <li>
              <strong>Werkstatt</strong>
              <span className="value">Musterstraße 1, 12345 Musterstadt</span>
            </li>
            <li>
              <strong>Telefon</strong>
              <a href="tel:+49 000 000000">0000 / 00 00 00</a>
            </li>
            <li>
              <strong>Notdienst 24/7</strong>
              <a href="tel:+49 000 000001">0000 / 00 00 01</a>
            </li>
            <li>
              <strong>E-Post</strong>
              <a href="mailto:info@musterbetrieb-kaelte-klima.example">info@musterbetrieb-kaelte-klima.example</a>
            </li>
            <li>
              <strong>Öffnungszeit</strong>
              <span className="value">Mo – Fr · 7 – 17 Uhr</span>
            </li>
          </ul>
        </aside>

        <form
          className="contact-form"
          onSubmit={(e) => { e.preventDefault(); setSent(true); }}
        >
          <div className="form-label">
            Anfrage stellen
          </div>

          <div className="form-row">
            <label>
              <span>Name</span>
              <input type="text" required placeholder="Ihr vollständiger Name" />
            </label>
            <label>
              <span>E-Post</span>
              <input type="email" required placeholder="ihre@adresse.de" />
            </label>
          </div>

          <div className="form-row full">
            <label>
              <span>Beschreibung</span>
              <textarea rows="4" required placeholder="Kurze Beschreibung Ihres Anliegens." />
            </label>
          </div>

          {sent ? (
            <p className="form-success">
              ✓ Vielen Dank — wir melden uns binnen eines Werktages.
            </p>
          ) : (
            <div className="actions">
              <span className="note">Antwort &lt; 24h · vertraulich</span>
              <button type="submit" className="btn btn-primary">
                Absenden <span className="arrow">→</span>
              </button>
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
