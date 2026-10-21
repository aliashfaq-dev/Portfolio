import { useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import {
  ArrowDown, ArrowDownRight, ArrowRight, ArrowUpRight, Code2, Github,
  Linkedin, Mail, Menu, X, MapPin, Sparkles, ExternalLink, Braces,
  Layers3, Smartphone, Send, GraduationCap, Heart, MoveUpRight
} from 'lucide-react'


const skills = [
  { name: 'React', symbol: '⚛', color: 'cyan', level: 'UI development' },
  { name: 'JavaScript', symbol: 'JS', color: 'yellow', level: 'Interactions & logic' },
  { name: 'Tailwind CSS', symbol: '≈', color: 'sky', level: 'Responsive styling' },
  { name: 'HTML5', symbol: '5', color: 'orange', level: 'Semantic structure' },
  { name: 'CSS3', symbol: '3', color: 'blue', level: 'Layouts & animation' },
  { name: 'Bootstrap', symbol: 'B', color: 'purple', level: 'Rapid UI building' },
  { name: 'Git', symbol: '⌘', color: 'red', level: 'Version control' },
  { name: 'GitHub', symbol: '↗', color: 'white', level: 'Code collaboration' },
]

const projects = [
  {
    number: '01',
    name: 'Tripora',
    type: 'TRAVEL MARKETPLACE',
    description: 'A travel marketplace experience for discovering trips, exploring destinations and connecting with trip hosts.',
    stack: ['React', 'Tailwind CSS', 'REST API', 'FIREBASE'],
    theme: 'tripora',
    label: 'Explore The Journey',
    href: 'https://github.com/aliashfaq-dev/tripora',
    link: 'https://triporaa-beta.vercel.app/'
  },
  {
    number: '02',
    name: 'Product Explorer',
    type: 'Products & DISCOVERY',
    description: 'A responsive shopping application experience with clean interface.',
    stack: ['HTML', 'JS', 'API'],
    theme: 'product',
    label: 'Admire The Design',
    href: 'https://github.com/aliashfaq-dev/Product-Explorer',
    link: 'https://productt-explorer.vercel.app/'
  },
  {
    number: '03',
    name: 'Recipe Explorer',
    type: 'RECIPE PLATFORM',
    description: 'A simple recipe application focused on easy-to-use dashboard.',
    stack: ['HTML', 'CSS', 'JS'],
    theme: 'recipe',
    label: 'Taste The Recipe',
    href: 'https://github.com/aliashfaq-dev/Recipe-Explorer',
    link: 'https://recipe-explorer-ali-4be7.vercel.app/'
  },
]

const navItems = [
  ['Home', '#home'],
  ['About', '#about'],
  ['Skills', '#skills'],
  ['Projects', '#projects'],
  ['Contact', '#contact'],
]

function Reveal({ children, className = '', delay = 0, ...props }) {
  const reduceMotion = useReducedMotion()
  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
      {...props}
    >
      {children}
    </motion.div>
  )
}

function SectionHeading({ eyebrow, title, text }) {
  return (
    <div className="section-heading">
      <span className="eyebrow"><span className="eyebrow-dot" />{eyebrow}</span>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  )
}

