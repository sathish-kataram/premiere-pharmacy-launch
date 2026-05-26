import { createFileRoute } from "@tanstack/react-router";
import * as React from "react";
import {
  Phone, Mail, ArrowRight, Play, MapPin, Facebook, Instagram, Linkedin, Youtube,
  GraduationCap, Microscope, Hospital, Briefcase, BookOpen, Users, FlaskConical,
  Award, ShieldCheck, Sparkles, Building2, Calendar, ChevronRight, Star, Menu, X,
  Beaker, Lightbulb, FileText, Globe2, Quote,
} from "lucide-react";
import heroCampus from "@/assets/hero-campus.jpg";
import aboutCampus from "@/assets/about-campus.jpg";
import researchLab from "@/assets/research-lab.jpg";
import campusLibrary from "@/assets/campus-library.jpg";
import campusSeminar from "@/assets/campus-seminar.jpg";
import campusClassroom from "@/assets/campus-classroom.jpg";
import student1 from "@/assets/student-1.jpg";
import student2 from "@/assets/student-2.jpg";
import chairmanImg from "@/assets/chairman.jpg";
import secretaryImg from "@/assets/secretary.jpg";
import life1 from "@/assets/life-1.jpg";
import life2 from "@/assets/life-2.jpg";
import life3 from "@/assets/life-3.jpg";
import life4 from "@/assets/life-4.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

