import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import {
  SiAdobepremierepro,
  SiAdobephotoshop,
  SiAdobeaftereffects,
  SiCanva,
} from 'react-icons/si';

import {
  FaCut,
  FaFilm,
  FaMagic,
  FaRobot,
  FaVideo,
  FaMicrophone,
  FaUserCircle,
  FaPlayCircle,
} from 'react-icons/fa';

import './Skills.css';

const skills = [
  {
    name: 'Adobe Premiere Pro',
    icon: <SiAdobepremierepro />,
    level: 95,
    color: '#9999FF',
    category: 'Video Editing',
  },
  {
    name: 'Adobe After Effects',
    icon: <SiAdobeaftereffects />,
    level: 85,
    color: '#CF96FD',
    category: 'Motion Graphics',
  },
  {
    name: 'Adobe Photoshop',
    icon: <SiAdobephotoshop />,
    level: 90,
    color: '#31A8FF',
    category: 'Graphic Design',
  },
  {
    name: 'Runway AI',
    icon: <FaMagic />,
    level: 90,
    color: '#7C5CFF',
    category: 'AI Video',
  },
  {
    name: 'HeyGen AI',
    icon: <FaUserCircle />,
    level: 90,
    color: '#7B61FF',
    category: 'AI Avatars',
  },
  {
    name: 'Google Veo',
    icon: <FaVideo />,
    level: 90,
    color: '#4285F4',
    category: 'AI Video',
  },
  {
    name: 'CapCut',
    icon: <FaCut />,
    level: 92,
    color: '#00F0B5',
    category: 'Video Editing',
  },
  {
    name: 'Filmora',
    icon: <FaFilm />,
    level: 88,
    color: '#00D4AA',
    category: 'Video Editing',
  },
  {
    name: 'Canva',
    icon: <SiCanva />,
    level: 85,
    color: '#00C4CC',
    category: 'Graphic Design',
  },
  {
    name: 'Hailuo AI',
    icon: <FaPlayCircle />,
    level: 85,
    color: '#FF6B81',
    category: 'AI Video',
  },
  {
    name: 'Kling AI',
    icon: <FaRobot />,
    level: 85,
    color: '#8B5CF6',
    category: 'AI Video',
  },
  {
    name: 'ElevenLabs',
    icon: <FaMicrophone />,
    level: 85,
    color: '#FFFFFF',
    category: 'AI Voice',
  },
];

const additionalSkills = [
  'Color Grading',
  'Motion Graphics',
  'Thumbnail Design',
  'Social Media Content',
  'YouTube Optimization',
  'Storyboarding',
  'AI Video Generation',
  'AI Avatar Videos',
  'AI Clone Videos',
  'Faceless YouTube Content',
  'YouTube Automation',
  'UGC Video Ads',
  'Sound Design',
  'Video Transitions',
  'Brand Identity',
  'Short-form Content',
  'Wedding Videography',
  'Commercial Ads',
  'Product Commercials',
  'AI Voiceovers',
  'Motion Graphics',
  'Short-Form Content',
  'Cinematic Video Editing',
  'Prompt Engineering',
  
];

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="skills section" id="skills">
      {/* Background Glow Effects */}
      <div
        className="glow-blob glow-purple"
        style={{
          width: 300,
          height: 300,
          bottom: '10%',
          right: '-5%',
        }}
      />

      <div
        className="glow-blob glow-blue"
        style={{
          width: 250,
          height: 250,
          top: '15%',
          left: '-5%',
        }}
      />

      <div className="section-container" ref={ref}>
        {/* Section Header */}
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="section-subtitle">What I Use</span>

          <h2 className="section-title">
            Tools & <span className="gradient-text">Skills</span>
          </h2>

          <p className="section-description">
            Professional editing, design and AI-powered tools I use to create
            engaging visual content.
          </p>

          <div className="section-line" />
        </motion.div>

        {/* Main Skills Grid */}
        <div className="skills-grid">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              className="skill-card hoverable"
              initial={{
                opacity: 0,
                y: 40,
              }}
              animate={
                inView
                  ? {
                      opacity: 1,
                      y: 0,
                    }
                  : {}
              }
              transition={{
                duration: 0.6,
                delay: i * 0.08,
              }}
            >
              {/* Card Top */}
              <div className="skill-card-top">
                <div
                  className="skill-icon"
                  style={{
                    color: skill.color,
                    background: `${skill.color}15`,
                    borderColor: `${skill.color}25`,
                  }}
                >
                  {skill.icon}
                </div>

                <span className="skill-category">
                  {skill.category}
                </span>
              </div>

              {/* Tool Name */}
              <h4 className="skill-name">
                {skill.name}
              </h4>

              {/* Progress Bar */}
              <div className="skill-bar-container">
                <motion.div
                  className="skill-bar"
                  style={{
                    background: `linear-gradient(
                      90deg,
                      ${skill.color},
                      ${skill.color}88
                    )`,
                  }}
                  initial={{
                    width: 0,
                  }}
                  animate={
                    inView
                      ? {
                          width: `${skill.level}%`,
                        }
                      : {
                          width: 0,
                        }
                  }
                  transition={{
                    duration: 1.2,
                    delay: 0.5 + i * 0.08,
                    ease: 'easeOut',
                  }}
                />
              </div>

              {/* Progress Info */}
              <div className="skill-bar-info">
                <span className="skill-level-text">
                  Proficiency
                </span>

                <motion.span
                  className="skill-percentage"
                  style={{
                    color: skill.color,
                  }}
                  initial={{
                    opacity: 0,
                  }}
                  animate={
                    inView
                      ? {
                          opacity: 1,
                        }
                      : {}
                  }
                  transition={{
                    delay: 1 + i * 0.08,
                  }}
                >
                  {skill.level}%
                </motion.span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Expertise */}
        <motion.div
          className="additional-skills"
          initial={{
            opacity: 0,
            y: 40,
          }}
          animate={
            inView
              ? {
                  opacity: 1,
                  y: 0,
                }
              : {}
          }
          transition={{
            duration: 0.7,
            delay: 0.8,
          }}
        >
          <span className="additional-subtitle">
            CREATIVE CAPABILITIES
          </span>

          <h3 className="additional-title">
            Additional Expertise
          </h3>

          <div className="tags-container">
            {additionalSkills.map((skill, i) => (
              <motion.span
                key={skill}
                className="skill-tag hoverable"
                initial={{
                  opacity: 0,
                  scale: 0.8,
                }}
                animate={
                  inView
                    ? {
                        opacity: 1,
                        scale: 1,
                      }
                    : {}
                }
                transition={{
                  duration: 0.4,
                  delay: 0.9 + i * 0.04,
                }}
                whileHover={{
                  scale: 1.05,
                  y: -2,
                }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;