function Navbar() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('#home')

  const navigate = (href) => {
    setActive(href)
    setOpen(false)
  }

  return (
    <header className="navbar">
      <div className="container nav-inner">
        <a className="brand" href="#home" onClick={() => navigate('#home')} aria-label="Ali Ashfaq home">
          <span className="brand-mark">A<span>/</span></span>
          <span className="brand-name">Ali<span>Ashfaq</span><small>FRONTEND DEVELOPER</small></span>
        </a>

        <nav className={`nav-links ${open ? 'nav-open' : ''}`} aria-label="Main navigation">
          {navItems.map(([label, href]) => (
            <a key={href} className={active === href ? 'nav-link active' : 'nav-link'} href={href} onClick={() => navigate(href)}>
              {label}
            </a>
          ))}
          <a className="nav-mobile-cta" href="#contact" onClick={() => navigate('#contact')}>Let's talk <ArrowUpRight size={16} /></a>
        </nav>

        <a className="nav-cta" href="#contact">Let's talk <ArrowUpRight size={16} /></a>
        <button className="menu-toggle" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section id="home" className="hero section-anchor">
      <div className="hero-orb orb-one" />
      <div className="hero-orb orb-two" />
      <div className="hero-grid" />
      <div className="container hero-layout">
        <div className="hero-copy">
          <motion.div className="status-pill" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}>
            <span className="status-pulse" /> AVAILABLE FOR OPPORTUNITIES
          </motion.div>
          <motion.p className="hero-intro" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.25 }}>HEY THERE, I'M</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35, duration: 0.7 }}>
            Ali Ashfaq<span className="name-period">.</span>
          </motion.h1>
          <div className="hero-role">
            <span>I build</span>{' '}
            <TypeAnimation
              sequence={['web experiences.', 1700, 'responsive interfaces.', 1700, 'things for the web.', 1700]}
              wrapper="span"
              speed={55}
              repeat={Infinity}
              className="typed-text"
            />
          </div>
          <motion.p className="hero-description" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
            Frontend developer focused on creating clean, responsive and engaging websites with React, JavaScript and Tailwind CSS.
          </motion.p>
          <motion.div className="hero-actions" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.62 }}>
            <a className="button button-primary" href="#projects">Explore my work <ArrowUpRight size={17} /></a>
            <a className="button button-ghost" href="#con tact">Let's connect <ArrowRight size={17} /></a>
          </motion.div>
          <motion.div className="hero-socials" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}>
            <a href="https://github.com/aliashfaq-dev" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={19} /></a>
            <a href="https://www.linkedin.com/in/ali-ashfaq-dev-7532033a6/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={19} /></a>
            <a href="mailto:muhammedaliashfaq@gmail.com" aria-label="Email"><Mail size={19} /></a>
            <span className="social-line" />
            <span className="social-caption">LET'S BUILD SOMETHING</span>
          </motion.div>
        </div>

        <motion.div className="hero-visual" initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3, duration: 0.8 }}>
          <div className="visual-glow" />
          <motion.div className="orbit orbit-a" animate={{ rotate: 360 }} transition={{ duration: 28, repeat: Infinity, ease: 'linear' }} />
          <motion.div className="orbit orbit-b" animate={{ rotate: -360 }} transition={{ duration: 36, repeat: Infinity, ease: 'linear' }} />
          <motion.div className="hero-code-card float-slow">
            <div className="code-card-top"><span /><span /><span /><small>developer.jsx</small></div>
            <div className="code-lines">
              <p><i>01</i> <b>const</b> <em>developer</em> = {'{'}</p>
              <p><i>02</i> &nbsp; passion: <strong>'design'</strong>,</p>
              <p><i>03</i> &nbsp; skills: [<strong>'React'</strong>],</p>
              <p><i>04</i> &nbsp; build: <b>true</b></p>
              <p><i>05</i> {'}'}</p>
            </div>
          </motion.div>
          <motion.div className="tech-float tech-react" animate={{ y: [0, -12, 0], rotate: [0, 7, 0] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}>
            <span className="react-mark">⚛</span><small>REACT</small>
          </motion.div>
          <motion.div className="tech-float tech-tailwind" animate={{ y: [0, 10, 0], rotate: [0, -5, 0] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}>
            <span>≈</span><small>TAILWIND</small>
          </motion.div>
          <motion.div className="tech-float tech-js" animate={{ y: [0, -9, 0] }} transition={{ duration: 3.7, repeat: Infinity, ease: 'easeInOut' }}>
            <span>JS</span><small>JAVASCRIPT</small>
          </motion.div>
          <motion.div className="developer-core" animate={{ y: [0, -8, 0] }} transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}>
            <div className="developer-head"><div className="hair" /><div className="face"><span className="eye eye-left" /><span className="eye eye-right" /><span className="smile" /></div></div>
            <div className="developer-neck" />
            <div className="developer-body"><span className="hoodie-seam" /><Code2 className="hoodie-icon" size={34} /></div>
            <div className="laptop"><div className="laptop-logo">A<span>/</span></div><div className="laptop-base" /></div>
          </motion.div>
          <div className="visual-caption"><span className="caption-line" /><span>CRAFTING DIGITAL EXPERIENCES</span></div>
          <motion.div className="sparkle sparkle-one" animate={{ scale: [1, 1.5, 1], opacity: [0.4, 1, 0.4] }} transition={{ duration: 2.4, repeat: Infinity }}><Sparkles size={20} /></motion.div>
          <motion.div className="sparkle sparkle-two" animate={{ rotate: [0, 90, 0], y: [0, -7, 0] }} transition={{ duration: 4, repeat: Infinity }}><Braces size={25} /></motion.div>
        </motion.div>
      </div>
    </section>
  )
}

