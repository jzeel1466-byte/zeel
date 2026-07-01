"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  Camera,
  Film,
  Instagram,
  Linkedin,
  Mail,
  Palette,
  Phone,
  Send,
  Sparkles,
  Video,
  WandSparkles,
  Youtube
} from "lucide-react";

const navItems = ["Home", "About", "Portfolio", "Services", "Contact"];

const skills: Array<[string, number]> = [
  ["Video Editing", 95],
  ["Cinematography", 90],
  ["Graphic Design", 88],
  ["Color Grading", 92],
  ["Motion Graphics", 85],
  ["Brand Identity", 87]
];

const portfolioItems = [
  {
    title: "Design 01",
    image: "/images/design-01.jpg",
    category: "Design",     tags: ["Design"]
  },
  {
    title: "Design 02",
    image: "/images/design-02.jpg",
    category: "Design",     tags: ["Design"]
  },
  {
    title: "Design 03",
    image: "/images/design-03.jpg",
    category: "Design",     tags: ["Design"]
  },
  {
    title: "Design 04",
    image: "/images/design-04.jpg",
    category: "Design",     tags: ["Design"]
  },
  {
    title: "Design 05",
    image: "/images/design-05.jpg",
    category: "Design",     tags: ["Design"]
  },
  {
    title: "Design 06",
    image: "/images/design-06.png",
    category: "Design",     tags: ["Design"]
  },
  {
    title: "Design 07",
    image: "/images/design-07.jpg",
    category: "Design",     tags: ["Design"]
  },
  {
    title: "Design 08",
    image: "/images/design-08.jpg",
    category: "Design",     tags: ["Design"]
  },
  {
    title: "Design 09",
    image: "/images/design-09.jpg",
    category: "Design",     tags: ["Design"]
  },
  {
    title: "Design 10",
    image: "/images/design-10.jpg",
    category: "Design",     tags: ["Design"]
  },
  {
    title: "Design 11",
    image: "/images/design-11.jpg",
    category: "Design",     tags: ["Design"]
  },
  {
    title: "Design 12",
    image: "/images/design-12.jpg",
    category: "Design",     tags: ["Design"]
  },
  {
    title: "Design 13",
    image: "/images/design-13.jpg",
    category: "Design",     tags: ["Design"]
  },
  {
    title: "Design 14",
    image: "/images/design-14.jpg",
    category: "Design",     tags: ["Design"]
  },
  {
    title: "Design 15",
    image: "/images/design-15.jpg",
    category: "Design",     tags: ["Design"]
  },
  {
    title: "Design 16",
    image: "/images/design-16.jpg",
    category: "Design",     tags: ["Design"]
  },
  {
    title: "Design 17",
    image: "/images/design-17.jpg",
    category: "Design",     tags: ["Design"]
  },
  {
    title: "Design 18",
    image: "/images/design-18.jpg",
    category: "Design",     tags: ["Design"]
  },
  {
    title: "Design 19",
    image: "/images/design-19.jpg",
    category: "Design",     tags: ["Design"]
  },
  {
    title: "Design 20",
    image: "/images/design-20.jpg",
    category: "Design",     tags: ["Design"]
  },
  {
    title: "Design 21",
    image: "/images/design-21.jpg",
    category: "Design",     tags: ["Design"]
  },
  {
    title: "Design 22",
    image: "/images/design-22.jpg",
    category: "Design",     tags: ["Design"]
  },
  {
    title: "Design 23",
    image: "/images/design-23.jpg",
    category: "Design",     tags: ["Design"]
  },
  {
    title: "Design 24",
    image: "/images/design-24.jpg",
    category: "Design",     tags: ["Design"]
  },
  {
    title: "Design 25",
    image: "/images/design-25.jpg",
    category: "Design",     tags: ["Design"]
  },
  {
    title: "Design 26",
    image: "/images/design-26.jpg",
    category: "Design",     tags: ["Design"]
  },
  {
    title: "Design 27",
    image: "/images/design-27.jpg",
    category: "Design",     tags: ["Design"]
  },
  {
    title: "Design 28",
    image: "/images/design-28.jpg",
    category: "Design",     tags: ["Design"]
  },
  {
    title: "Design 29",
    image: "/images/design-29.jpg",
    category: "Design",     tags: ["Design"]
  },
  {
    title: "Design 30",
    image: "/images/design-30.jpg",
    category: "Design",     tags: ["Design"]
  },
  {
    title: "Design 31",
    image: "/images/design-31.jpg",
    category: "Design",     tags: ["Design"]
  },
  {
    title: "Design 32",
    image: "/images/design-32.jpg",
    category: "Design",     tags: ["Design"]
  },
  {
    title: "Design 33",
    image: "/images/design-33.jpg",
    category: "Design",     tags: ["Design"]
  },
  {
    title: "Design 34",
    image: "/images/design-34.jpg",
    category: "Design",     tags: ["Design"]
  },
  {
    title: "Design 35",
    image: "/images/design-35.jpg",
    category: "Design",     tags: ["Design"]
  },
  {
    title: "Design 36",
    image: "/images/design-36.jpg",
    category: "Design",     tags: ["Design"]
  },
  {
    title: "Design 37",
    image: "/images/design-37.png",
    category: "Design",     tags: ["Design"]
  },
  {
    title: "Design 38",
    image: "/images/design-38.jpg",
    category: "Design",     tags: ["Design"]
  },
  {
    title: "Design 39",
    image: "/images/design-39.jpg",
    category: "Design",     tags: ["Design"]
  },
  {
    title: "Design 40",
    image: "/images/design-40.jpg",
    category: "Design",     tags: ["Design"]
  },
  {
    title: "Design 41",
    image: "/images/design-41.jpg",
    category: "Design",     tags: ["Design"]
  },
  {
    title: "Design 42",
    image: "/images/design-42.jpg",
    category: "Design",     tags: ["Design"]
  },
  {
    title: "Design 43",
    image: "/images/design-43.jpg",
    category: "Design",     tags: ["Design"]
  },
  {
    title: "Design 44",
    image: "/images/design-44.jpg",
    category: "Design",     tags: ["Design"]
  }
];

