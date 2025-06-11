import SkillBar from "@/components/SkillBar";
import { useLanguage } from "@/hooks/useLanguage";

const Skills = () => {
  const { t } = useLanguage();

  const technicalSkills = [
    { name: "HTML5/CSS3", percentage: 95, delay: 0 },
    { name: "JavaScript/TypeScript", percentage: 90, delay: 1 },
    { name: "React.js", percentage: 92, delay: 2 },
    { name: "Next.js", percentage: 85, delay: 3 },
    { name: "Node.js", percentage: 80, delay: 4 },
    { name: "Tailwind CSS", percentage: 90, delay: 5 },
    { name: "Responsive Design", percentage: 95, delay: 6 },
    { name: "UI/UX Design", percentage: 88, delay: 7 },
  ];

  const designSkills = [
    { name: "Figma", percentage: 85, delay: 0 },
    { name: "Adobe XD", percentage: 80, delay: 1 },
    { name: "Photoshop", percentage: 75, delay: 2 },
    { name: "Illustrator", percentage: 70, delay: 3 },
  ];

  const otherSkills = [
    { name: "Git/GitHub", percentage: 88, delay: 0 },
    { name: "SEO Basics", percentage: 75, delay: 1 },
    { name: "Performance Optimization", percentage: 85, delay: 2 },
    { name: "Web Accessibility", percentage: 82, delay: 3 },
  ];

  return (
    <div>
      {/* Skills Hero */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 animate-slide-down">
              {t('skills.title')}
            </h1>
            <p className="text-xl text-muted-foreground animate-slide-up">
              {t('skills.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Technical Skills */}
      <section className="py-16">
        <div className="section-container">
          <h2 className="section-title fade-in-view">{t('skills.technical')}</h2>
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-2 mt-12">
            {technicalSkills.map((skill, index) => (
              <SkillBar
                key={index}
                name={skill.name}
                percentage={skill.percentage}
                delay={skill.delay}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Design Skills */}
      <section className="py-16 bg-secondary">
        <div className="section-container">
          <h2 className="section-title fade-in-view">{t('skills.design')}</h2>
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-2 mt-12">
            {designSkills.map((skill, index) => (
              <SkillBar
                key={index}
                name={skill.name}
                percentage={skill.percentage}
                delay={skill.delay}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Other Skills */}
      <section className="py-16">
        <div className="section-container">
          <h2 className="section-title fade-in-view">{t('skills.additional')}</h2>
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-2 mt-12">
            {otherSkills.map((skill, index) => (
              <SkillBar
                key={index}
                name={skill.name}
                percentage={skill.percentage}
                delay={skill.delay}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Skills Categories */}
      <section className="py-16 bg-secondary">
        <div className="section-container">
          <h2 className="section-title fade-in-view">{t('skills.categories')}</h2>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="fade-in-view glass rounded-2xl p-8 h-full">
              <h3 className="text-xl font-bold mb-6">{t('skills.frontend')}</h3>
              {/* Frontend skills list remains the same */}
            </div>
            <div className="fade-in-view glass rounded-2xl p-8 h-full" style={{ transitionDelay: "0.1s" }}>
              <h3 className="text-xl font-bold mb-6">{t('skills.backend')}</h3>
              {/* Backend skills list remains the same */}
            </div>
            <div className="fade-in-view glass rounded-2xl p-8 h-full" style={{ transitionDelay: "0.2s" }}>
              <h3 className="text-xl font-bold mb-6">{t('skills.tools')}</h3>
              {/* Tools skills list remains the same */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;