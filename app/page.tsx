export default function HomePage() {
  return (
    <main className="page-shell">
      <section className="hero">
        <div className="hero-copy">
          <div className="eyebrow">La Porte, Texas • Hot Shot Freight</div>
          <img src="/logo.png" alt="Iron Republic Logistics logo" className="logo" />
          <h1>Reliable hot shot freight across Texas.</h1>
          <p className="lead">
            Iron Republic Logistics provides direct, responsive service for urgent deliveries,
            light freight, pallets, and regional Texas lanes.
          </p>
          <div className="button-row">
            <a className="button button-primary" href="#quote">Request a Quote</a>
            <a className="button button-secondary" href="tel:+12816739502">Call 281-673-9502</a>
          </div>
        </div>

        <div className="hero-card">
          <h2>Quick Service Snapshot</h2>
          <div className="stat-list">
            <div className="stat-row"><span>Based In</span><strong>La Porte, TX</strong></div>
            <div className="stat-row"><span>Service Area</span><strong>Serving Texas</strong></div>
            <div className="stat-row"><span>Freight</span><strong>Pallets • LTL • Equipment</strong></div>
            <div className="stat-row"><span>Contact</span><strong>Fast, direct communication</strong></div>
          </div>
          <p className="card-note">
            Built for customers who need a clean quote, a real response, and dependable delivery.
          </p>
        </div>
      </section>

      <section className="section-grid">
        <article className="info-card">
          <h3>Same-Day Delivery</h3>
          <p>Urgent freight moves for customers who need a quick pickup and straightforward updates.</p>
        </article>
        <article className="info-card">
          <h3>LTL Freight</h3>
          <p>Light freight, pallets, and smaller commercial loads that need direct handling.</p>
        </article>
        <article className="info-card">
          <h3>Texas Regional Lanes</h3>
          <p>La Porte based, serving Texas with local and regional runs across dependable lanes.</p>
        </article>
      </section>

      <section className="contact-band">
        <div>
          <h2>Simple contact. Fast response.</h2>
          <p>Phone, email, and quote request all in one place so customers know exactly how to reach you.</p>
        </div>
        <div className="contact-list">
          <a href="tel:+12816739502">281-673-9502</a>
          <a href="mailto:ukilles@gmail.com">ukilles@gmail.com</a>
          <span>La Porte based, serving Texas</span>
        </div>
      </section>

      <section id="quote" className="quote-section">
        <div className="quote-copy">
          <div className="eyebrow">Request a Quote</div>
          <h2>Make it easy for people to hire you.</h2>
          <p>
            This form is ready for Formspree. Once you replace the placeholder form ID, quote requests
            will go to your email.
          </p>
        </div>

        <form className="quote-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
          <input name="pickup" type="text" placeholder="Pickup location" />
          <input name="delivery" type="text" placeholder="Delivery location" />
          <div className="two-col">
            <input name="weight" type="text" placeholder="Weight" />
            <input name="freightType" type="text" placeholder="Freight type" />
          </div>
          <div className="two-col">
            <input name="customerName" type="text" placeholder="Your name" />
            <input name="contactInfo" type="text" placeholder="Phone or email" />
          </div>
          <textarea name="jobDetails" placeholder="Job details" rows={6} />
          <button type="submit" className="button button-primary">Send Quote Request</button>
        </form>
      </section>
    </main>
  );
}

