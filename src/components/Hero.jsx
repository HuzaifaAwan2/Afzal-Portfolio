import { motion } from 'framer-motion';
import { FaPlay, FaEnvelope, FaFolderOpen } from 'react-icons/fa';
import { HiDownload } from 'react-icons/hi';
import './Hero.css';


const Hero = () => {
  return (
    <section id="home" className="hero">
      <motion.div
        className="hero-content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
      >
        <div className="hero-badge">
          <FaPlay className="badge-icon" />
          <span>AI Content Creator & Video Editor </span>
        </div>

        <div className="hero-name">
          <div className="hero-name-line">
            <span className="hero-word">MUHAMMAD</span>
            <span className="hero-word">AFZAAL</span>
          </div>
          <div className="hero-name-line accent-line">
            <span className="hero-word accent">RASHEED</span>
          </div>
        </div>

        <p className="hero-description">
          AI Content Creator & AI Video Editor crafting visually engaging, high-impact content that captures attention and drives engagement. 6+ years of experience in video editing, motion graphics, graphic design, faceless videos, and social media content for YouTube, digital platforms, and commercial brands. Skilled in combining AI tools with creative storytelling to produce modern, scroll-stopping visuals and videos.
        </p>

        <div className="hero-buttons">
          <a
  href="/Muhammad_Afzaal_Rasheed_CV.pdf"
  download="Muhammad_Afzaal_Rasheed_CV.pdf"
  className="btn-primary hoverable"
>
  <span>⬇</span>
  Get My Resume
</a>
          <a href="https://drive.google.com/drive/folders/1PJiQNeinkW6dV4DoLZjNd-eexLnDtno-?usp=sharing"  target="_blank" rel="noopener noreferrer" className="btn-outline hoverable">
            <FaFolderOpen />
            View My Portfolio
          </a>
        </div>

        <div className="hero-stats">
          <div className="stat">
            <span className="stat-number">6+</span>
            <span className="stat-label">Years Experience</span>
          </div>
          <div className="stat-divider" />
          <div className="stat">
            <span className="stat-number">200+</span>
            <span className="stat-label">Projects Done</span>
          </div>
          <div className="stat-divider" />
          <div className="stat">
            <span className="stat-number">190+</span>
            <span className="stat-label">Happy Clients</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