const services = [
  {
    title: "Video Editing",
    copy: "Professional video editing for commercials, documentaries, music videos, and social media content.",
    icon: Video
  },
  {
    title: "Cinematography",
    copy: "Cinematic camera work and lighting for films, branded content, and corporate videos.",
    icon: Camera
  },
  {
    title: "Graphic Design",
    copy: "Brand identity, print design, digital assets, and visual communication that tells your story.",
    icon: Palette
  },
  {
    title: "Color Grading",
    copy: "Expert color correction and grading to achieve the perfect mood and cinematic look.",
    icon: Sparkles
  },
  {
    title: "Motion Graphics",
    copy: "Dynamic motion graphics and animation for explainer videos, titles, and visual effects.",
    icon: WandSparkles
  },
  {
    title: "Creative Direction",
    copy: "End-to-end creative direction for branded content and multimedia campaigns.",
    icon: BadgeCheck
  }
];

const particles = [
  { left: "24%", top: "28%", size: 8, delay: 0 },
  { left: "50%", top: "70%", size: 2, delay: 0.6 },
  { left: "74%", top: "34%", size: 5, delay: 1.1 },
  { left: "40%", top: "24%", size: 4, delay: 1.5 },
  { left: "63%", top: "22%", size: 2, delay: 0.9 },
  { left: "31%", top: "61%", size: 3, delay: 1.8 }
];

const fadeIn = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.24 },
  transition: {
    duration: 0.7,
    ease: [0.22, 1, 0.36, 1] as [number, number, number, number]
  }
};

function SectionHeading({
  title,
  subtitle
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <motion.div {...fadeIn} className="mx-auto mb-12 max-w-2xl text-center">
      <h2 className="display-font text-4xl font-semibold tracking-normal text-paper md:text-5xl">
        {title}
      </h2>
      <p className="mt-4 text-base leading-7 text-muted md:text-lg">{subtitle}</p>
    </motion.div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-ink text-paper">
      <Header />
      <Hero />
      <About />
      <Portfolio />
      <Services />
      <Contact />
      <Footer />
    </main>
  );
}

