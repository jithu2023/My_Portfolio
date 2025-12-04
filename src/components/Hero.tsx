import { useEffect, useRef } from "react";
import "./Hero.css";
import profileImage from "../assets/profile_image.jpg";

const Hero = () => {
  const elementsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      elementsRef.current.forEach((el, index) => {
        if (el) {
          setTimeout(() => {
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
            el.style.filter = "blur(0)";
          }, index * 120);
        }
      });
    }, 150);

    return () => clearTimeout(timer);
  }, []);

  const addToRefs = (el: HTMLDivElement | null, index: number) => {
    elementsRef.current[index] = el;
  };

  const handleLetsTalk = () => {
    console.log("Let's Talk clicked");
  };

  const handleMyWorks = () => {
    console.log("My Works clicked");
  };

  return (
    <section className="hero-container" id="home">
      {/* Decorative background elements */}
      <div className="hero-bg-elements">
        <div className="bg-orb orb-1"></div>
        <div className="bg-orb orb-2"></div>
        <div className="bg-orb orb-3"></div>
        <div className="grid-overlay"></div>
      </div>

      <div className="hero-content">
        <div className="hero-columns">
          {/* Left column - Text content */}
          <div className="hero-left">
            {/* Available For Opportunities */}
            <div 
              className="hero-label-wrapper fade-in-element"
              ref={(el) => addToRefs(el, 0)}
            >
              <div className="hero-label-badge">
                <span className="badge-dot"></span>
                <span className="hero-label">Available For Opportunities</span>
              </div>
            </div>

            {/* Main heading - FIXED STRUCTURE */}
            <div className="hero-heading">
              <h1 
                className="hero-greeting fade-in-element"
                ref={(el) => addToRefs(el, 1)}
              >
                Hey, I'm <span className="highlight-name">Jithumon Jacob</span>,
              </h1>

<h1
  className=" hero-title  fade-in-element"
  ref={(el) => addToRefs(el, 2)}
>
                <span className="title-text">Full Stack Developer</span>
                <span className="title-underline"></span>
              </h1>
            </div>

            {/* Location */}
            <div 
              className="hero-location-wrapper fade-in-element"
              ref={(el) => addToRefs(el, 3)}
            >
              <div className="location-icon">📍</div>
              <div className="hero-location">Based in India</div>
            </div>

            {/* Description */}
            <div className="hero-description-wrapper">
              <p 
                className="hero-description fade-in-element"
                ref={(el) => addToRefs(el, 4)}
              >
                Building <span className="highlight-text">professional</span>, <span className="highlight-text">user-friendly</span> web applications that solve real problems and engage users.
              </p>
            </div>

            {/* CTA Buttons */}
            <div 
              className="hero-cta-buttons fade-in-element"
              ref={(el) => addToRefs(el, 5)}
            >
              <button className="talk-button" onClick={handleLetsTalk}>
                <span className="button-icon">💬</span>
                <span className="button-text">Let's Talk</span>
                <span className="button-hover-effect"></span>
              </button>
              
              <button className="works-button" onClick={handleMyWorks}>
                <span className="button-text">My Works</span>
                <span className="button-arrow">→</span>
                <span className="button-hover-effect"></span>
              </button>
            </div>

            {/* Trust indicators */}
            <div className="hero-trust-indicators fade-in-element" ref={(el) => addToRefs(el, 7)}>
              <div className="trust-item">
                <span className="trust-number">1+</span>
                <span className="trust-label">Years Experience</span>
              </div>
              <div className="trust-divider"></div>
              <div className="trust-item">
                <span className="trust-number">30+</span>
                <span className="trust-label">Projects Delivered</span>
              </div>
            </div>
          </div>

          {/* Right column - Profile Image */}
          <div className="hero-right">
            <div 
              className="image-container fade-in-element"
              ref={(el) => addToRefs(el, 6)}
            >
              <div className="image-decoration deco-1"></div>
              <div className="image-decoration deco-2"></div>
              
              <div className="image-wrapper">
                <img 
                  src={profileImage} 
                  alt="Jithumon Jacob - Full Stack Developer" 
                  className="profile-image"
                  loading="eager"
                />
                
                <div className="image-overlay"></div>
                <div className="image-glow"></div>
                
                <div className="professional-badge">
                  <span className="badge-icon">🏆</span>
                  <span className="badge-text">Available</span>
                </div>
              </div>
              
              <div className="floating-tech">
                <div className="tech-tag">React</div>
                <div className="tech-tag">Node.js</div>
                <div className="tech-tag">MongoDB</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;