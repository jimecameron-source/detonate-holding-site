import React from "react";
import "./index.css";

export default function App() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-neutral-950/85 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
          <div className="text-2xl font-black">DETONATE LABELS</div>
          <nav className="hidden gap-6 md:flex text-sm text-white/70">
            <a href="#services">Services</a>
            <a href="#overprint">Overprint</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <section className="px-6 py-24">
        <h1 className="text-6xl font-black max-w-4xl">
          Labels built for regulated cannabis workflows.
        </h1>
      </section>

      <section id="services" className="px-6 py-24 border-t border-white/10">
        <h2 className="text-4xl font-black">Services</h2>
      </section>

      <section id="overprint" className="px-6 py-24 border-t border-white/10">
        <h2 className="text-4xl font-black">Overprint</h2>
      </section>

      <section id="contact" className="px-6 py-24 border-t border-white/10">
        <h2 className="text-4xl font-black">Contact</h2>
      </section>
    </main>
  );
}