function Header() {
  return (
    <header className="absolute left-0 right-0 top-0 z-30">
      <div className="section-shell flex items-center justify-between py-8">
        <a
          href="#home"
          className="display-font text-lg font-semibold uppercase tracking-[0.12em] text-accent"
        >
          Zeel Jain
        </a>
        <nav className="hidden items-center gap-8 text-sm font-semibold text-paper/[0.72] md:flex">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="transition-colors duration-200 hover:text-paper"
            >
              {item}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[610px] items-center overflow-hidden border-b hairline bg-ink px-4 pt-20 md:min-h-[760px]"
    >
      {particles.map((particle) => (
        <motion.span
          key={`${particle.left}-${particle.top}`}
          className="particle"
          style={{
            left: particle.left,
            top: particle.top,
            width: particle.size,
            height: particle.size
          }}
          animate={{ y: [0, -18, 0], opacity: [0.32, 0.82, 0.32] }}
          transition={{
            duration: 5.6,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}
      <motion.span
        className="particle-ring left-[49%] top-[24%] hidden md:block"
        animate={{ rotate: 360, scale: [1, 1.18, 1] }}
        transition={{ duration: 9, repeat: Infinity, ease: "linear" }}
      />
      <div className="section-shell relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1 className="display-font mx-auto text-7xl font-semibold leading-[0.95] tracking-normal text-paper sm:text-8xl md:text-[10rem]">
            Zeel Jain
          </h1>
          <p className="display-font mt-6 text-3xl font-semibold tracking-normal text-accent md:text-5xl">
            Cinematic Storyteller
          </p>
          <p className="mx-auto mt-6 flex max-w-3xl flex-wrap items-center justify-center gap-x-5 gap-y-2 text-lg font-medium text-muted md:text-xl">
            <span>Video Editor</span>
            <span>Graphic Designer</span>
            <span>Cinematographer</span>
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#portfolio"
              className="group inline-flex h-12 min-w-44 items-center justify-center gap-2 rounded-md bg-paper px-6 text-sm font-extrabold text-ink shadow-clean transition duration-200 hover:-translate-y-0.5 hover:bg-paper"
            >
              <Film size={17} strokeWidth={2.3} />
              View My Work
            </a>
            <a
              href="#contact"
              className="group inline-flex h-12 min-w-44 items-center justify-center gap-2 rounded-md border border-accent bg-accent px-6 text-sm font-extrabold text-white transition duration-200 hover:-translate-y-0.5 hover:bg-transparent hover:text-paper"
            >
              <Mail size={17} strokeWidth={2.3} />
              Get In Touch
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="border-b hairline bg-ink py-24 md:py-32">
      <div className="section-shell grid items-center gap-16 lg:grid-cols-[0.92fr_1fr]">
        <motion.div {...fadeIn}>
          <h2 className="display-font text-4xl font-semibold text-paper md:text-5xl">
            About Me
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
            With over 5 years of experience in visual storytelling, I blend
            technical expertise with creative vision to craft compelling
            narratives. My work spans from cinematic commercials to brand
            identities, always pushing the boundaries of visual communication.
          </p>
          <h3 className="mt-10 text-lg font-extrabold text-accent">
            Skills &amp; Expertise
          </h3>
          <div className="mt-6 space-y-5">
            {skills.map(([skill, value]) => (
              <div key={skill}>
                <div className="mb-2 flex items-center justify-between text-sm font-bold">
                  <span className="text-paper/[0.92]">{skill}</span>
                  <span className="text-accent">{value}%</span>
                </div>
                <div className="h-px overflow-hidden bg-paper/[0.12]">
                  <motion.div
                    className="h-px bg-accent"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${value}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
        <motion.div
          {...fadeIn}
          transition={{ ...fadeIn.transition, delay: 0.08 }}
          className="relative mx-auto w-full max-w-[730px]"
        >
          <div className="overflow-hidden rounded-lg border border-paper/[0.15] bg-card shadow-clean">
            <Image
              src="/images/about-frame.jpg"
              alt="Cinematographer operating a camera rig outdoors"
              width={730}
              height={1090}
              className="aspect-[0.67] w-full object-cover"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("Design");

  return (
    <section id="portfolio" className="border-b hairline bg-ink py-24 md:py-32">
      <div className="section-shell">
        <SectionHeading
          title="Featured Work"
          subtitle="A showcase of my recent projects in video editing, cinematography, and graphic design."
        />
        <motion.div
          {...fadeIn}
          className="mb-12 flex justify-center"
          transition={{ ...fadeIn.transition, delay: 0.04 }}
        >
          <div className="inline-flex rounded-md border border-paper/[0.12] bg-card p-1">
            {["Video", "Film", "Design"].map((filter) => (
              <button
                key={filter}
                className={`h-8 min-w-24 rounded px-5 text-xs font-extrabold transition duration-200 ${
                  filter === activeFilter
                    ? "bg-accent text-ink"
                    : "text-muted hover:text-paper"
                }`}
                type="button"
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>
        </motion.div>
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {portfolioItems
  .filter(
    (item) =>
      item.tags.includes(activeFilter)
  )
  .map((item, index) => (
            <motion.article
  key={item.title}
  {...fadeIn}
  transition={{ ...fadeIn.transition, delay: index * 0.05 }}
  whileHover={{ scale: 1.02 }}
  onClick={() => window.open(item.image, "_blank")}
  className="portfolio-card cursor-pointer group overflow-hidden rounded-lg border border-white/[0.08] bg-card shadow-clean transition duration-300 hover:-translate-y-1 hover:border-accent/[0.55]"
>
              <div className="relative aspect-[1.35] overflow-hidden bg-black">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover transition duration-700 group-hover:scale-105 group-hover:brightness-110"
                />
              </div>
              <div className="p-6">
                <h3 className="display-font text-xl font-semibold text-paper">
                  {item.title}
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded border border-accent/[0.22] bg-accent/[0.10] px-2.5 py-1 text-[11px] font-extrabold text-accent"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="border-b hairline bg-ink py-24 md:py-32">
      <div className="section-shell">
        <SectionHeading
          title="Services"
          subtitle="Professional creative services tailored to bring your vision to life."
        />
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.article
                key={service.title}
                {...fadeIn}
                transition={{ ...fadeIn.transition, delay: index * 0.05 }}
                className="group rounded-lg border border-white/[0.08] bg-card p-8 transition duration-300 hover:-translate-y-1 hover:border-accent/[0.55]"
              >
                <div className="mb-7 inline-flex h-12 w-12 items-center justify-center rounded-md border border-accent/[0.20] bg-accent/[0.10] text-accent transition duration-300 group-hover:bg-accent group-hover:text-ink">
                  <Icon size={22} strokeWidth={2.2} />
                </div>
                <h3 className="display-font text-2xl font-semibold text-paper">
                  {service.title}
                </h3>
                <p className="mt-4 text-base leading-7 text-muted">
                  {service.copy}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="border-b hairline bg-ink py-24 md:py-32">
      <div className="section-shell">
        <SectionHeading
          title="Get In Touch"
          subtitle="Have a project in mind? Let's collaborate and create something amazing together."
        />
        <div className="grid gap-8 lg:grid-cols-[1fr_0.48fr]">
          <motion.form
            {...fadeIn}
            className="rounded-lg border border-white/[0.08] bg-card p-8 shadow-clean"
          >
            <h3 className="display-font text-2xl font-semibold text-paper">
              Send a Message
            </h3>
            <p className="mt-2 text-sm text-muted">
              Fill out the form below and I&apos;ll get back to you as soon as
              possible.
            </p>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <label className="block text-sm font-bold text-paper/[0.86]">
                Name
                <input
                  className="mt-2 h-12 w-full rounded-md border border-white/[0.08] bg-ink px-4 text-paper outline-none transition placeholder:text-muted/[0.55] focus:border-accent"
                  placeholder="Your name"
                />
              </label>
              <label className="block text-sm font-bold text-paper/[0.86]">
                Email
                <input
                  className="mt-2 h-12 w-full rounded-md border border-white/[0.08] bg-ink px-4 text-paper outline-none transition placeholder:text-muted/[0.55] focus:border-accent"
                  placeholder="your@email.com"
                  type="email"
                />
              </label>
            </div>
            <label className="mt-6 block text-sm font-bold text-paper/[0.86]">
              Subject
              <input
                className="mt-2 h-12 w-full rounded-md border border-white/[0.08] bg-ink px-4 text-paper outline-none transition placeholder:text-muted/[0.55] focus:border-accent"
                placeholder="Project inquiry"
              />
            </label>
            <label className="mt-6 block text-sm font-bold text-paper/[0.86]">
              Message
              <textarea
                className="mt-2 min-h-36 w-full resize-none rounded-md border border-white/[0.08] bg-ink px-4 py-4 text-paper outline-none transition placeholder:text-muted/[0.55] focus:border-accent"
                placeholder="Tell me about your project..."
              />
            </label>
            <button
              type="button"
              className="mt-7 inline-flex h-12 w-full items-center justify-center gap-2 rounded-md bg-accent px-5 text-sm font-extrabold text-white transition duration-200 hover:-translate-y-0.5 hover:bg-paper hover:text-ink"
            >
              <Send size={17} strokeWidth={2.3} />
              Send Message
            </button>
          </motion.form>
          <motion.aside
            {...fadeIn}
            transition={{ ...fadeIn.transition, delay: 0.08 }}
            className="space-y-8"
          >
            <div className="rounded-lg border border-white/[0.08] bg-card p-8">
              <h3 className="display-font text-2xl font-semibold text-paper">
                Contact Info
              </h3>
              <div className="mt-7 space-y-5">
                <a
                  href="mailto:jzeel1466@gmail.com"
                  className="flex items-center gap-4 text-muted transition hover:text-paper"
                >
                  <Mail className="text-accent" size={19} />
                  <span>
                    <span className="block text-xs font-extrabold uppercase tracking-[0.12em] text-muted/[0.75]">
                      Email
                    </span>
                    jzeel1466@gmail.com
                  </span>
                </a>
                <a
                  href="tel:+919321428829"
                  className="flex items-center gap-4 text-muted transition hover:text-paper"
                >
                  <Phone className="text-accent" size={19} />
                  <span>
                    <span className="block text-xs font-extrabold uppercase tracking-[0.12em] text-muted/[0.75]">
                      Phone
                    </span>
                    +91 9321428829
                  </span>
                </a>
              </div>
            </div>
            <div className="rounded-lg border border-white/[0.08] bg-card p-8">
              <h3 className="display-font text-2xl font-semibold text-paper">
                Follow Me
              </h3>
              <div className="mt-7 flex gap-3">
                {[Instagram, Linkedin, Youtube, ArrowRight].map((Icon, index) => (
                  <a
                    aria-label={`Social link ${index + 1}`}
                    className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-white/[0.08] bg-ink text-muted transition duration-200 hover:-translate-y-0.5 hover:border-accent hover:text-paper"
                    href="#"
                    key={index}
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-ink py-14">
      <div className="section-shell">
        <div className="grid gap-10 border-b border-white/[0.08] pb-12 md:grid-cols-[1.1fr_0.7fr_0.7fr]">
          <div>
            <a
              href="#home"
              className="display-font text-lg font-semibold uppercase tracking-[0.12em] text-accent"
            >
              Zeel Jain
            </a>
            <p className="mt-5 max-w-sm text-base leading-7 text-muted">
              Cinematic storyteller crafting visual narratives through video
              editing, cinematography, and graphic design.
            </p>
          </div>
          <div>
            <h3 className="display-font text-lg font-semibold text-paper">
              Quick Links
            </h3>
            <div className="mt-5 grid gap-3 text-sm text-muted">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="transition hover:text-paper"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h3 className="display-font text-lg font-semibold text-paper">
              Connect
            </h3>
            <div className="mt-5 flex gap-3">
              {[Instagram, Linkedin, Youtube, ArrowRight].map((Icon, index) => (
                <a
                  aria-label={`Footer social link ${index + 1}`}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/[0.08] bg-card text-muted transition hover:border-accent hover:text-paper"
                  href="#"
                  key={index}
                >
                  <Icon size={17} />
                </a>
              ))}
            </div>
          </div>
        </div>
        <p className="pt-8 text-center text-sm text-muted/[0.70]">
          &copy; 2026 Zeel Jain. All rights reserved.
        </p>
      </div>
    </footer>
  );
}


