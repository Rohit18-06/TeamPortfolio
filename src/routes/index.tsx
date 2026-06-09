import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Mail, MapPin, Phone, Github, Linkedin } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Elite Squad — A Computer Science Collective" },
      { name: "description", content: "Three computer science undergraduates from GITAM University building software, data, and AI projects together." },
      { property: "og:title", content: "Elite Squad — A Computer Science Collective" },
      { property: "og:description", content: "Rohit, Akshith and Pooja — a portfolio of projects in full-stack, data, and AI." },
    ],
  }),
  component: Index,
});

type Member = {
  name: string;
  short: string;
  role: string;
  location: string;
  email: string;
  phone: string;
  linkedin?: string;
  github?: string;
  image?: string;
  summary: string;
  skills: string[];
  projects: { title: string; stack: string; desc: string; link?: string }[];
  certs: string[];
};

const members: Member[] = [
  {
    name: "Yarnagula Pooja",
    short: "Pooja",
    role: "Data & ML",
    location: "Hyderabad, India",
    email: "poojayarnagula59@gmail.com",
    phone: "+91 82405 62505",
    linkedin: "https://www.linkedin.com/in/pooja-yarnagula-2b904a398/",
    github: "https://github.com/poojay0231-dotcom",
    image: "/images/pooja.jpg",
    summary: "3rd-year B.Tech CSE undergraduate at GITAM University. Works across data science, ML and cloud — turning messy datasets into useful, visual decisions.",
    skills: ["Python", "SQL", "Java", "Data Analysis", "Data Science", "Tableau", "HTML", "CSS", "DBMS", "Cloud Fundamentals", "DSA"],
    projects: [
      { title: "EcoSentinel-AI", stack: "Python · Data Analysis", desc: "AI-based environmental monitoring and analysis system with data processing and predictive analytics features." },
      { title: "Travel Booking App", stack: "JavaScript · Web Design", desc: "Web-based travel booking platform with interactive UI, destination search, and responsive design." },
      { title: "Online Exam Portal", stack: "HTML · CSS · JavaScript", desc: "Online examination system with student login, exam submission, and result management functionalities." },
    ],
    certs: ["Data Analytics Job Simulation — Deloitte (Forage)", "Microsoft Azure Fundamentals — Skillup", "Cisco Networking Basics — Coursera", "HackSpire X 2026 Participant"],
  },
  {
    name: "Oruganti Venkata Rohit",
    short: "Rohit",
    role: "Full-Stack & Cloud",
    location: "Hyderabad, India",
    email: "orugantivenkatarohit2005@gmail.com",
    phone: "+91 87900 66630",
    linkedin: "https://www.linkedin.com/in/rohit-oruganti-043b46392/",
    github: "https://github.com/Rohit18-06",
    image: "/images/rohit.jpg",
    summary: "B.Tech CSE at GITAM University. Builds AI-driven tools and full-stack systems, with a focus on cloud architecture and live data pipelines.",
    skills: ["Python", "Java", "JavaScript", "MySQL", "AWS", "Gemini API", "REST APIs", "Cisco Packet Tracer", "Git"],
    projects: [
      { title: "Live Crypto Market Analysis Chatbot", stack: "Python · Gemini API · REST", desc: "AI chatbot delivering real-time crypto insights with technical pattern recognition and automated trend analysis." },
      { title: "Hospital Management System", stack: "Python · MySQL · Full Stack", desc: "End-to-end hospital app with admin controls, patient registration, secure auth, and appointment booking.", link: "https://github.com/Rohit18-06/Hospital-Management-System" },
    ],
    certs: ["AWS Solution Architecture — Forage", "Data Analytics — Deloitte (Forage)", "Cisco Networking Basics"],
  },
  {
    name: "Sai Akshith Veerabathini",
    short: "Akshith",
    role: "Web & Product",
    location: "Hyderabad, India",
    email: "akshithveera4@gmail.com",
    phone: "+91 62810 79114",
    linkedin: "https://www.linkedin.com/in/sai-akshith-veerabathini/",
    github: "https://github.com/GH2023005131",
    image: "/images/akshith.jpg",
    summary: "B.Tech CSE at GITAM University. Designs and ships full-stack web products with a focus on clean role-based experiences and reusable UI.",
    skills: ["Python", "Java", "C", "HTML", "CSS", "React.js", "Tailwind", "Flask", "SQL", "DSA"],
    projects: [
      { title: "IdentityFlow — IAM Portal", stack: "React · Tailwind · LocalStorage", desc: "Full-stack IAM portal automating Joiner / Mover / Leaver workflows with RBAC dashboards and document verification.", link: "https://github.com/GH2023005131/identityflow" },
      { title: "Job Portal Web Application", stack: "Python · Flask · SQLite", desc: "Full-stack portal where recruiters post jobs and candidates apply, with auth, role-based access, and saved jobs.", link: "https://github.com/GH2023005131/JobPortalProject" },
    ],
    certs: ["Crash Course on Python — Coursera", "Cisco Networking Basics", "Smart India Hackathon Participant"],
  },
];

