
import { useEffect, useRef, useState } from "react";

interface SkillBarProps {
  name: string;
  percentage: number;
  delay?: number;
}

const SkillBar = ({ name, percentage, delay = 0 }: SkillBarProps) => {
  const [show, setShow] = useState(false);
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setShow(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (barRef.current) {
      observer.observe(barRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={barRef} className="mb-6" style={{ transitionDelay: `${delay * 0.1}s` }}>
      <div className="flex justify-between mb-2">
        <span className="text-sm font-medium">{name}</span>
        <span className="text-sm text-muted-foreground">{percentage}%</span>
      </div>
      <div className="h-2 bg-secondary rounded-full overflow-hidden">
        <div
          className="h-full bg-primary transition-all duration-1000 ease-out rounded-full"
          style={{
            width: show ? `${percentage}%` : "0%",
            transitionDelay: `${delay * 0.1 + 0.3}s`,
          }}
        ></div>
      </div>
    </div>
  );
};

export default SkillBar;
