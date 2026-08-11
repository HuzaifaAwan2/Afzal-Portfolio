import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaBriefcase, FaArrowUpRightFromSquare } from 'react-icons/fa6';
import './Experience.css';

const videos = [
  {
    id: 'SqhV9Nd9oFE',
    title: 'AI Video Project 01',
  },
  {
    id: '7PywhbuchK0',
    title: 'AI Video Project 02',
  },
  {
    id: 'KC-b1EmUQuk',
    title: 'AI Video Project 03',
  },
  {
    id: 'EX1pp18oF7Q',
    title: 'AI Video Project 04',
  },
  {
    id: '5mS-Cvbp3go',
    title: 'AI Video Project 05',
  },
  {
    id: 'tcYBO5v292Y',
    title: 'AI Video Project 06',
  },
];

const experiences = [
  {
    title: 'AI Content Creator | AI Video Editor',
    company: 'Zeetech Pvt. Ltd.',
    period: 'Dec 2022 – Present',
    description: [
      'Created AI-powered videos including AI avatars, clone videos, and faceless content.',
      'Produced CashCow YouTube, Shorts, Reels, and automated video content for multiple platforms.',
      'Developed AI ads, UGC-style videos, product ads, animations, and promotional creatives using modern AI tools and professional editing techniques.',
    ],
    current: true,
  },
  {
    title: 'Media Content Creator',
    company: 'Roysons International',
    period: 'Nov 2021 – Nov 2022',
    description: [
      'Produced company ads, product commercials, and animated explainers.',
      'Designed daily social media graphics and short-form video content.',
      'Managed end-to-end content production pipeline.',
    ],
    current: false,
  },
  {
    title: 'Video Editor',
    company: 'Maya Marketing',
    period: 'Jan 2021 – Oct 2021',
    description: [
      'Edited promotional and corporate content for marketing campaigns.',
      'Created visually appealing ad videos for Facebook, Instagram, and YouTube.',
      'Assisted in storyboarding and concept development.',
    ],
    current: false,
  },
  {
    title: 'Freelance Video Editor',
    company: 'Wedding & Song Editing',
    period: 'Jan 2020 – Dec 2020',
    description: [
      'Edited cinematic wedding highlights and traditional event videos.',
      'Created engaging music video edits with smooth transitions and effects.',
      'Built client relationships through quality delivery and communication.',
    ],
    current: false,
  },
];

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.05,
  });

  return (
    <section id="experience" className="section experience">
      <div
        className="glow-blob glow-pink"
        style={{
          width: 350,
          height: 350,
          top: '20%',
          right: '-10%',
        }}
      />

      <div
        className="glow-blob glow-blue"
        style={{
          width: 300,
          height: 300,
          bottom: '10%',
          left: '-8%',
        }}
      />

      <div className="section-container" ref={ref}>
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="section-subtitle">My Journey</span>

          <h2 className="section-title">Work Experience</h2>

          <div className="section-line" />
        </motion.div>

        {/* =========================
            FEATURED VIDEO WORK
        ========================== */}

        <motion.div
          className="video-showcase"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          <div className="video-showcase-heading">
            <span className="video-eyebrow">Selected Work</span>

            <h3>Featured Video Projects</h3>

            <p>
              A selection of AI videos, advertisements and creative
              productions from my recent work.
            </p>
          </div>

          <div className="video-grid">
            {videos.map((video, index) => (
              <motion.article
                key={video.id}
                className="video-card"
                initial={{
                  opacity: 0,
                  y: 35,
                  scale: 0.97,
                }}
                animate={
                  inView
                    ? {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                      }
                    : {}
                }
                transition={{
                  duration: 0.55,
                  delay: 0.2 + index * 0.08,
                }}
                whileHover={{
                  y: -6,
                }}
              >
                <div className="video-card-number">
                  {String(index + 1).padStart(2, '0')}
                </div>

                <div className="video-frame">
                  <iframe
                    src={`https://www.youtube.com/embed/${video.id}?rel=0`}
                    title={video.title}
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>

                <div className="video-card-footer">
                  <div>
                    <span>Featured Project</span>
                    <h4>{video.title}</h4>
                  </div>

                  <a
                    href={`https://www.youtube.com/watch?v=${video.id}`}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Watch ${video.title} on YouTube`}
                  >
                    <FaArrowUpRightFromSquare />
                  </a>
                </div>
              </motion.article>
            ))}
          </div>

          <motion.div
            className="portfolio-button-wrapper"
            initial={{ opacity: 0, y: 25 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.75 }}
          >
            <a
              href="https://drive.google.com/drive/folders/1PJiQNeinkW6dV4DoLZjNd-eexLnDtno-?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="portfolio-button"
            >
              <span>View My Portfolio</span>
              <FaArrowUpRightFromSquare />
            </a>
          </motion.div>
        </motion.div>

        {/* =========================
            EXPERIENCE TIMELINE
        ========================== */}

        <div className="timeline">
          <div className="timeline-line" />

          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              className={`timeline-item ${
                i % 2 === 0 ? 'left' : 'right'
              }`}
              initial={{
                opacity: 0,
                x: i % 2 === 0 ? -60 : 60,
              }}
              animate={
                inView
                  ? {
                      opacity: 1,
                      x: 0,
                    }
                  : {}
              }
              transition={{
                duration: 0.7,
                delay: i * 0.2,
              }}
            >
              <div className="timeline-dot-wrapper">
                <div
                  className={`timeline-dot ${
                    exp.current ? 'active' : ''
                  }`}
                >
                  <FaBriefcase />
                </div>
              </div>

              <div className="timeline-card hoverable">
                <div className="timeline-card-header">
                  <div>
                    <h3 className="timeline-title">{exp.title}</h3>
                    <p className="timeline-company">{exp.company}</p>
                  </div>

                  <span
                    className={`timeline-period ${
                      exp.current ? 'current' : ''
                    }`}
                  >
                    {exp.period}
                  </span>
                </div>

                <ul className="timeline-tasks">
                  {exp.description.map((task, j) => (
                    <li key={j}>{task}</li>
                  ))}
                </ul>

                {exp.current && (
                  <span className="current-badge">Current</span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;