function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/60 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 lg:px-6 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 font-display text-xl">
          <span className="text-gold">✦</span> Elite Squad
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#team" className="hover:text-foreground transition">Team</a>
          <a href="#work" className="hover:text-foreground transition">Work</a>
          <a href="#stack" className="hover:text-foreground transition">Stack</a>
          <a href="#contact" className="hover:text-foreground transition">Contact</a>
        </nav>
        <a href="#contact" className="inline-flex items-center gap-1.5 text-sm border border-gold/40 text-gold px-4 py-2 rounded-full hover:bg-gold hover:text-primary-foreground transition">
          Hire us <ArrowUpRight className="size-3.5" />
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative pt-40 pb-28 px-4 lg:px-6 grain">
      <div className="max-w-7xl mx-auto">
        <h1 className="font-display text-[clamp(3rem,11vw,11rem)] leading-[0.92] tracking-tighter reveal">
          Three minds, <br />
          <span className="italic text-gold">one</span> codebase.
        </h1>
        <div className="mt-12 grid md:grid-cols-12 gap-8 items-end">
          <p className="md:col-span-6 text-lg md:text-xl text-muted-foreground leading-relaxed reveal">
            We are <span className="text-foreground">Rohit</span>, <span className="text-foreground">Akshith</span> and <span className="text-foreground">Pooja</span> — a small computer science collective shipping work across full-stack engineering, cloud architecture and machine learning.
          </p>
          <div className="md:col-span-4 md:col-start-9 grid grid-cols-3 gap-6 reveal">
            <Stat n="07+" label="Projects shipped" />
            <Stat n="12" label="Certifications" />
            <Stat n="03" label="Disciplines" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ n, label }: { n: string; label: string }) {
  return (
    <div>
      <div className="font-display text-4xl text-gold">{n}</div>
      <div className="mt-1 text-xs text-muted-foreground uppercase tracking-wider">{label}</div>
    </div>
  );
}

