export default function Page() {
  return (
    <main className="site">
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-left">
            <img
              src="/logo.png"
              alt="Iron Republic Logistics Logo"
              className="logo"
            />

            <h1>Hot Shot Freight Across Texas — Pickups Within Hours, Not Days</h1>

            <p className="hero-copy">
              Direct, no-nonsense freight hauling for urgent small freight,
              boxes, and pallet loads within safe weight limits. Based in La
              Porte. Running Texas hard.
            </p>

            <div className="hero-buttons">
              <a className="btn btn-primary" href="tel:+12816739502">
                Call Now — 281-673-9502
              </a>
              <a className="btn btn-secondary" href="#quote">
                Get a Fast Quote
              </a>
            </div>

            <p className="dispatch-line">
              Dispatch answers fast. No runaround. No delays.
            </p>

            <div className="stat-grid">
              <div className="stat-card">
                <span className="stat-label">Based In</span>
                <strong>La Porte, TX</strong>
              </div>
              <div className="stat-card">
                <span className="stat-label">Coverage</span>
                <strong>Serving Texas</strong>
              </div>
              <div className="stat-card">
                <span className="stat-label">Availability</span>
                <strong>Same-Day Runs</strong>
              </div>
            </div>
          </div>

          <div className="snapshot-card">
            <div className="snapshot-header">
              <div>
                <p className="snapshot-eyebrow">Quick Service Snapshot</p>
                <h2>Fast answers. Clear service.</h2>
              </div>
              <span className="snapshot-dot" />
            </div>

            <div className="snapshot-list">
              <div className="snapshot-row">
                <span>Location</span>
                <strong>La Porte, TX (Local Dispatch)</strong>
              </div>
              <div className="snapshot-row">
                <span>Coverage</span>
                <strong>Statewide Texas Runs</strong>
              </div>
              <div className="snapshot-row">
                <span>Freight</span>
                <strong>Boxes • Small Freight • Pallets</strong>
              </div>
              <div className="snapshot-row">
                <span>Load Limits</span>
                <strong>Up to about 2,500 lbs</strong>
              </div>
            </div>

            <div className="snapshot-note">
              Built for customers who need a clean quote, a real response, and
              dependable delivery within safe size and weight limits.
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <p className="section-eyebrow">Services</p>
              <h2>Built for speed. Backed by reliability.</h2>
            </div>
            <p className="section-copy">
              Fast dispatch response, direct communication, and Texas-focused
              lanes for customers who need a load moved without delays or
              excuses.
            </p>
          </div>

          <div className="card-grid three">
            <div className="card">
              <h3>Urgent Small Freight</h3>
              <p>
                Fast pickup and direct delivery for smaller time-sensitive loads
                that need to move without delays.
              </p>
            </div>
            <div className="card">
              <h3>Boxes &amp; Cartons</h3>
              <p>
                Clean, straightforward transport for boxed freight, packaged
                goods, and smaller commercial shipments.
              </p>
            </div>
            <div className="card">
              <h3>Pallet Loads Up to 2,500 lbs</h3>
              <p>
                Single pallets and limited light freight moved securely and on
                schedule within safe weight limits.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="card-grid four">
            <div className="mini-card">
              <h3>Direct Communication</h3>
              <p>
                No middlemen. No wasted time. Just clear answers from pickup to
                drop-off.
              </p>
            </div>
            <div className="mini-card">
              <h3>Fast Dispatch</h3>
              <p>
                Quick response for customers who need an answer now, not hours
                later.
              </p>
            </div>
            <div className="mini-card">
              <h3>Texas Local &amp; Regional</h3>
              <p>
                Based in La Porte with dependable local and regional Texas
                lanes.
              </p>
            </div>
            <div className="mini-card">
              <h3>Clear Load Limits</h3>
              <p>
                Best for boxes, light freight, and pallet loads within safe size
                and weight limits.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="quote" className="section">
        <div className="container quote-grid">
          <div>
            <p className="section-eyebrow">Get a Fast, Straightforward Quote</p>
            <h2>Got a load that cannot sit?</h2>
            <p className="section-copy left">
              Call now and get it moving, or send the details below for a fast
              quote. No games. No inflated pricing. Just a clear number and a
              fast answer.
            </p>

            <div className="contact-list">
              <p>Phone: (281) 673-9502 — dispatch responds fast</p>
              <p>Email: ukilles@gmail.com</p>
              <p>
                Service Area: La Porte-based, serving local and regional Texas
                lanes
              </p>
              <p>Best for boxes, small freight, and pallet loads up to 2,500 lbs</p>
            </div>
          </div>

          <form
            action="https://formspree.io/f/YOUR_FORM_ID"
            method="POST"
            className="quote-form"
          >
            <input name="name" placeholder="Name" />
            <input name="phone" placeholder="Phone" />
            <input name="pickup" placeholder="Pickup location" />
            <input name="delivery" placeholder="Delivery location" />
            <input name="freightType" placeholder="Freight type" />
            <textarea name="details" placeholder="Load details" />
            <button type="submit" className="btn btn-primary full">
              Request Quote
            </button>
          </form>
        </div>
      </section>

      <section className="section final-section">
        <div className="container">
          <div className="final-card">
            <p className="section-eyebrow">Final Call</p>
            <h2>Texas freight does not wait — neither should you</h2>
            <p className="final-copy">
              If timing matters, you already know what to do. Call now and get
              the load moving.
            </p>
            <a className="btn btn-primary final-btn" href="tel:+12816739502">
              Call 281-673-9502 Now
            </a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-row">
          <p>© 2026 Iron Republic Logistics LLC. All rights reserved.</p>
          <div className="footer-links">
            <a href="#quote">Quote</a>
            <a href="tel:+12816739502">Call</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
