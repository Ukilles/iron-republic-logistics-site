export default function IronRepublicLogisticsSite() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <section className="relative overflow-hidden border-b border-zinc-800">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(220,38,38,0.18),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.06),transparent_30%)]" />
        <div className="relative mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <div className="mb-4 inline-flex items-center rounded-full border border-red-700/40 bg-red-700/10 px-3 py-1 text-sm text-red-200">
                La Porte, Texas • Hot Shot Freight
              </div>
              <div className="mb-6">
                <img src="/logo.png" alt="Iron Republic Logistics Logo" className="w-40 md:w-56" />
              </div>
              <h1 className="max-w-3xl text-4xl font-black tracking-tight md:text-6xl">
                Hot Shot Freight Across Texas — Pickups Within Hours, Not Days
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-300 md:text-lg">
                Direct, no-nonsense freight hauling for urgent loads, LTL, and equipment. Based in La Porte. Running Texas hard.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="tel:+12816739502"
                  className="rounded-2xl bg-red-600 px-6 py-3 text-center font-semibold text-white shadow-lg shadow-red-950/40 transition hover:bg-red-500"
                >
                  Call Now — 281-673-9502
                </a>
                <a
                  href="#quote"
                  className="rounded-2xl border border-zinc-700 px-6 py-3 text-center font-semibold text-zinc-100 transition hover:border-zinc-500 hover:bg-zinc-900"
                >
                  Get a Fast Quote
                </a>
              </div>
              <div className="mt-4 text-sm font-medium text-red-200">
                Dispatch answers fast. No runaround. No delays.
              </div>
              <div className="mt-8 grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-3">
                <div className="rounded-2xl border border-zinc-800 bg-zinc-900/70 p-4">
                  <div className="text-sm font-semibold uppercase tracking-wide text-zinc-300">Based In</div>
                  <div className="mt-1 text-base font-bold">La Porte, TX</div>
                </div>
                <div className="rounded-2xl border border-zinc-800 bg-zinc-900/70 p-4">
                  <div className="text-sm font-semibold uppercase tracking-wide text-zinc-300">Coverage</div>
                  <div className="mt-1 text-base font-bold">Serving Texas</div>
                </div>
                <div className="rounded-2xl border border-zinc-800 bg-zinc-900/70 p-4">
                  <div className="text-sm font-semibold uppercase tracking-wide text-zinc-300">Availability</div>
                  <div className="mt-1 text-base font-bold">Same-Day Runs</div>
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] border border-zinc-800 bg-gradient-to-br from-zinc-900 to-zinc-950 p-6 shadow-2xl shadow-black/30">
              <div className="rounded-[1.5rem] border border-zinc-800 bg-zinc-950 p-6">
                <div className="mb-5 flex items-center justify-between">
                  <div>
                    <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">Quick Service Snapshot</p>
                    <h2 className="mt-2 text-2xl font-bold">Fast answers. Clear service.</h2>
                  </div>
                  <div className="h-3 w-3 rounded-full bg-red-500" />
                </div>
                <div className="space-y-4">
                  {[
                    ["Location", "La Porte, TX (Local Dispatch)"],
                    ["Coverage", "Statewide Texas Runs"],
                    ["Freight", "Hot Shot • LTL • Equipment"],
                    ["Response", "Immediate Dispatch Availability"],
                  ].map(([label, value]) => (
                    <div key={label} className="flex items-center justify-between rounded-2xl border border-zinc-800 bg-zinc-900/60 px-4 py-3">
                      <span className="text-sm text-zinc-400">{label}</span>
                      <span className="text-right font-semibold text-zinc-100">{value}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-5 rounded-2xl border border-red-900/40 bg-red-950/30 p-4 text-sm leading-6 text-red-100">
                  Built for customers who need a clean quote, a real response, and dependable delivery.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-red-300">Services</p>
            <h2 className="mt-2 text-3xl font-bold md:text-4xl">Built for speed. Backed by reliability.</h2>
          </div>
          <p className="max-w-2xl text-zinc-400">
            Fast dispatch response, direct communication, and Texas-focused lanes for customers who need a load moved without delays or excuses.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Same-Day Hot Shot",
              text: "When the load cannot wait, neither do we. Fast pickup, direct delivery, and real-time updates from dispatch to drop-off.",
            },
            {
              title: "LTL Freight",
              text: "Smaller loads, same urgency. Pallets, partials, and commercial freight moved without delays or excuses.",
            },
            {
              title: "Equipment Hauling",
              text: "Secure transport for equipment that needs to arrive intact and on schedule. No shortcuts. No surprises.",
            },
          ].map((item) => (
            <div key={item.title} className="rounded-[2rem] border border-zinc-800 bg-zinc-900/70 p-6 shadow-lg shadow-black/20">
              <h3 className="text-xl font-bold">{item.title}</h3>
              <p className="mt-3 leading-7 text-zinc-400">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-zinc-800 bg-zinc-900/40">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10">
          <div className="grid gap-6 md:grid-cols-4">
            {[
              ["Direct Communication", "No middlemen. No wasted time. Just fast answers and a clear line from dispatch to delivery."],
              ["Fast Dispatch", "Immediate response for customers who need action now, not a callback three hours later."],
              ["Texas-Focused", "Local dispatch from La Porte with statewide lanes built for reliable timing and clean handling."],
              ["Straightforward Service", "Clear quotes, direct updates, and dependable delivery without excuses or confusion."],
            ].map(([title, text]) => (
              <div key={title} className="rounded-[1.5rem] border border-zinc-800 bg-zinc-950 p-5">
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-zinc-400">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="quote" className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-red-300">Get a Fast, Straightforward Quote</p>
            <h2 className="mt-2 text-3xl font-bold md:text-4xl">Got a load that cannot sit?</h2>
            <p className="mt-4 max-w-xl leading-7 text-zinc-400">
              Call now and get it moving, or send the details below for a fast quote. No games. No inflated pricing. Just a clear number and a fast answer.
            </p>
            <div className="mt-6 space-y-3 text-zinc-300">
              <p>Phone: (281) 673-9502 — dispatch responds fast</p>
              <p>Email: ukilles@gmail.com</p>
              <p>Service Area: La Porte-based, serving all Texas lanes</p>
            </div>
          </div>

          <form action="https://formspree.io/f/xjgpkewv" method="POST" className="rounded-[2rem] border border-zinc-800 bg-zinc-900/70 p-6 shadow-xl shadow-black/20">
            <div className="grid gap-4">
              <input name="name" className="rounded-2xl border border-zinc-700 bg-zinc-950 px-4 py-3 outline-none ring-0 placeholder:text-zinc-500" placeholder="Name" />
              <input name="phone" className="rounded-2xl border border-zinc-700 bg-zinc-950 px-4 py-3 outline-none ring-0 placeholder:text-zinc-500" placeholder="Phone" />
              <input name="pickup" className="rounded-2xl border border-zinc-700 bg-zinc-950 px-4 py-3 outline-none ring-0 placeholder:text-zinc-500" placeholder="Pickup location" />
              <input name="delivery" className="rounded-2xl border border-zinc-700 bg-zinc-950 px-4 py-3 outline-none ring-0 placeholder:text-zinc-500" placeholder="Delivery location" />
              <input name="freightType" className="rounded-2xl border border-zinc-700 bg-zinc-950 px-4 py-3 outline-none ring-0 placeholder:text-zinc-500" placeholder="Freight type" />
              <textarea name="details" className="min-h-32 rounded-2xl border border-zinc-700 bg-zinc-950 px-4 py-3 outline-none ring-0 placeholder:text-zinc-500" placeholder="Load details" />
              <button type="submit" className="rounded-2xl bg-red-600 px-6 py-3 font-semibold transition hover:bg-red-500">
                Request Quote
              </button>
            </div>
          </form>
        </div>
      </section>

      <section className="border-t border-zinc-800 bg-zinc-950/90">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10">
          <div className="rounded-[2rem] border border-zinc-800 bg-zinc-900/60 p-8 text-center shadow-xl shadow-black/20">
            <p className="text-sm uppercase tracking-[0.2em] text-red-300">Final Call</p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">Texas freight does not wait — neither should you</h2>
            <p className="mx-auto mt-4 max-w-2xl leading-7 text-zinc-400">
              If timing matters, you already know what to do. Call now and get the load moving.
            </p>
            <div className="mt-8 flex justify-center">
              <a
                href="tel:+12816739502"
                className="rounded-2xl bg-red-600 px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-red-950/40 transition hover:bg-red-500"
              >
                Call 281-673-9502 Now
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-zinc-800 bg-zinc-950/90">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-8 text-sm text-zinc-500 md:flex-row md:items-center md:justify-between md:px-10">
          <p>© 2026 Iron Republic Logistics LLC. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-zinc-300">Services</a>
            <a href="#quote" className="hover:text-zinc-300">Quote</a>
            <a href="tel:+12816739502" className="hover:text-zinc-300">Call</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
