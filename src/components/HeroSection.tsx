
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const title = titleRef.current;
    const subtitle = subtitleRef.current;
    const cta = ctaRef.current;

    if (title) {
      title.style.opacity = "1";
      title.classList.add("animate-slide-up");
      title.style.animationDelay = "0.2s";
    }
    if (subtitle) {
      subtitle.style.opacity = "1";
      subtitle.classList.add("animate-slide-up");
      subtitle.style.animationDelay = "0.4s";
    }
    if (cta) {
      cta.style.opacity = "1";
      cta.classList.add("animate-slide-up");
      cta.style.animationDelay = "0.6s";
    }
  }, []);

  return (
    <section className="relative overflow-hidden bg-background py-20 md:py-32">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-primary/20 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-primary/20 blur-3xl"></div>
      </div>
      <div className="section-container relative">
        <div className="max-w-3xl mx-auto text-center">
          <h1 
            ref={titleRef}
            className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6"
            style={{ opacity: 0, transition: "opacity 0.5s ease" }}
          >
            Rasheed Sharaf AL-Deen
          </h1>
          <p 
            ref={subtitleRef}
            className="text-xl md:text-2xl text-muted-foreground mb-8"
            style={{ opacity: 0, transition: "opacity 0.5s ease" }}
          >
            Web Developer & Designer
          </p>
          <div 
            ref={ctaRef} 
            className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4"
            style={{ opacity: 0, transition: "opacity 0.5s ease" }}
          >
            <Link
              to="/projects"
              className="px-8 py-3 rounded-lg bg-primary text-primary-foreground shadow-lg hover:opacity-90 transition-all"
            >
              View My Work
            </Link>
            <Link
              to="/contact"
              className="px-8 py-3 rounded-lg bg-secondary text-secondary-foreground shadow hover:bg-secondary/80 transition-all"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default HeroSection;