function About() {
  return (
    <section id="about" className="section section-anchor">
      <div className="container">
        <Reveal><SectionHeading eyebrow="A LITTLE ABOUT ME" title={<>Not just code.<br /><span className="gradient-text">An eye for detail.</span></>} text="I enjoy turning ideas into digital experiences that feel simple, thoughtful and intuitive." /></Reveal>
        <div className="about-grid">
          <Reveal className="about-main" delay={0.08}>
            <div className="about-icon"><Code2 size={30} /></div>
            <span className="card-kicker">THE DEVELOPER BEHIND THE SCREEN</span>
            <h3>Hi, I'm Ali — a frontend developer from <span className="gradient-text">Karachi, Pakistan.</span></h3>
            <p>I build modern web interfaces with a focus on responsive layouts, clean code and a smooth user experience. I love learning new tools, solving UI challenges and bringing designs to life with React.</p>
            <div className="about-location"><MapPin size={16} /><span>Karachi, Pakistan</span><span className="location-divider" /><span className="available-dot" /> Open to learning & opportunities</div>
          </Reveal>
          <Reveal className="about-values" delay={0.16}>
            {[
              { icon: <Layers3 size={20} />, title: 'Thoughtful interfaces', text: 'Layouts that feel clear and easy to use.' },
              { icon: <Braces size={20} />, title: 'Clean code', text: 'Reusable components and maintainable structure.' },
              { icon: <Heart size={20} />, title: 'Always learning', text: 'Growing my skills one project at a time.' },
            ].map((item) => <div className="value-row" key={item.title}><div className="value-icon">{item.icon}</div><div><h4>{item.title}</h4><p>{item.text}</p></div><ArrowUpRight className="value-arrow" size={17} /></div>)}
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function Skills() {
  return (
    <section id="skills" className="section skills-section section-anchor">
      <div className="container">
        <Reveal><SectionHeading eyebrow="MY TOOLKIT" title={<>Tools I use to <span className="gradient-text">make it happen.</span></>} text="The technologies I use to create responsive, engaging web experiences." /></Reveal>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <Reveal key={skill.name} delay={index * 0.045}>
              <motion.div className="skill-card" whileHover={{ y: -7, scale: 1.025 }} transition={{ type: 'spring', stiffness: 300, damping: 18 }}>
                <div className={`skill-symbol ${skill.color}`}>{skill.symbol}</div>
                <h3>{skill.name}</h3>
                <p>{skill.level}</p>
                <span className="skill-arrow"><ArrowUpRight size={15} /></span>
              </motion.div>
            </Reveal>
          ))}
        </div>
        <Reveal className="learning-banner" delay={0.15}>
          <div className="learning-icon"><Sparkles size={21} /></div>
          <div><h3>Currently growing into a MERN Stack Developer</h3><p>Learning, building and improving with every project.</p></div>
          <div className="learning-orbit"><span /><span /><span /></div>
        </Reveal>
      </div>
    </section>
  )
}

function ProjectVisual({ theme }) {
  if (theme === 'tripora') return (
   <img
    src='/src/img/Tripora.png'
    alt="Trip Explorer Project"
    className="product-image"
  />
  )
  if (theme === 'recipe') return (
  <img
    src='/src/img/RecipeExplorer.png'
    alt="Recipe Explorer Projec"
    className="product-image"
  />
  )
  if (theme === 'product') return (
    
  <img
    src='/src/img/ProductExplorer.png'
    alt="Product Explorer Project"
    className="product-image"
  />

  );
}

