import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaFilm, FaPaintBrush, FaYoutube, FaBullhorn } from 'react-icons/fa';
import './About.css';

const services = [
  {
    icon: <FaFilm />,
    title: 'Video Editing',
    desc: 'Professional editing for YouTube, commercials, and social media with cinematic quality.',
  },
  {
    icon: <FaPaintBrush />,
    title: 'Graphic Design',
    desc: 'Eye-catching thumbnails, branding materials, and social media graphics that stand out.',
  },
  {
    icon: <FaYoutube />,
    title: 'YouTube Content',
    desc: 'Cash Cow videos, Shorts, and automation channel content with engaging storytelling.',
  },
  {
    icon: <FaBullhorn />,
    title: 'Ad & Marketing',
    desc: 'Compelling promotional videos and ads for Facebook, Instagram, and YouTube campaigns.',
  },
  {
    icon: <FaBullhorn />,
    title: 'AI Video Editing',
    desc: 'Professional AI-powered video editing with smooth cuts, transitions, effects, captions, and engaging visual storytelling',
  },
  {
    icon: <FaBullhorn />,
    title: 'AI Avatar & Clone Videos',
    desc: 'Realistic AI avatar, talking-head, voice clone, and digital clone videos for brands, creators, and businesses.',
  },
  {
    icon: <FaBullhorn />,
    title: 'Faceless YouTube Videos',
    desc: 'Complete faceless YouTube videos with engaging visuals, AI voiceovers, storytelling, editing, and motion graphics.',
  },
  {
    icon: <FaBullhorn />,
    title: 'CashCow & YouTube Automation',
    desc: 'High-retention CashCow and automated YouTube content built for scalable channels, Shorts, and long-form videos.',
  },
  {
    icon: <FaBullhorn />,
    title: 'AI Ads & Product Videos',
    desc: 'Scroll-stopping AI product ads, commercial videos, promotional creatives, and social media advertisements.',
  },
  {
    icon: <FaBullhorn />,
    title: 'UGC Ad Videos',
    desc: 'Natural and conversion-focused UGC-style videos for TikTok, Instagram, Facebook, and eCommerce brands.',
  },
  {
    icon: <FaBullhorn />,
    title: 'Animation & Cartoon Videos',
    desc: 'Creative animated, cartoon-style, motion graphics, explainer, and AI-generated storytelling videos.',
  },
  {
    icon: <FaBullhorn />,
    title: 'Graphic Design & Thumbnails',
    desc: 'Eye-catching YouTube thumbnails, social media graphics, ad creatives, branding visuals, and promotional designs.',
  },
];

const About = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <section id="about" className="section about">
      <div className="glow-blob glow-purple" style={{ width: 350, height: 350, top: '10%', left: '-10%' }} />
      <div className="section-container" ref={ref}>
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2 className="section-title">About Me</h2>
          <p>I bring ideas to life through AI-powered visual storytelling</p>
          <div className="section-line" />
        </motion.div>

        <div className="about-grid">
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="about-heading">
              I bring ideas to life through <span className="gradient-text">visual storytelling</span>
            </h3>
            <p className="about-paragraph">
              I am an AI Content Creator & AI Video Editor with <strong>6+ years</strong> of hands-on experience creating engaging content for YouTube, social media, brands, and digital advertising. I specialize in combining AI tools with professional video editing to produce high-quality, attention-grabbing content.
              <span> From AI avatars and clone videos to faceless YouTube channels, CashCow content, UGC ads, product commercials, animations, and AI-powered ad creatives,</span> I help turn ideas into polished videos designed to engage audiences and strengthen brands.
            </p>
            <p className="about-paragraph">
              My strength lies in telling stories through visuals — from dynamic video cuts and smooth 
              transitions to eye-catching thumbnails and branding designs. I have collaborated with 
              various clients and teams to bring ideas to life, always meeting deadlines and exceeding 
              expectations.
            </p>
            <div className="about-info-grid">
              <div className="info-item">
                <span className="info-label">Name</span>
                <span className="info-value">Muhammad Afzaal Rasheed</span>
              </div>
              <div className="info-item">
                <span className="info-label">Location</span>
                <span className="info-value">Lahore, Pakistan</span>
              </div>
              <div className="info-item">
                <span className="info-label">Experience</span>
                <span className="info-value">6+ Years</span>
              </div>
              <div className="info-item">
                <span className="info-label">Available</span>
                <span className="info-value available">For Freelance</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="about-services"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            {services.map((service, i) => (
              <motion.div
                key={i}
                className="service-card hoverable"
                variants={itemVariants}
              >
                <div className="service-icon">{service.icon}</div>
                <div className="service-info">
                  <h4>{service.title}</h4>
                  <p>{service.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