/* ---------- Animated counter ---------- */
function useCounter(target: number, durationMs = 1600, start = false) {
  const [val, setVal] = React.useState(0);
  React.useEffect(() => {
    if (!start) return;
    let raf = 0;
    const t0 = performance.now();
    const tick = (t: number) => {
      const p = Math.min(1, (t - t0) / durationMs);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(Math.round(target * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, durationMs, start]);
  return val;
}

function useInView<T extends HTMLElement>() {
  const ref = React.useRef<T | null>(null);
  const [inView, setInView] = React.useState(false);
  React.useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver(
      ([e]) => e.isIntersecting && setInView(true),
      { threshold: 0.25 },
    );
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);
  return { ref, inView };
}

function Counter({ to, suffix = "", prefix = "" }: { to: number; suffix?: string; prefix?: string }) {
  const { ref, inView } = useInView<HTMLSpanElement>();
  const v = useCounter(to, 1800, inView);
  return <span ref={ref}>{prefix}{v.toLocaleString()}{suffix}</span>;
}

/* ---------- Reveal on scroll ---------- */
function Reveal({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const { ref, inView } = useInView<HTMLDivElement>();
  return (
    <div ref={ref} className={`reveal ${inView ? "in" : ""} ${className}`} style={{ animationDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

/* ---------- Top bar ---------- */
function TopBar() {
  return (
    <div className="hidden md:block bg-[var(--navy-deep)] text-white text-[13px]">
      <div className="mx-auto max-w-7xl px-6 h-10 flex items-center justify-between">
        <div className="flex items-center gap-5">
          <span className="flex items-center gap-1.5"><Sparkles className="h-3.5 w-3.5 text-[var(--gold)]" /> Admissions Open <span className="text-[var(--gold)] font-semibold">2026</span></span>
          <span className="h-3 w-px bg-white/20" />
          <a href="tel:+919876543210" className="flex items-center gap-1.5 hover:text-[var(--gold)] transition-colors"><Phone className="h-3.5 w-3.5" /> +91 98765 43210</a>
          <a href="mailto:admissions@vjpharmacy.edu.in" className="flex items-center gap-1.5 hover:text-[var(--gold)] transition-colors"><Mail className="h-3.5 w-3.5" /> admissions@vjpharmacy.edu.in</a>
        </div>
        <div className="flex items-center gap-3">
          <a href="#" className="opacity-80 hover:opacity-100"><Facebook className="h-3.5 w-3.5" /></a>
          <a href="#" className="opacity-80 hover:opacity-100"><Instagram className="h-3.5 w-3.5" /></a>
          <a href="#" className="opacity-80 hover:opacity-100"><Linkedin className="h-3.5 w-3.5" /></a>
          <a href="#admission" className="ml-2 inline-flex items-center gap-1 bg-[var(--gold)] text-[var(--navy-deep)] px-3 py-1 rounded-full font-button font-semibold text-xs hover:brightness-110 transition">
            Apply Now <ArrowRight className="h-3 w-3" />
          </a>
        </div>
      </div>
    </div>
  );
}

/* ---------- Nav ---------- */
function Nav() {
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const items = ["Home", "About", "Programs", "Infrastructure", "Research", "Placements", "Admissions", "Contact"];
  return (
    <header className={`fixed top-0 md:top-10 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-white/95 backdrop-blur-xl shadow-[0_4px_30px_-10px_rgba(10,37,64,0.15)]" : "bg-transparent"}`}>
      <div className="mx-auto max-w-7xl px-6 h-20 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <div className={`h-11 w-11 rounded-xl grid place-items-center font-display font-black text-lg shadow-premium ${scrolled ? "bg-[var(--navy)] text-[var(--gold)]" : "bg-white/15 text-white backdrop-blur-md border border-white/30"}`}>VJ</div>
          <div className="leading-tight">
            <div className={`font-display font-bold text-[15px] ${scrolled ? "text-[var(--navy)]" : "text-white"}`}>VJ's College of Pharmacy</div>
            <div className={`text-[11px] tracking-[0.18em] uppercase ${scrolled ? "text-[var(--muted-ink)]" : "text-white/70"}`}>Excellence · Research · Care</div>
          </div>
        </a>
        <nav className="hidden lg:flex items-center gap-1">
          {items.map((it) => (
            <a key={it} href={`#${it.toLowerCase()}`} className={`relative px-3 py-2 text-[13.5px] font-medium transition-colors group ${scrolled ? "text-[var(--ink)] hover:text-[var(--navy)]" : "text-white/90 hover:text-white"}`}>
              {it}
              <span className="absolute left-3 right-3 -bottom-0.5 h-0.5 bg-[var(--gold)] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a href="#admission" className="hidden md:inline-flex font-button font-semibold text-sm px-5 py-2.5 rounded-full bg-[var(--gold)] text-[var(--navy-deep)] hover:shadow-gold-glow transition-all duration-300 hover:-translate-y-0.5">
            Apply Now
          </a>
          <button onClick={() => setOpen(true)} className={`lg:hidden p-2 rounded-md ${scrolled ? "text-[var(--navy)]" : "text-white"}`} aria-label="Open menu">
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div className={`fixed inset-0 z-[60] lg:hidden transition-all duration-500 ${open ? "visible opacity-100" : "invisible opacity-0"}`}>
        <div className="absolute inset-0 bg-[var(--navy-deep)]" onClick={() => setOpen(false)} />
        <div className={`absolute inset-y-0 right-0 w-full max-w-sm bg-[var(--navy)] text-white p-8 transition-transform duration-500 ${open ? "translate-x-0" : "translate-x-full"}`}>
          <div className="flex items-center justify-between mb-10">
            <div className="font-display font-bold">Menu</div>
            <button onClick={() => setOpen(false)} className="p-2"><X className="h-6 w-6" /></button>
          </div>
          <nav className="flex flex-col gap-1">
            {items.map((it, i) => (
              <a key={it} href={`#${it.toLowerCase()}`} onClick={() => setOpen(false)} className="group flex items-center justify-between py-4 border-b border-white/10 text-lg font-display" style={{ transitionDelay: `${i * 40}ms` }}>
                <span className="group-hover:text-[var(--gold)] transition-colors">{it}</span>
                <ChevronRight className="h-4 w-4 opacity-50 group-hover:text-[var(--gold)] group-hover:translate-x-1 transition" />
              </a>
            ))}
          </nav>
          <a href="#admission" onClick={() => setOpen(false)} className="mt-10 inline-flex w-full justify-center items-center gap-2 bg-[var(--gold)] text-[var(--navy-deep)] font-button font-semibold py-4 rounded-full">
            Apply Now <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </header>
  );
}

/* ---------- Hero ---------- */
function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroCampus} alt="VJ's College of Pharmacy campus" className="h-full w-full object-cover animate-slow-zoom" width={1920} height={1280} />
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--navy-deep)]/85 via-[var(--navy-deep)]/55 to-[var(--navy-deep)]/85" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(212,175,55,0.18),transparent_55%)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-32 pb-16 grid lg:grid-cols-12 gap-10 items-center w-full">
        <Reveal className="lg:col-span-7 text-white">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs font-medium tracking-wider uppercase">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--gold)] animate-pulse" /> PCI Approved · Estd. 2007
          </div>
          <h1 className="font-display font-black mt-6 text-[44px] sm:text-6xl lg:text-7xl leading-[1.02] tracking-tight">
            Building Future <span className="text-gradient-gold">Healthcare Leaders</span> Through Excellence
          </h1>
          <p className="mt-6 text-lg lg:text-xl text-white/80 max-w-2xl leading-relaxed">
            A premier pharmacy institution shaping clinically skilled, research-driven and industry-ready professionals — backed by 18+ years of academic legacy.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <a href="#admission" className="group inline-flex items-center gap-2 bg-[var(--gold)] text-[var(--navy-deep)] font-button font-semibold px-7 py-4 rounded-full shadow-gold-glow hover:-translate-y-0.5 transition-all">
              Apply for 2026 <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition" />
            </a>
            <a href="#tour" className="group inline-flex items-center gap-2 glass text-white font-button font-medium px-7 py-4 rounded-full hover:bg-white/15 transition">
              <Play className="h-4 w-4 text-[var(--gold)]" /> Virtual Tour
            </a>
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-white/75">
            <span className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-[var(--gold)]" /> PCI · AICTE Approved</span>
            <span className="flex items-center gap-2"><Award className="h-4 w-4 text-[var(--gold)]" /> NAAC Accredited</span>
            <span className="flex items-center gap-2"><Star className="h-4 w-4 text-[var(--gold)]" /> 4.9 / 5 Student Rating</span>
          </div>
        </Reveal>

        <Reveal delay={200} className="lg:col-span-5">
          <div className="glass rounded-3xl p-8 lg:p-10 text-white shadow-premium">
            <div className="flex items-center justify-between mb-8">
              <div>
                <div className="text-xs tracking-[0.2em] uppercase text-[var(--gold)]">By the Numbers</div>
                <div className="font-display font-bold text-2xl mt-1">A legacy you can trust</div>
              </div>
              <div className="h-10 w-10 rounded-full bg-[var(--gold)]/20 grid place-items-center"><GraduationCap className="h-5 w-5 text-[var(--gold)]" /></div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {[
                { v: 5000, s: "+", l: "Alumni Network" },
                { v: 95, s: "%", l: "Placement Rate" },
                { v: 20, s: "+", l: "Advanced Labs" },
                { v: 18, s: "+", l: "Years of Legacy" },
              ].map((m) => (
                <div key={m.l} className="border-l-2 border-[var(--gold)]/50 pl-4">
                  <div className="font-display font-black text-3xl lg:text-4xl text-white">
                    <Counter to={m.v} suffix={m.s} />
                  </div>
                  <div className="text-xs uppercase tracking-wider text-white/65 mt-1">{m.l}</div>
                </div>
              ))}
            </div>
            <div className="mt-8 pt-6 border-t border-white/15 flex items-center justify-between text-sm">
              <span className="text-white/70">Next intake begins</span>
              <span className="font-button font-semibold text-[var(--gold)]">August 2026</span>
            </div>
          </div>
        </Reveal>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 text-xs tracking-[0.3em] uppercase animate-bounce">Scroll</div>
    </section>
  );
}

/* ---------- Metrics strip ---------- */
function Metrics() {
  const m = [
    { v: 18, s: "+", l: "Years of Excellence" },
    { v: 5000, s: "+", l: "Alumni Worldwide" },
    { v: 100, s: "+", l: "Expert Faculty" },
    { v: 20, s: "+", l: "Advanced Labs" },
    { v: 95, s: "%", l: "Placement Rate" },
    { v: 100, s: "%", l: "Academic Commitment" },
  ];
  return (
    <section className="bg-white py-20 border-b border-[var(--navy)]/5">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {m.map((x) => (
            <Reveal key={x.l}>
              <div className="text-center">
                <div className="font-display font-black text-4xl lg:text-5xl text-[var(--navy)]">
                  <Counter to={x.v} suffix={x.s} />
                </div>
                <div className="mt-2 text-xs uppercase tracking-wider text-[var(--muted-ink)] font-medium">{x.l}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Quick highlights ---------- */
function Highlights() {
  const items = [
    { icon: ShieldCheck, t: "PCI Approved", d: "Recognised by Pharmacy Council of India ensuring nationally accepted credentials." },
    { icon: Hospital, t: "Hospital Training", d: "Hands-on clinical exposure through tie-ups with leading multi-specialty hospitals." },
    { icon: Briefcase, t: "Placement Assistance", d: "Dedicated career cell with 95% placement record across top pharma companies." },
    { icon: FlaskConical, t: "Advanced Labs", d: "20+ state-of-the-art laboratories with modern instrumentation and research tools." },
  ];
  return (
    <section className="relative py-20 bg-[var(--surface)] overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(10,37,64,0.04),transparent_60%)]" />
      <div className="mx-auto max-w-7xl px-6 relative">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it, i) => (
            <Reveal key={it.t} delay={i * 80}>
              <div className="group relative h-full bg-white rounded-2xl p-8 border border-[var(--navy)]/8 hover:border-[var(--gold)]/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-gold-glow">
                <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-[var(--navy)] to-[var(--navy-deep)] grid place-items-center mb-5 group-hover:scale-110 transition-transform duration-500">
                  <it.icon className="h-6 w-6 text-[var(--gold)]" />
                </div>
                <h3 className="font-display font-bold text-lg text-[var(--navy)]">{it.t}</h3>
                <p className="mt-2 text-sm text-[var(--muted-ink)] leading-relaxed">{it.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- About ---------- */
function About() {
  return (
    <section id="about" className="py-28 bg-white">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-16 items-center">
        <Reveal>
          <div className="relative">
            <div className="absolute -inset-4 bg-[var(--gold)]/10 rounded-3xl rotate-2" />
            <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-[var(--navy)] rounded-2xl hidden lg:block" />
            <div className="relative overflow-hidden rounded-2xl shadow-premium">
              <img src={aboutCampus} alt="VJ's College campus building" className="w-full h-[520px] object-cover hover:scale-105 transition-transform duration-[1.5s]" loading="lazy" width={1280} height={960} />
            </div>
            <div className="absolute -bottom-8 -left-6 lg:left-8 bg-white rounded-2xl shadow-premium p-5 flex items-center gap-4 max-w-[280px]">
              <div className="h-14 w-14 rounded-xl bg-[var(--gold)]/15 grid place-items-center">
                <Award className="h-6 w-6 text-[var(--gold)]" />
              </div>
              <div>
                <div className="font-display font-black text-2xl text-[var(--navy)]">18+ Years</div>
                <div className="text-xs text-[var(--muted-ink)]">of academic excellence</div>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <div className="text-xs tracking-[0.25em] uppercase text-[var(--gold)] font-button font-semibold">About the Institution</div>
          <h2 className="font-display font-black text-4xl lg:text-5xl text-[var(--navy)] mt-3 leading-tight">
            A pharmacy institution built on <span className="text-gradient-gold">care, research</span> and rigour.
          </h2>
          <p className="mt-6 text-[var(--muted-ink)] leading-relaxed">
            Since 2007, VJ's College of Pharmacy has nurtured generations of pharmacists, clinical researchers and healthcare innovators. Our curriculum blends <strong className="text-[var(--navy)]">deep scientific foundations</strong>, <strong className="text-[var(--navy)]">industry exposure</strong> and <strong className="text-[var(--navy)]">hospital-based clinical training</strong> — preparing graduates who lead the future of patient care.
          </p>
          <p className="mt-4 text-[var(--muted-ink)] leading-relaxed">
            From advanced pharmacology labs to research collaborations with hospitals and pharma majors, every part of campus life is engineered to build practitioners the industry trusts.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-5 max-w-md">
            {[
              { i: BookOpen, t: "PCI-Aligned Curriculum" },
              { i: Users, t: "100+ Expert Faculty" },
              { i: Globe2, t: "Industry Collaborations" },
              { i: Microscope, t: "Research-Led Learning" },
            ].map((x) => (
              <div key={x.t} className="flex items-center gap-3">
                <div className="h-9 w-9 rounded-lg bg-[var(--navy)]/5 grid place-items-center"><x.i className="h-4 w-4 text-[var(--navy)]" /></div>
                <span className="text-sm font-medium text-[var(--ink)]">{x.t}</span>
              </div>
            ))}
          </div>
          <a href="#" className="mt-10 inline-flex items-center gap-2 font-button font-semibold text-[var(--navy)] border-b-2 border-[var(--gold)] pb-1 hover:gap-3 transition-all">
            Read Our Full Story <ArrowRight className="h-4 w-4" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- Achievements (dark) ---------- */
function Achievements() {
  const a = [
    { v: 100, s: "%", l: "Pass Results" },
    { v: 45, s: "+", l: "GPAT Rank Holders" },
    { v: 28, s: "+", l: "NIPER Qualified" },
    { v: 120, s: "+", l: "Research Publications" },
    { v: 35, s: "+", l: "Awards & Honours" },
    { v: 18, s: "+", l: "Years of Excellence" },
  ];
  return (
    <section className="relative py-28 bg-[var(--navy)] text-white overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(212,175,55,0.12),transparent_45%),radial-gradient(circle_at_80%_80%,rgba(212,175,55,0.08),transparent_45%)]" />
      <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-transparent via-[var(--gold)] to-transparent" />
      <div className="mx-auto max-w-7xl px-6 relative">
        <div className="max-w-2xl">
          <div className="text-xs tracking-[0.25em] uppercase text-[var(--gold)] font-button font-semibold">Our Achievements</div>
          <h2 className="font-display font-black text-4xl lg:text-5xl mt-3">A track record of <span className="text-gradient-gold">measurable excellence</span>.</h2>
          <p className="mt-5 text-white/70 leading-relaxed">Numbers that reflect the depth of our academic discipline, mentorship and student success across two decades.</p>
        </div>
        <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-px bg-white/10 rounded-2xl overflow-hidden">
          {a.map((x) => (
            <Reveal key={x.l}>
              <div className="bg-[var(--navy)] p-10 hover:bg-[var(--navy-deep)] transition-colors group">
                <div className="font-display font-black text-5xl lg:text-6xl text-gradient-gold">
                  <Counter to={x.v} suffix={x.s} />
                </div>
                <div className="mt-3 text-sm uppercase tracking-wider text-white/70 group-hover:text-[var(--gold)] transition">{x.l}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Programs ---------- */
function Programs() {
  const progs = [
    { code: "B.Pharm", name: "Bachelor of Pharmacy", dur: "4 Years", elig: "10+2 with PCM/B", seats: 100 },
    { code: "Pharm.D", name: "Doctor of Pharmacy", dur: "6 Years", elig: "10+2 with PCB/M", seats: 30 },
    { code: "M.Pharm", name: "Master of Pharmacy", dur: "2 Years", elig: "B.Pharm Graduate", seats: 24 },
    { code: "D.Pharm", name: "Diploma in Pharmacy", dur: "2 Years", elig: "10+2 with Science", seats: 60 },
  ];
  return (
    <section id="programs" className="py-28 bg-[var(--surface)]">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
          <div>
            <div className="text-xs tracking-[0.25em] uppercase text-[var(--gold)] font-button font-semibold">Programs Offered</div>
            <h2 className="font-display font-black text-4xl lg:text-5xl text-[var(--navy)] mt-3 leading-tight max-w-2xl">Pathways designed for every stage of your pharmacy career.</h2>
          </div>
          <a href="#" className="font-button font-semibold text-[var(--navy)] inline-flex items-center gap-2 group">View All Programs <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition" /></a>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {progs.map((p, i) => (
            <Reveal key={p.code} delay={i * 80}>
              <div className="group relative bg-white rounded-2xl p-7 border border-[var(--navy)]/8 hover:border-[var(--navy)] transition-all duration-500 hover:-translate-y-2 hover:shadow-premium h-full flex flex-col">
                <div className="absolute top-0 right-0 px-3 py-1 m-4 rounded-full bg-[var(--gold)]/15 text-[var(--navy)] text-[10px] font-button font-semibold tracking-wider">{p.dur.toUpperCase()}</div>
                <div className="font-display font-black text-3xl text-[var(--navy)]">{p.code}</div>
                <div className="mt-1 text-sm text-[var(--muted-ink)]">{p.name}</div>
                <div className="my-6 h-px bg-gradient-to-r from-[var(--gold)]/40 to-transparent" />
                <dl className="space-y-3 text-sm flex-1">
                  <div className="flex justify-between"><dt className="text-[var(--muted-ink)]">Duration</dt><dd className="font-medium text-[var(--ink)]">{p.dur}</dd></div>
                  <div className="flex justify-between"><dt className="text-[var(--muted-ink)]">Eligibility</dt><dd className="font-medium text-[var(--ink)] text-right">{p.elig}</dd></div>
                  <div className="flex justify-between"><dt className="text-[var(--muted-ink)]">Seats</dt><dd className="font-medium text-[var(--ink)]">{p.seats}</dd></div>
                </dl>
                <a href="#" className="mt-7 inline-flex items-center justify-between text-sm font-button font-semibold text-[var(--navy)] group/btn">
                  <span>Learn More</span>
                  <span className="h-8 w-8 rounded-full bg-[var(--navy)] text-white grid place-items-center group-hover/btn:bg-[var(--gold)] group-hover/btn:text-[var(--navy)] transition"><ArrowRight className="h-4 w-4" /></span>
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Why choose ---------- */
function WhyChoose() {
  const f = [
    { i: Users, t: "Experienced Faculty", d: "100+ doctoral and industry-trained professors mentoring every student." },
    { i: Lightbulb, t: "Digital Learning", d: "Smart classrooms, LMS, interactive simulations and curated digital libraries." },
    { i: Microscope, t: "Research-Based Education", d: "Live research projects integrated into the undergraduate curriculum." },
    { i: Building2, t: "Industry Exposure", d: "Internships, industrial visits and live projects with leading pharma companies." },
    { i: Beaker, t: "Advanced Labs", d: "20+ specialised labs including pharmaceutics, analysis and clinical pharmacy." },
    { i: Briefcase, t: "Placement Assistance", d: "Career cell with year-round drives and personalised coaching." },
  ];
  return (
    <section className="py-28 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-xs tracking-[0.25em] uppercase text-[var(--gold)] font-button font-semibold">Why Choose VJ's</div>
          <h2 className="font-display font-black text-4xl lg:text-5xl text-[var(--navy)] mt-3 leading-tight">An institution built around <span className="text-gradient-gold">your growth</span>.</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {f.map((x, i) => (
            <Reveal key={x.t} delay={i * 60}>
              <div className="group relative h-full p-8 rounded-2xl glass-light hover:bg-white hover:shadow-premium hover:-translate-y-1 transition-all duration-500">
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-xl bg-[var(--navy)] grid place-items-center shrink-0 group-hover:bg-[var(--gold)] transition-colors">
                    <x.i className="h-5 w-5 text-[var(--gold)] group-hover:text-[var(--navy)] transition-colors" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg text-[var(--navy)]">{x.t}</h3>
                    <p className="mt-1.5 text-sm text-[var(--muted-ink)] leading-relaxed">{x.d}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Research ---------- */
function Research() {
  const r = [
    { i: FileText, v: 120, s: "+", l: "Publications" },
    { i: ShieldCheck, v: 12, s: "", l: "Patents Filed" },
    { i: Globe2, v: 18, s: "+", l: "Collaborations" },
    { i: Award, v: 60, s: "+", l: "Presentations" },
    { i: Lightbulb, v: 25, s: "+", l: "Innovation Projects" },
  ];
  return (
    <section id="research" className="py-28 bg-[var(--surface)]">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-16 items-center">
        <Reveal>
          <div className="relative">
            <div className="overflow-hidden rounded-2xl shadow-premium">
              <img src={researchLab} alt="Research laboratory" className="w-full h-[520px] object-cover hover:scale-105 transition-transform duration-[1.5s]" loading="lazy" width={1280} height={960} />
            </div>
            <div className="absolute top-6 right-6 glass-light rounded-xl px-5 py-3 shadow-premium">
              <div className="text-[10px] tracking-widest uppercase text-[var(--muted-ink)]">Active Projects</div>
              <div className="font-display font-black text-3xl text-[var(--navy)]">25+</div>
            </div>
          </div>
        </Reveal>
        <Reveal delay={150}>
          <div className="text-xs tracking-[0.25em] uppercase text-[var(--gold)] font-button font-semibold">Research & Innovation</div>
          <h2 className="font-display font-black text-4xl lg:text-5xl text-[var(--navy)] mt-3 leading-tight">Where curiosity becomes <span className="text-gradient-gold">discovery</span>.</h2>
          <p className="mt-5 text-[var(--muted-ink)] leading-relaxed">Our research culture spans formulation, pharmacology, clinical trials and natural product chemistry — supported by industry partnerships and peer-reviewed publications.</p>
          <div className="mt-10 space-y-4">
            {r.map((x) => (
              <div key={x.l} className="flex items-center justify-between p-4 rounded-xl bg-white border border-[var(--navy)]/8 hover:border-[var(--gold)] hover:shadow-premium transition group">
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-lg bg-[var(--navy)]/5 grid place-items-center group-hover:bg-[var(--gold)]/15 transition"><x.i className="h-5 w-5 text-[var(--navy)]" /></div>
                  <div className="text-sm font-medium text-[var(--ink)]">{x.l}</div>
                </div>
                <div className="font-display font-black text-2xl text-[var(--navy)]"><Counter to={x.v} suffix={x.s} /></div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- Campus carousel ---------- */
function Campus() {
  const [idx, setIdx] = React.useState(0);
  const slides = [
    { img: researchLab, cat: "Labs", t: "Advanced Research Laboratories" },
    { img: campusLibrary, cat: "Library", t: "Modern Digital Library" },
    { img: campusSeminar, cat: "Seminar Hall", t: "Premium Seminar Auditorium" },
    { img: campusClassroom, cat: "Classrooms", t: "Smart Digital Classrooms" },
    { img: aboutCampus, cat: "Green Campus", t: "Spacious Green Campus" },
    { img: heroCampus, cat: "Auditorium", t: "Grand Convocation Hall" },
  ];
  React.useEffect(() => {
    const id = setInterval(() => setIdx((i) => (i + 1) % slides.length), 5000);
    return () => clearInterval(id);
  }, [slides.length]);
  return (
    <section id="infrastructure" className="py-28 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs tracking-[0.25em] uppercase text-[var(--gold)] font-button font-semibold">Campus Experience</div>
            <h2 className="font-display font-black text-4xl lg:text-5xl text-[var(--navy)] mt-3 max-w-2xl leading-tight">A campus engineered for <span className="text-gradient-gold">modern learning</span>.</h2>
          </div>
          <div className="flex gap-2">
            {slides.map((_, i) => (
              <button key={i} onClick={() => setIdx(i)} className={`h-1.5 rounded-full transition-all ${i === idx ? "w-10 bg-[var(--navy)]" : "w-6 bg-[var(--navy)]/20 hover:bg-[var(--navy)]/40"}`} aria-label={`slide ${i + 1}`} />
            ))}
          </div>
        </div>
        <div className="relative overflow-hidden rounded-3xl shadow-premium aspect-[16/8]">
          {slides.map((s, i) => (
            <div key={i} className={`absolute inset-0 transition-all duration-1000 ${i === idx ? "opacity-100 scale-100" : "opacity-0 scale-105"}`}>
              <img src={s.img} alt={s.t} className="h-full w-full object-cover" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--navy-deep)]/90 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-12 text-white">
                <div className="text-xs tracking-[0.25em] uppercase text-[var(--gold)] mb-2">{s.cat}</div>
                <div className="font-display font-bold text-2xl lg:text-4xl">{s.t}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Recruiters marquee ---------- */
function Recruiters() {
  const logos = [
    "Apollo", "Dr. Reddy's", "Cipla", "Sun Pharma", "Biocon", "Aurobindo", "Pfizer", "Glenmark",
    "Mankind", "Lupin", "Zydus", "Torrent", "Hetero", "Wockhardt", "Alkem", "Abbott",
  ];
  return (
    <section className="py-20 bg-[var(--surface)] overflow-hidden border-y border-[var(--navy)]/8">
      <div className="mx-auto max-w-7xl px-6 mb-10 text-center">
        <div className="text-xs tracking-[0.25em] uppercase text-[var(--gold)] font-button font-semibold">Recruiters & Partners</div>
        <h2 className="font-display font-black text-3xl lg:text-4xl text-[var(--navy)] mt-3">Trusted by the industry's most respected names</h2>
      </div>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[var(--surface)] to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[var(--surface)] to-transparent z-10" />
        <div className="flex gap-12 animate-marquee w-max">
          {[...logos, ...logos].map((l, i) => (
            <div key={i} className="shrink-0 h-20 px-10 grid place-items-center font-display font-black text-2xl text-[var(--navy)]/30 hover:text-[var(--navy)] transition-colors duration-300 grayscale hover:grayscale-0">
              {l}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Placements ---------- */
function Placements() {
  const cards = [
    { i: Hospital, t: "Hospital Training", d: "Live clinical rotations across multi-specialty hospitals." },
    { i: Briefcase, t: "Industry Internships", d: "Structured internships with leading pharma companies." },
    { i: Users, t: "Career Guidance", d: "1-on-1 mentorship, resume building and mock interviews." },
    { i: GraduationCap, t: "Career Programs", d: "GPAT, NIPER and competitive exam coaching included." },
  ];
  return (
    <section id="placements" className="py-28 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs tracking-[0.25em] uppercase text-[var(--gold)] font-button font-semibold">Placements & Career Development</div>
          <h2 className="font-display font-black text-4xl lg:text-5xl text-[var(--navy)] mt-3 leading-tight">Building <span className="text-gradient-gold">Career-Ready</span> Pharmacy Professionals</h2>
          <p className="mt-5 text-[var(--muted-ink)]">A focused, hands-on placement ecosystem that has consistently delivered industry-leading outcomes.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {cards.map((c, i) => (
            <Reveal key={c.t} delay={i * 80}>
              <div className="group p-7 rounded-2xl bg-[var(--surface)] hover:bg-[var(--navy)] hover:text-white transition-all duration-500 hover:-translate-y-1 h-full">
                <div className="h-12 w-12 rounded-xl bg-white grid place-items-center mb-5 group-hover:bg-[var(--gold)] transition">
                  <c.i className="h-5 w-5 text-[var(--navy)]" />
                </div>
                <h3 className="font-display font-bold text-lg">{c.t}</h3>
                <p className="mt-2 text-sm text-[var(--muted-ink)] group-hover:text-white/75 transition">{c.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-[var(--navy)]/10 rounded-2xl overflow-hidden border border-[var(--navy)]/10">
          {[
            { v: 95, s: "%", l: "Placement Rate" },
            { v: 12, s: "LPA", l: "Highest Package" },
            { v: 4, s: ".8", l: "Average Package" },
            { v: 150, s: "+", l: "Recruiting Partners" },
          ].map((x) => (
            <div key={x.l} className="bg-white p-8 text-center">
              <div className="font-display font-black text-4xl text-[var(--navy)]"><Counter to={x.v} suffix={x.s} /></div>
              <div className="mt-2 text-xs uppercase tracking-wider text-[var(--muted-ink)]">{x.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Student life masonry ---------- */
function StudentLife() {
  const items = [
    { img: life1, t: "Annual Cultural Fest", cat: "Cultural", h: "h-[420px]" },
    { img: life3, t: "Inter-College Sports", cat: "Sports", h: "h-[300px]" },
    { img: life2, t: "Industrial Visits", cat: "Industry", h: "h-[300px]" },
    { img: life4, t: "Expert Workshops", cat: "Workshops", h: "h-[260px]" },
    { img: researchLab, t: "Community Outreach", cat: "Service", h: "h-[260px]" },
    { img: campusClassroom, t: "Annual Tech Fest", cat: "Fest", h: "h-[420px]" },
  ];
  return (
    <section className="py-28 bg-[var(--surface)]">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="text-xs tracking-[0.25em] uppercase text-[var(--gold)] font-button font-semibold">Student Life</div>
          <h2 className="font-display font-black text-4xl lg:text-5xl text-[var(--navy)] mt-3 leading-tight">More than a college — <span className="text-gradient-gold">a community</span>.</h2>
        </div>
        <div className="columns-1 md:columns-2 lg:columns-3 gap-5 space-y-5">
          {items.map((it, i) => (
            <Reveal key={i}>
              <div className={`group relative overflow-hidden rounded-2xl shadow-premium break-inside-avoid ${it.h}`}>
                <img src={it.img} alt={it.t} className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--navy-deep)]/90 via-[var(--navy-deep)]/20 to-transparent opacity-90 group-hover:opacity-100 transition" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="text-[10px] tracking-[0.25em] uppercase text-[var(--gold)] mb-1">{it.cat}</div>
                  <div className="font-display font-bold text-xl">{it.t}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Leadership ---------- */
function Leadership() {
  const leaders = [
    { img: chairmanImg, name: "Dr. V. Janardhan Reddy", role: "Chairman", quote: "Education is the most powerful instrument we can place in the hands of tomorrow's healthcare leaders." },
    { img: secretaryImg, name: "Sri V. Karthik Reddy", role: "Secretary & Correspondent", quote: "Our promise is simple — every student receives the mentorship, resources and opportunity to lead." },
  ];
  return (
    <section className="py-28 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-xs tracking-[0.25em] uppercase text-[var(--gold)] font-button font-semibold">Leadership Messages</div>
          <h2 className="font-display font-black text-4xl lg:text-5xl text-[var(--navy)] mt-3 leading-tight">Guided by visionary leadership.</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {leaders.map((l, i) => (
            <Reveal key={l.name} delay={i * 100}>
              <div className="group bg-[var(--surface)] rounded-3xl p-8 lg:p-10 hover:shadow-premium transition-all duration-500 flex flex-col sm:flex-row gap-7 items-start h-full">
                <div className="relative shrink-0">
                  <div className="absolute inset-0 rounded-2xl bg-[var(--gold)] translate-x-2 translate-y-2" />
                  <img src={l.img} alt={l.name} className="relative h-40 w-32 object-cover rounded-2xl" loading="lazy" />
                </div>
                <div className="flex-1">
                  <Quote className="h-7 w-7 text-[var(--gold)] mb-3" />
                  <p className="text-[var(--ink)] leading-relaxed italic">"{l.quote}"</p>
                  <div className="mt-6">
                    <div className="font-display font-bold text-[var(--navy)]">{l.name}</div>
                    <div className="text-sm text-[var(--muted-ink)]">{l.role}</div>
                  </div>
                  <a href="#" className="mt-5 inline-flex items-center gap-2 text-sm font-button font-semibold text-[var(--navy)] group/btn">View Message <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition" /></a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Testimonials ---------- */
function Testimonials() {
  const t = [
    { img: student1, name: "Priya Sharma", co: "Dr. Reddy's Labs", role: "Pharm.D, 2023", text: "From hospital postings to research mentorship, every part of VJ's prepared me for real clinical practice. I walked into my role with confidence." },
    { img: student2, name: "Arjun Reddy", co: "Apollo Hospitals", role: "B.Pharm, 2022", text: "The faculty go far beyond textbooks. Personalised mentorship and industry connect made the difference between learning and actually becoming a pharmacist." },
    { img: student1, name: "Meera Iyer", co: "Cipla", role: "M.Pharm, 2024", text: "The labs and research culture here are exceptional. I co-authored two publications before graduation — opportunities most colleges can't offer." },
  ];
  const [i, setI] = React.useState(0);
  React.useEffect(() => {
    const id = setInterval(() => setI((x) => (x + 1) % t.length), 6000);
    return () => clearInterval(id);
  }, [t.length]);
  return (
    <section className="relative py-28 bg-[var(--navy)] text-white overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.1),transparent_60%)]" />
      <div className="mx-auto max-w-5xl px-6 relative">
        <div className="text-center mb-14">
          <div className="text-xs tracking-[0.25em] uppercase text-[var(--gold)] font-button font-semibold">Student Success</div>
          <h2 className="font-display font-black text-4xl lg:text-5xl mt-3">Stories that <span className="text-gradient-gold">define our promise</span>.</h2>
        </div>
        <div className="relative h-[340px]">
          {t.map((s, k) => (
            <div key={k} className={`absolute inset-0 transition-all duration-700 ${k === i ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6 pointer-events-none"}`}>
              <div className="glass rounded-3xl p-8 lg:p-12 h-full flex flex-col lg:flex-row gap-8 items-center">
                <img src={s.img} alt={s.name} className="h-28 w-28 lg:h-36 lg:w-36 rounded-2xl object-cover shadow-premium" loading="lazy" />
                <div className="flex-1 text-center lg:text-left">
                  <div className="flex justify-center lg:justify-start gap-1 mb-4">
                    {Array.from({ length: 5 }).map((_, n) => <Star key={n} className="h-4 w-4 fill-[var(--gold)] text-[var(--gold)]" />)}
                  </div>
                  <p className="text-lg lg:text-xl leading-relaxed text-white/90 italic">"{s.text}"</p>
                  <div className="mt-6">
                    <div className="font-display font-bold text-lg">{s.name}</div>
                    <div className="text-sm text-[var(--gold)]">{s.role} · {s.co}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center gap-2 mt-8">
          {t.map((_, k) => (
            <button key={k} onClick={() => setI(k)} className={`h-2 rounded-full transition-all ${k === i ? "w-10 bg-[var(--gold)]" : "w-2 bg-white/30"}`} aria-label={`testimonial ${k + 1}`} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Virtual tour ---------- */
function VirtualTour() {
  return (
    <section id="tour" className="relative py-28 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-3xl shadow-premium aspect-[16/9] group cursor-pointer">
          <img src={heroCampus} alt="Virtual campus tour" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-[1.5s]" loading="lazy" />
          <div className="absolute inset-0 bg-[var(--navy-deep)]/55 group-hover:bg-[var(--navy-deep)]/40 transition" />
          <div className="relative h-full flex flex-col items-center justify-center text-white text-center p-6">
            <div className="text-xs tracking-[0.25em] uppercase text-[var(--gold)] font-button font-semibold mb-3">Virtual Campus Tour</div>
            <h2 className="font-display font-black text-4xl lg:text-6xl max-w-3xl leading-[1.05]">Explore our campus <span className="text-gradient-gold">virtually</span>.</h2>
            <button className="mt-8 group/btn relative h-20 w-20 rounded-full bg-[var(--gold)] grid place-items-center hover:scale-110 transition-transform shadow-gold-glow">
              <Play className="h-7 w-7 text-[var(--navy-deep)] fill-[var(--navy-deep)] ml-1" />
              <span className="absolute inset-0 rounded-full bg-[var(--gold)] animate-ping opacity-40" />
            </button>
            <a href="#" className="mt-6 inline-flex items-center gap-2 text-sm font-button font-semibold">Watch Tour <ArrowRight className="h-4 w-4" /></a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Final CTA ---------- */
function FinalCTA() {
  return (
    <section id="admission" className="relative py-28 bg-[var(--navy-deep)] text-white overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(212,175,55,0.18),transparent_50%)]" />
      <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-[var(--gold)]/10 blur-3xl" />
      <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-[var(--gold)]/10 blur-3xl" />
      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs font-medium tracking-wider uppercase mb-6">
          <Calendar className="h-3.5 w-3.5 text-[var(--gold)]" /> Limited Seats · 2026 Intake
        </div>
        <h2 className="font-display font-black text-4xl lg:text-6xl leading-[1.05]">
          Start Your <span className="text-gradient-gold">Pharmacy Career</span> Today.
        </h2>
        <p className="mt-6 text-lg text-white/75 max-w-2xl mx-auto">Admissions for the 2026 academic year are now open. Submit your application before seats fill up.</p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a href="#" className="group inline-flex items-center gap-2 bg-[var(--gold)] text-[var(--navy-deep)] font-button font-semibold px-8 py-4 rounded-full shadow-gold-glow hover:-translate-y-0.5 transition-all">
            Apply Now <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition" />
          </a>
          <a href="#contact" className="inline-flex items-center gap-2 glass text-white font-button font-medium px-8 py-4 rounded-full hover:bg-white/15 transition">
            <Phone className="h-4 w-4 text-[var(--gold)]" /> Contact Admissions
          </a>
        </div>
        <div className="mt-10 text-sm text-white/60">Application deadline: <span className="text-[var(--gold)] font-semibold">31st July 2026</span></div>
      </div>
    </section>
  );
}

/* ---------- Footer ---------- */
function Footer() {
  return (
    <footer id="contact" className="bg-[var(--navy)] text-white pt-20 pb-8">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-4 md:grid-cols-2 gap-12">
        <div>
          <div className="flex items-center gap-3">
            <div className="h-11 w-11 rounded-xl grid place-items-center font-display font-black bg-[var(--gold)] text-[var(--navy-deep)]">VJ</div>
            <div className="font-display font-bold text-lg">VJ's College of Pharmacy</div>
          </div>
          <p className="mt-5 text-white/70 text-sm leading-relaxed">Building future healthcare leaders through excellence in pharmacy education, research and innovation since 2007.</p>
          <div className="mt-6 flex gap-3">
            {[Facebook, Instagram, Linkedin, Youtube].map((I, i) => (
              <a key={i} href="#" className="h-9 w-9 grid place-items-center rounded-full border border-white/15 hover:bg-[var(--gold)] hover:text-[var(--navy-deep)] hover:border-[var(--gold)] transition">
                <I className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <div className="font-display font-bold text-sm tracking-wider uppercase text-[var(--gold)] mb-5">Quick Links</div>
          <ul className="space-y-3 text-sm text-white/75">
            {["About Us", "Admissions", "Faculty", "Research", "Campus Life", "News & Events"].map((x) => (
              <li key={x}><a href="#" className="hover:text-[var(--gold)] transition flex items-center gap-2 group"><ChevronRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition" />{x}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <div className="font-display font-bold text-sm tracking-wider uppercase text-[var(--gold)] mb-5">Programs</div>
          <ul className="space-y-3 text-sm text-white/75">
            {["B.Pharm", "Pharm.D", "M.Pharm", "D.Pharm", "Ph.D Research"].map((x) => (
              <li key={x}><a href="#" className="hover:text-[var(--gold)] transition flex items-center gap-2 group"><ChevronRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition" />{x}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <div className="font-display font-bold text-sm tracking-wider uppercase text-[var(--gold)] mb-5">Contact</div>
          <ul className="space-y-4 text-sm text-white/75">
            <li className="flex items-start gap-3"><MapPin className="h-4 w-4 text-[var(--gold)] mt-0.5 shrink-0" /><span>VJ's College of Pharmacy, Diwancheruvu, Rajamahendravaram, Andhra Pradesh 533103</span></li>
            <li className="flex items-center gap-3"><Phone className="h-4 w-4 text-[var(--gold)]" /><a href="tel:+919876543210" className="hover:text-[var(--gold)]">+91 98765 43210</a></li>
            <li className="flex items-center gap-3"><Mail className="h-4 w-4 text-[var(--gold)]" /><a href="mailto:admissions@vjpharmacy.edu.in" className="hover:text-[var(--gold)]">admissions@vjpharmacy.edu.in</a></li>
          </ul>
          <div className="mt-6">
            <div className="text-xs uppercase tracking-wider text-white/60 mb-2">Newsletter</div>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Your email" className="flex-1 px-4 py-2.5 bg-white/5 border border-white/15 rounded-full text-sm placeholder:text-white/40 focus:outline-none focus:border-[var(--gold)]" />
              <button className="px-4 py-2.5 rounded-full bg-[var(--gold)] text-[var(--navy-deep)] font-button font-semibold text-sm hover:brightness-110">Join</button>
            </form>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 mt-16 pt-6 border-t border-white/10 flex flex-col md:flex-row gap-3 justify-between items-center text-xs text-white/55">
        <div>© {new Date().getFullYear()} VJ's College of Pharmacy. All rights reserved.</div>
        <div className="flex gap-6">
          <a href="#" className="hover:text-[var(--gold)]">Privacy Policy</a>
          <a href="#" className="hover:text-[var(--gold)]">Terms of Use</a>
          <a href="#" className="hover:text-[var(--gold)]">Disclosures</a>
        </div>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <main className="bg-white">
      <TopBar />
      <Nav />
      <Hero />
      <Metrics />
      <Highlights />
      <About />
      <Achievements />
      <Programs />
      <WhyChoose />
      <Research />
      <Campus />
      <Recruiters />
      <Placements />
      <StudentLife />
      <Leadership />
      <Testimonials />
      <VirtualTour />
      <FinalCTA />
      <Footer />
    </main>
  );
}