function Projects() {
  return (
    <section id="projects" className="section projects-section section-anchor">
      <div className="container">
        <Reveal><div className="projects-heading-row"><SectionHeading eyebrow="SELECTED WORK" title={<>A few things I've <span className="gradient-text">built.</span></>} text="A selection of projects where I turn ideas into useful interfaces." /><a className="text-link all-projects-link" href="https://github.com/aliashfaq-dev" target="_blank" rel="noreferrer">More on GitHub <ArrowUpRight size={16} /></a></div></Reveal>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <Reveal key={project.name} delay={index * 0.1}>

              <motion.article
                className="project-card"
               
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 260, damping: 22 }}
              >
                <div className="project-image-wrap"  ><ProjectVisual theme={project.theme} /><span className="project-number">{project.number}</span><a className="project-open" href={project.href} target="_blank" rel="noreferrer" aria-label={`Open ${project.name}`}><Github size={19} /></a></div>
                <div className="project-body cursor-pointer"  onClick={() =>
                  window.open(project.link, "_blank")
                }>
                  <span className="project-type">{project.type}</span>
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                  <div className="project-tags">{project.stack.map((tag) => <span key={tag}>{tag}</span>)}</div>
                  <a className="project-link" href={project.href} target="_blank" rel="noreferrer">{project.label} <ArrowUpRight size={15} /></a>
                </div>
              </motion.article>

            </Reveal>
          ))}
        </div>
        <Reveal className="project-note" delay={0.15}><span className="note-icon"><Code2 size={18} /></span><p>These are selected projects. Explore my GitHub for more experiments and learning projects.</p><a href="https://github.com/aliashfaq-dev" target="_blank" rel="noreferrer">View GitHub <ArrowRight size={15} /></a></Reveal>
      </div>
    </section>
  )
}

function Education() {
  return (
    <section className="section education-section">
      <div className="container education-layout">
        <Reveal className="education-card">
          <span className="eyebrow"><span className="eyebrow-dot" /> MY JOURNEY</span>
          <div className="education-main"><div className="education-icon"><GraduationCap size={28} /></div><div><h3>Education & growth</h3><p className="education-title">Matriculation completed</p><p className="muted">Currently studying in college</p></div></div>
          <div className="education-foot"><span className="tiny-star">✳</span> Every day is a chance to learn something new.</div>
        </Reveal>
        <Reveal className="education-quote" delay={0.12}>
          <div className="quote-mark">“</div><p>Good design gets attention.<br /><span className="gradient-text">A great experience earns trust.</span></p><span className="quote-byline">MY APPROACH TO EVERY PROJECT</span>
          <div className="quote-decoration"><span /><span /><span /></div>
        </Reveal>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="section contact-section section-anchor">
      <div className="container">
        <Reveal className="contact-panel">
          <div className="contact-glow" />
          <div className="contact-copy">
            <span className="eyebrow"><span className="eyebrow-dot" /> HAVE A PROJECT IN MIND?</span>
            <h2>Let's make<br /><span className="gradient-text">something great.</span></h2>
            <p>Have an idea, an opportunity, or just want to say hello? My inbox is always open.</p>
            <a className="button button-primary" href="mailto:muhammedaliashfaq@gmail.com">Send me a message <Send size={16} /></a>
          </div>
          <div className="contact-details">
            <a className="contact-item" href="mailto:muhammedaliashfaq@gmail.com"><span className="contact-item-icon"><Mail size={19} /></span><span><small>EMAIL ME AT</small><b>muhammedaliashfaq@gmail.com</b></span><ArrowUpRight size={17} /></a>
            <a className="contact-item" href="https://www.linkedin.com/in/ali-ashfaq-dev-7532033a6/" target="_blank" rel="noreferrer"><span className="contact-item-icon"><Linkedin size={19} /></span><span><small>CONNECT ON</small><b>LinkedIn</b></span><ArrowUpRight size={17} /></a>
            <a className="contact-item" href="https://github.com/aliashfaq-dev" target="_blank" rel="noreferrer"><span className="contact-item-icon"><Github size={19} /></span><span><small>CHECK OUT MY CODE</small><b>GitHub</b></span><ArrowUpRight size={17} /></a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function Footer() {
  const [year] = useState(new Date().getFullYear())
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <a className="footer-brand" href="#home"><span className="brand-mark">A<span>/</span></span><span>Ali Ashfaq</span></a>
        <p>Designed with intention. Built with React <span className="footer-heart">♥</span> and Tailwind.</p>
        <div className="footer-right"><span>© {year} Ali Ashfaq</span><a href="#home" aria-label="Back to top"><MoveUpRight size={17} /></a></div>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <div className="site-shell">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}