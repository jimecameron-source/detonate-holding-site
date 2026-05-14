import React from "react";

const CONTACT_EMAIL = "info@detonatelabels.com";
const CONTACT_PHONE = "(416) 477-7158";
const ADDRESS = "77 Steelcase Road West, Unit 6 Markham, ON, L3R 2S5";
const PORTAL_URL = "#";
const BRAND_GREEN = "#B8CC92";
const LOGO_SRC = "inline-svg-logo";

const operationalItems = [
  ["Batch & lot changes", "Variable production details handled without slowing your launch."],
  ["Regulatory awareness", "A team familiar with the realities of Canadian cannabis packaging."],
  ["Overprint workflows", "Reduce obsolete inventory and adapt quickly to changing data."],
  ["Portal-ready", "Customer ordering and template workflows are being built into the next phase."],
];

const services = [
  {
    icon: "layers",
    title: "Digital Labels",
    body: "Short and medium-run pressure-sensitive labels for regulated cannabis packaging.",
  },
  {
    icon: "refresh",
    title: "Variable Data",
    body: "Support for changing potency values, lots, batches, barcodes, and SKU-specific details.",
  },
  {
    icon: "shield",
    title: "Compliance Support",
    body: "Practical label-production experience for highly regulated cannabis packaging environments.",
  },
];

function runSmokeTests() {
  console.assert(CONTACT_EMAIL.includes("@"), "CONTACT_EMAIL should be valid.");
  console.assert(services.length === 3, "Should contain three services.");
  console.assert(operationalItems.length >= 4, "Should contain operational items.");
  console.assert(LOGO_SRC.length > 0, "Logo source should exist.");
  console.assert(BRAND_GREEN === "#B8CC92", "Brand green should remain stable.");
}

runSmokeTests();

export default function DetonateLabelsHoldingSite() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white antialiased">
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(244,63,94,0.22),transparent_38%),radial-gradient(circle_at_bottom_left,rgba(250,204,21,0.12),transparent_35%)]" />

        <div className="relative mx-auto flex max-w-7xl flex-col px-6 py-6 lg:px-8">
          <header className="flex items-center justify-between gap-6">
            <a href="#" className="group inline-flex items-center" aria-label="Detonate Labels home">
              <Logo />
            </a>

            <nav className="hidden items-center gap-8 text-sm text-white/70 md:flex">
              <a href="#services" className="hover:text-white">Services</a>
              <a href="#overprint" className="hover:text-white">Overprint</a>
              <a href="#contact" className="hover:text-white">Contact</a>

              <a
                href={PORTAL_URL}
                className="rounded-full border border-white/15 px-4 py-2 text-white hover:bg-white hover:text-neutral-950"
              >
                Customer Portal
              </a>
            </nav>
          </header>

          <div className="grid items-center gap-12 py-24 lg:grid-cols-[1.15fr_0.85fr] lg:py-32">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/75 backdrop-blur">
                <Icon name="shield" size={16} />
                Cannabis label specialists since the beginning
              </div>

              <h1 className="max-w-5xl text-5xl font-black leading-[0.95] tracking-tight md:text-7xl">
                Labels built for regulated cannabis workflows.
              </h1>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-white/70 md:text-xl">
                Detonate Labels provides digital label production, variable data handling,
                compliance-aware support, and our pioneering Overprint as a Service model
                for licensed cannabis producers.
              </p>

              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-neutral-950 transition hover:bg-white/90"
                >
                  Request a quote <Icon name="arrow" size={18} />
                </a>
                <a
                  href="#overprint"
                  className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
                >
                  Learn about Overprint
                </a>
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-5 shadow-2xl shadow-black/40 backdrop-blur">
              <div className="rounded-[1.5rem] bg-neutral-900 p-6">
                <div className="mb-6 flex items-center justify-between border-b border-white/10 pb-5">
                  <div>
                    <p className="text-sm uppercase tracking-[0.24em] text-white/40">Operational focus</p>
                    <p className="mt-2 text-2xl font-bold">Simple labels. Complex workflows.</p>
                  </div>
                  <div className="text-rose-300"><Icon name="lock" size={28} /></div>
                </div>

                <div className="space-y-4">
                  {operationalItems.map(([title, body]) => (
                    <div key={title} className="rounded-2xl border border-white/10 bg-white/[0.035] p-4">
                      <p className="font-semibold">{title}</p>
                      <p className="mt-1 text-sm leading-6 text-white/60">{body}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-rose-300">What we do</p>
          <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">Digital label production for regulated products.</h2>
          <p className="mt-5 text-lg leading-8 text-white/65">
            We focus on the label requirements that matter most to licensed producers: speed, accuracy,
            repeatability, compliance support, and the ability to manage frequent changes without disrupting production.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.title} iconName={service.icon} title={service.title} body={service.body} />
          ))}
        </div>
      </section>

      <section id="overprint" className="border-y border-white/10 bg-white/[0.035]">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-rose-300">Overprint as a Service</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">A service model built for cannabis realities.</h2>
          </div>

          <div className="text-lg leading-8 text-white/70">
            <p>
              Cannabis labels are often visually simple, but operationally demanding. Product data changes,
              regulatory requirements evolve, and finished-goods timelines move quickly. Overprint as a Service
              helps producers keep pre-printed label inventory flexible while applying changing information when it is actually needed.
            </p>
            <p className="mt-6">
              The result: less waste, faster changes, better SKU agility, and a label workflow that matches how regulated cannabis production actually works.
            </p>
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-10 rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 md:grid-cols-[1fr_0.9fr] md:p-12">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-rose-300">Now accepting new inquiries</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight">Need labels or overprint support?</h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/65">
              Our full website and customer ordering portal are being rebuilt. In the meantime, existing and new customers can reach us directly.
            </p>
          </div>

          <div className="space-y-4 rounded-[1.5rem] bg-neutral-900 p-6">
            <ContactLine iconName="mail" label="Email" value={CONTACT_EMAIL} href={`mailto:${CONTACT_EMAIL}`} />
            <ContactLine iconName="phone" label="Phone" value={CONTACT_PHONE} href="tel:+14164777158" />
            <ContactLine iconName="pin" label="Location" value={ADDRESS} />

            <a
              href={PORTAL_URL}
              className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/15 px-5 py-3 font-semibold text-white hover:bg-white hover:text-neutral-950"
            >
              Customer Portal <Icon name="arrow" size={18} />
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-white/45">
        © {new Date().getFullYear()} Detonate Labels · 77 Steelcase Road West, Unit 6 · Markham, ON · Digital label production for regulated cannabis workflows.
      </footer>
    </main>
  );
}

