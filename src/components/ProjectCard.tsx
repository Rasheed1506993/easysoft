
import { useState } from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  link: string;
  image?: string;
  images?: string[];
  delay?: number;
}

const ProjectCard = ({ title, description, link, image, images, delay = 0 }: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // استخدم الصور المتعددة إذا كانت متوفرة، وإلا استخدم الصورة الفردية
  const hasMultipleImages = images && images.length > 1;
  const displayImage = hasMultipleImages ? images[currentImageIndex] : image;
  
  const nextImage = () => {
    if (hasMultipleImages) {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }
  };

  const prevImage = () => {
    if (hasMultipleImages) {
      setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    }
  };

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
            {displayImage ? (
              <>
                <img
                  src={displayImage}
                  alt={title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out"
                  style={{
                    transform: isHovered ? "scale(1.05)" : "scale(1)",
                  }}
                />
                {hasMultipleImages && (
                  <div className="absolute inset-x-0 bottom-0 flex justify-between p-2">
                    <button 
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        prevImage();
                      }}
                      className="bg-black/40 hover:bg-black/60 text-white w-8 h-8 rounded-full flex items-center justify-center"
                      aria-label="Previous image"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M15 18l-6-6 6-6" />
                      </svg>
                    </button>
                    <button 
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        nextImage();
                      }}
                      className="bg-black/40 hover:bg-black/60 text-white w-8 h-8 rounded-full flex items-center justify-center"
                      aria-label="Next image"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M9 18l6-6-6-6" />
                      </svg>
                    </button>
                  </div>
                )}
              </>
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
