
import HeroSection from "@/components/HeroSection";
import { Link } from "react-router-dom";
import ProjectCard from "@/components/ProjectCard";
import { useLanguage } from "@/hooks/useLanguage";

const Index = () => {
  const { t } = useLanguage();
  
  const featuredProjects = [
    {
      title: "Pharmacy Flow System",
      description: t('project.pharmacy.desc'),
      link: "https://preview--pharmacy-flow-system.lovable.app",
      image: "/easysoft/lovable-uploads/0f10928f-68f7-4da8-a4c1-17ad1c4edebb.png",
    },
    {
      title: "Savory Resto",
      description: t('project.resto.desc'),
      link: "https://preview--savory-resto-replica.lovable.app",
      image: "/easysoft/lovable-uploads/a1491d02-e1d4-4569-9485-32a4c3949821.png",
    },
    {
      title: "ShopGlow Haven",
      description: t('project.shop.desc'),
      link: "https://preview--shopglow-haven.lovable.app",
      image: "/easysoft/lovable-uploads/b503d201-320c-4385-9ef6-54be36a41063.png",
    },
  ];

  return (
    <div>
      <HeroSection />

      {/* About Preview Section */}
      <section className="py-20 bg-secondary">
        <div className="section-container">
          <div className="fade-in-view max-w-3xl mx-auto text-center">
            <h2 className="section-title">{t('home.aboutMe')}</h2>
            <p className="text-lg mb-8">
              {t('home.aboutDesc')}
            </p>
            <Link
              to="/about"
              className="inline-flex items-center text-primary font-medium hover:underline"
            >
              {t('home.learnMore')}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="ml-1"
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20">
        <div className="section-container">
          <h2 className="section-title fade-in-view">{t('home.featuredProjects')}</h2>
          <p className="section-subtitle fade-in-view">
            {t('home.featuredDesc')}
          </p>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mt-12">
            {featuredProjects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                link={project.link}
                image={project.image}
                delay={index}
              />
            ))}
          </div>

          <div className="mt-12 text-center fade-in-view">
            <Link
              to="/projects"
              className="px-8 py-3 rounded-lg bg-primary text-primary-foreground shadow-lg hover:opacity-90 transition-all"
            >
              {t('home.viewAllProjects')}
            </Link>
          </div>
        </div>
      </section>

      {/* Skills Preview Section */}
      <section className="py-20 bg-secondary">
        <div className="section-container">
          <div className="fade-in-view max-w-3xl mx-auto text-center">
            <h2 className="section-title">{t('home.mySkills')}</h2>
            <p className="text-lg mb-8">
              {t('home.skillsDesc')}
            </p>
            <Link
              to="/skills"
              className="inline-flex items-center text-primary font-medium hover:underline"
            >
              {t('home.seeAllSkills')}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="ml-1"
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20">
        <div className="section-container">
          <div className="fade-in-view max-w-3xl mx-auto text-center">
            <h2 className="section-title">{t('home.workTogether')}</h2>
            <p className="text-lg mb-8">
              {t('home.workDesc')}
            </p>
            <Link
              to="/contact"
              className="px-8 py-3 rounded-lg bg-primary text-primary-foreground shadow-lg hover:opacity-90 transition-all"
            >
              {t('hero.contactMe')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