function Logo() {
  return (
    <svg aria-label="Detonate Labels" role="img" className="h-16 w-auto md:h-[4.7rem]" viewBox="0 0 245.93 65.42">
      <path fill="#bdcf9b" d="M32.35,32.26h0C32.3,14.43,17.84,0,0,0v8.89h0c.04,14.33,9.4,26.46,22.33,30.67-3.04,9.43-11.89,16.26-22.33,16.26v8.89c14.83,0,27.33-9.98,31.15-23.59.4.01.8.02,1.2.02s.8-.01,1.2-.02c3.82,13.61,16.32,23.59,31.15,23.59v-8.89c-10.44,0-19.29-6.83-22.33-16.26,12.93-4.21,22.29-16.35,22.33-30.67h0V0C46.87,0,32.41,14.43,32.35,32.26ZM8.97,10.67c7.96,3.3,13.71,10.84,14.42,19.81-7.96-3.3-13.71-10.84-14.42-19.81ZM41.32,30.48c.71-8.97,6.46-16.52,14.42-19.81-.71,8.97-6.46,16.52-14.42,19.81Z" />
      <g fill="#ffffff">
        <path d="M73.49,18.98v-.08c0-7.34,4.8-11.36,10-11.36,3.32,0,5.37,1.52,6.85,3.28V0h6.23v29.93h-6.23v-3.16c-1.52,2.05-3.61,3.57-6.85,3.57-5.13,0-10-4.02-10-11.36ZM90.42,18.98v-.08c0-3.65-2.42-6.07-5.33-6.07s-5.37,2.38-5.37,6.07v.08c0,3.65,2.46,6.07,5.37,6.07s5.33-2.42,5.33-6.07Z" />
        <path d="M99.44,19.06v-.08c0-6.27,4.47-11.44,10.87-11.44,7.34,0,10.7,5.7,10.7,11.93,0,.49-.04,1.07-.08,1.64h-15.29c.62,2.83,2.58,4.3,5.37,4.3,2.09,0,3.61-.66,5.33-2.25l3.57,3.16c-2.05,2.54-5,4.1-8.98,4.1-6.6,0-11.48-4.63-11.48-11.36ZM114.94,17.22c-.37-2.79-2.01-4.67-4.63-4.67s-4.26,1.85-4.76,4.67h9.39Z" />
        <path d="M125.02,23.7v-10.41h-2.62v-5.33h2.62V2.34h6.23v5.62h5.17v5.33h-5.17v9.39c0,1.43.62,2.13,2.01,2.13,1.15,0,2.17-.29,3.08-.78v5c-1.31.78-2.83,1.27-4.92,1.27-3.81,0-6.4-1.52-6.4-6.6Z" />
        <path d="M137.69,19.06v-.08c0-6.31,5.08-11.44,11.93-11.44s11.85,5.04,11.85,11.36v.08c0,6.31-5.08,11.44-11.93,11.44s-11.85-5.04-11.85-11.36ZM155.32,19.06v-.08c0-3.24-2.34-6.07-5.78-6.07s-5.7,2.75-5.7,5.99v.08c0,3.24,2.34,6.07,5.78,6.07s5.7-2.75,5.7-5.99Z" />
        <path d="M164.34,7.95h6.23v3.12c1.43-1.84,3.28-3.53,6.44-3.53,4.71,0,7.46,3.12,7.46,8.16v14.23h-6.23v-12.26c0-2.95-1.39-4.47-3.77-4.47s-3.89,1.52-3.89,4.47v12.26h-6.23V7.95Z" />
        <path d="M186.93,23.62v-.08c0-4.8,3.65-7.01,8.86-7.01,2.21,0,3.81.37,5.37.9v-.37c0-2.58-1.6-4.02-4.71-4.02-2.38,0-4.06.45-6.07,1.19l-1.56-4.76c2.42-1.07,4.8-1.76,8.53-1.76,3.4,0,5.86.9,7.42,2.46,1.64,1.64,2.38,4.06,2.38,7.01v12.75h-6.03v-2.38c-1.52,1.68-3.61,2.79-6.64,2.79-4.14,0-7.54-2.38-7.54-6.72ZM201.24,22.18v-1.11c-1.07-.49-2.46-.82-3.98-.82-2.66,0-4.3,1.07-4.3,3.03v.08c0,1.68,1.39,2.67,3.4,2.67,2.91,0,4.88-1.6,4.88-3.85Z" />
        <path d="M211.7,23.7v-10.41h-2.62v-5.33h2.62V2.34h6.23v5.62h5.17v5.33h-5.17v9.39c0,1.43.62,2.13,2.01,2.13,1.15,0,2.17-.29,3.08-.78v5c-1.31.78-2.83,1.27-4.92,1.27-3.81,0-6.4-1.52-6.4-6.6Z" />
        <path d="M224.36,19.06v-.08c0-6.27,4.47-11.44,10.87-11.44,7.34,0,10.7,5.7,10.7,11.93,0,.49-.04,1.07-.08,1.64h-15.29c.62,2.83,2.58,4.3,5.37,4.3,2.09,0,3.61-.66,5.33-2.25l3.57,3.16c-2.05,2.54-5,4.1-8.98,4.1-6.6,0-11.48-4.63-11.48-11.36ZM239.86,17.22c-.37-2.79-2.01-4.67-4.63-4.67s-4.26,1.85-4.76,4.67h9.39Z" />
        <path d="M74.76,35h6.23v29.93h-6.23v-29.93Z" />
        <path d="M83.9,58.62v-.08c0-4.8,3.65-7.01,8.86-7.01,2.21,0,3.81.37,5.37.9v-.37c0-2.58-1.6-4.02-4.71-4.02-2.38,0-4.06.45-6.07,1.19l-1.56-4.76c2.42-1.07,4.8-1.76,8.53-1.76,3.4,0,5.86.9,7.42,2.46,1.64,1.64,2.38,4.06,2.38,7.01v12.75h-6.03v-2.38c-1.52,1.68-3.61,2.79-6.64,2.79-4.14,0-7.54-2.38-7.54-6.72ZM98.21,57.18v-1.11c-1.07-.49-2.46-.82-3.98-.82-2.67,0-4.31,1.07-4.31,3.03v.08c0,1.68,1.39,2.67,3.4,2.67,2.91,0,4.88-1.6,4.88-3.85Z" />
        <path d="M114.08,62.06v2.87h-6.23v-29.93h6.23v11.11c1.52-2.05,3.61-3.57,6.85-3.57,5.12,0,10,4.02,10,11.36v.08c0,7.34-4.8,11.36-10,11.36-3.32,0-5.37-1.52-6.85-3.28ZM124.7,53.98v-.08c0-3.65-2.46-6.07-5.37-6.07s-5.33,2.42-5.33,6.07v.08c0,3.65,2.42,6.07,5.33,6.07s5.37-2.38,5.37-6.07Z" />
        <path d="M132.81,54.06v-.08c0-6.27,4.47-11.44,10.87-11.44,7.34,0,10.7,5.7,10.7,11.93,0,.49-.04,1.07-.08,1.64h-15.29c.62,2.83,2.58,4.3,5.37,4.3,2.09,0,3.61-.66,5.33-2.25l3.57,3.16c-2.05,2.54-5,4.1-8.98,4.1-6.6,0-11.48-4.63-11.48-11.36ZM148.31,52.22c-.37-2.79-2.01-4.67-4.63-4.67s-4.26,1.85-4.76,4.67h9.39Z" />
        <path d="M157.66,35h6.23v29.93h-6.23v-29.93Z" />
        <path d="M166.39,62.02l2.67-4.1c2.38,1.72,4.88,2.62,6.93,2.62,1.8,0,2.62-.66,2.62-1.64v-.08c0-1.35-2.13-1.8-4.55-2.54-3.08-.9-6.56-2.34-6.56-6.6v-.08c0-4.47,3.61-6.97,8.04-6.97,2.79,0,5.82.94,8.2,2.54l-2.38,4.31c-2.17-1.27-4.35-2.05-5.95-2.05-1.52,0-2.3.66-2.3,1.52v.08c0,1.23,2.09,1.8,4.47,2.62,3.08,1.02,6.64,2.5,6.64,6.52v.08c0,4.88-3.65,7.09-8.41,7.09-3.08,0-6.52-1.03-9.43-3.32Z" />
      </g>
    </svg>
  );
}

