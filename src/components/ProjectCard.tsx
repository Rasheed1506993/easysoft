
import { useState } from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  link: string;
  image?: string;
  delay?: number;
}

const ProjectCard = ({ title, description, link, image, delay = 0 }: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="fade-in-view h-full"
      style={{ transitionDelay: `${delay * 0.1}s` }}
    >
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="block h-full"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="glass h-full rounded-2xl overflow-hidden transform transition-all duration-500 hover:scale-[1.02] hover:shadow-xl">
          <div className="relative h-48 overflow-hidden">
            {image ? (
              <img
                src={image}
                alt={title}
                className="w-full h-full object-cover transition-transform duration-700 ease-out"
                style={{
                  transform: isHovered ? "scale(1.05)" : "scale(1)",
                }}
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <span className="text-2xl font-bold text-primary/60">{title.charAt(0)}</span>
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <h3 className="absolute bottom-4 left-4 right-4 text-xl font-bold text-white">
              {title}
            </h3>
          </div>
          <div className="p-6">
            <p className="text-muted-foreground">{description}</p>
            <div className="mt-4 flex justify-between items-center">
              <span className="text-sm text-primary font-medium">View Project</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`text-primary transition-transform duration-300 ${
                  isHovered ? "translate-x-1" : ""
                }`}
              >
                <path d="M7 17l9.2-9.2M17 17V7H7"></path>
              </svg>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default ProjectCard;