function Marquee() {
  const words = ["Python", "React", "AWS", "MySQL", "Gemini API", "Flask", "Tailwind", "Azure", "Scikit-learn", "Cisco", "Pandas", "Tableau"];
  const row = [...words, ...words];
  return (
    <div className="border-y border-border py-6 overflow-hidden">
      <div className="marquee flex gap-12 whitespace-nowrap font-display text-3xl md:text-5xl">
        {row.map((w, i) => (
          <span key={i} className="flex items-center gap-12 text-muted-foreground">
            {w} <span className="text-gold">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

function Members() {
  return (
    <section id="team" className="px-4 lg:px-6 py-28">
      <div className="max-w-7xl mx-auto">
        <SectionHeader index="01" title="The team" subtitle="Different lanes. Same garage." />
        <div className="mt-16 space-y-6">
          {members.map((m, i) => (
            <MemberCard key={m.email} m={m} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function MemberCard({ m, i }: { m: Member; i: number }) {
  return (
    <article className="group relative grid md:grid-cols-12 gap-8 p-8 lg:p-10 rounded-2xl border border-border bg-surface/60 hover:border-gold/40 transition-all">
      <div className="md:col-span-1 font-mono text-xs text-muted-foreground">/ 0{i + 1}</div>
      <div className="md:col-span-4">
        <div className="aspect-square rounded-xl bg-gradient-to-br from-gold/20 via-surface to-background border border-border flex items-center justify-center relative overflow-hidden">
          {m.image ? (
            <img src={m.image} alt={m.name} className="w-full h-full object-cover" />
          ) : (
            <span className="font-display text-[12rem] leading-none text-gold/80 select-none">{m.short[0]}</span>
          )}
          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-mono text-muted-foreground bg-black/50 backdrop-blur px-2 py-1 rounded">
            <span>{m.short.toUpperCase()}</span>
            <span>{m.role}</span>
          </div>
        </div>
      </div>
      <div className="md:col-span-7 flex flex-col">
        <h3 className="font-display text-4xl md:text-5xl tracking-tight">{m.name}</h3>
        <p className="mt-2 text-sm font-mono uppercase tracking-wider text-gold">{m.role} · {m.location}</p>
        <p className="mt-5 text-muted-foreground leading-relaxed">{m.summary}</p>
        <div className="mt-6">
          <div className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-3">Stack</div>
          <div className="flex flex-wrap gap-2">
            {m.skills.map((s) => (
              <span key={s} className="text-xs px-3 py-1 rounded-full border border-border text-foreground/90">{s}</span>
            ))}
          </div>
        </div>
        <div className="mt-8 grid sm:grid-cols-2 gap-4">
          {m.projects.map((p) => (
            <a key={p.title} href={p.link || "#"} target={p.link ? "_blank" : "_self"} rel={p.link ? "noreferrer" : ""} className="block p-4 rounded-lg border border-border bg-background/40 hover:border-gold/40 hover:bg-background/60 transition">
              <div className="text-xs font-mono text-gold">{p.stack}</div>
              <div className="mt-1 font-medium">{p.title}</div>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
            </a>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
          <a href={`mailto:${m.email}`} className="inline-flex items-center gap-1.5 hover:text-gold transition">
            <Mail className="size-3.5" /> {m.email}
          </a>
          <span className="inline-flex items-center gap-1.5">
            <Phone className="size-3.5" /> {m.phone}
          </span>
          {m.linkedin && (
            <a href={m.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 hover:text-gold transition">
              <Linkedin className="size-3.5" /> LinkedIn
            </a>
          )}
          {m.github && (
            <a href={m.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 hover:text-gold transition">
              <Github className="size-3.5" /> GitHub
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

function Work() {
  const allProjects = members.flatMap((m) => m.projects.map((p) => ({ ...p, author: m.short })));
  return (
    <section id="work" className="px-4 lg:px-6 py-28 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <SectionHeader index="02" title="Selected work" subtitle="A cross-section of what we've built." />
        <div className="mt-16 border-t border-border">
          {allProjects.map((p, i) => (
            <a key={i} href={p.link || "#contact"} target={p.link ? "_blank" : "_self"} rel={p.link ? "noreferrer" : ""} className="group grid grid-cols-12 gap-4 items-center py-7 border-b border-border hover:bg-surface/40 transition px-2 -mx-2 rounded">
              <div className="col-span-1 font-mono text-xs text-muted-foreground">{String(i + 1).padStart(2, "0")}</div>
              <div className="col-span-7 md:col-span-6">
                <div className="font-display text-2xl md:text-3xl group-hover:text-gold transition">{p.title}</div>
              </div>
              <div className="hidden md:block md:col-span-3 text-sm text-muted-foreground font-mono">{p.stack}</div>
              <div className="col-span-4 md:col-span-2 text-right flex items-center justify-end gap-3">
                <span className="text-xs font-mono text-muted-foreground hidden sm:inline">by {p.author}</span>
                <ArrowUpRight className="size-5 text-muted-foreground group-hover:text-gold group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Stack() {
  const buckets = [
    { title: "Build", items: ["React", "Flask", "Tailwind", "Python", "JavaScript", "Java"] },
    { title: "Data", items: ["MySQL", "SQLite", "Pandas", "Scikit-learn", "NLTK", "Tableau"] },
    { title: "Cloud", items: ["AWS", "Azure", "Cisco Packet Tracer", "REST APIs", "Gemini API", "Git"] },
  ];
  return (
    <section id="stack" className="px-4 lg:px-6 py-28 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <SectionHeader index="03" title="What we work with" subtitle="Tools, not religion." />
        <div className="mt-16 grid md:grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden">
          {buckets.map((b) => (
            <div key={b.title} className="bg-background p-8">
              <div className="flex items-center justify-between mb-6">
                <div className="font-display text-3xl">{b.title}</div>
                <div className="text-gold font-mono text-xs">{b.items.length} tools</div>
              </div>
              <ul className="space-y-3">
                {b.items.map((i) => (
                  <li key={i} className="flex items-center justify-between text-sm border-b border-border/60 pb-3">
                    <span>{i}</span>
                    <span className="text-muted-foreground font-mono text-xs">·</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="px-4 lg:px-6 py-28 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <SectionHeader index="04" title="Let's talk" subtitle="Internships, collaborations, or just hello." />
        <div className="mt-16 grid md:grid-cols-12 gap-10">
          <div className="md:col-span-7">
            <h2 className="font-display text-5xl md:text-7xl leading-[0.95] tracking-tighter">
              Got a project that needs <span className="italic text-gold">three</span> sets of hands?
            </h2>
            <a href={`mailto:${members[0].email}`} className="inline-flex items-center gap-3 mt-10 px-6 py-4 rounded-full bg-gold text-primary-foreground font-medium hover:scale-[1.02] transition">
              Start a conversation <ArrowUpRight className="size-4" />
            </a>
          </div>
          <div className="md:col-span-5 space-y-5">
            {members.map((m) => (
              <div key={m.email} className="p-5 rounded-xl border border-border bg-surface/50">
                <div className="flex items-center justify-between">
                  <div className="font-display text-xl">{m.short}</div>
                  <span className="text-xs font-mono text-gold">{m.role}</span>
                </div>
                <a href={`mailto:${m.email}`} className="block mt-2 text-sm text-muted-foreground hover:text-foreground transition truncate">{m.email}</a>
                <div className="mt-1 text-sm text-muted-foreground flex items-center gap-1.5">
                  <MapPin className="size-3" /> {m.location}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionHeader({ index, title, subtitle }: { index: string; title: string; subtitle: string }) {
  return (
    <div className="flex items-end justify-between gap-8 border-b border-border pb-6">
      <div>
        <div className="font-mono text-xs uppercase tracking-widest text-gold">[ {index} ]</div>
        <h2 className="mt-3 font-display text-5xl md:text-6xl tracking-tighter">{title}</h2>
      </div>
      <p className="hidden md:block text-muted-foreground max-w-xs text-right">{subtitle}</p>
    </div>
  );
}

function Footer() {
  return (
    <footer className="px-4 lg:px-6 py-12 border-t border-border">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <div className="font-display text-2xl text-foreground">Elite Squad <span className="text-gold">✦</span></div>
        <div className="flex items-center gap-4">
          <a href="#top" className="hover:text-gold transition">Back to top ↑</a>
        </div>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <main className="min-h-screen">
      <Nav />
      <Hero />
      <Marquee />
      <Members />
      <Work />
      <Stack />
      <Contact />
      <Footer />
    </main>
  );
}