function ServiceCard({ iconName, title, body }) {
  return (
    <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.035] p-6">
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-neutral-950">
        <Icon name={iconName} size={22} />
      </div>
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="mt-3 leading-7 text-white/60">{body}</p>
    </div>
  );
}

function ContactLine({ iconName, label, value, href }) {
  const content = (
    <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.035] p-4">
      <div className="text-rose-300"><Icon name={iconName} size={20} /></div>
      <div>
        <p className="text-xs uppercase tracking-[0.24em] text-white/35">{label}</p>
        <p className="mt-1 font-semibold text-white">{value}</p>
      </div>
    </div>
  );

  return href ? <a href={href}>{content}</a> : content;
}

function Icon({ name, size = 24 }) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": true,
  };

  const paths = {
    arrow: <><path d="M5 12h14" /><path d="m13 6 6 6-6 6" /></>,
    shield: <><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" /><path d="m9 12 2 2 4-5" /></>,
    layers: <><path d="m12 2 9 5-9 5-9-5 9-5Z" /><path d="m3 12 9 5 9-5" /><path d="m3 17 9 5 9-5" /></>,
    refresh: <><path d="M21 12a9 9 0 0 1-15 6.7" /><path d="M3 12a9 9 0 0 1 15-6.7" /><path d="M3 17v5h5" /><path d="M21 7V2h-5" /></>,
    mail: <><path d="M4 4h16v16H4z" /><path d="m22 6-10 7L2 6" /></>,
    phone: <><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.7.6 2.5a2 2 0 0 1-.5 2.1L8 9.5a16 16 0 0 0 6.5 6.5l1.2-1.2a2 2 0 0 1 2.1-.5c.8.3,1.6.5,2.5.6a2 2 0 0 1 1.7 2Z" /></>,
    pin: <><path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="3" /></>,
    lock: <><rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></>,
    spark: <><path d="m12 2 1.8 6.2L20 10l-6.2 1.8L12 18l-1.8-6.2L4 10l6.2-1.8L12 2Z" /><path d="M19 16v4" /><path d="M21 18h-4" /></>,
  };

  return <svg {...common}>{paths[name] || paths.spark}</svg>;
}
