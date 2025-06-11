
import ProjectCard from "@/components/ProjectCard";
import { useLanguage } from "@/hooks/useLanguage";

const Projects = () => {
  const { t } = useLanguage();
  
  const projects = [
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
    {
      title: "RemedyView Station",
      description: t('project.remedy.desc'),
      link: "https://preview--remedyview-station.lovable.app",
      image: "/easysoft/lovable-uploads/7fc7b9b2-da77-493e-9879-10015c8eed11.png",
    },
    {
      title: "عقاراتنا - Real Estate Platform",
      description: t('project.realestate.desc'),
      link: "https://p-7949.lovable.app",
      images: [
        "/easysoft/lovable-uploads/d6142c41-4bcc-4be8-b703-5165a9eb37e2.png",
        "/easysoft/lovable-uploads/7c8d4191-0bba-4269-b80f-d13965f8e537.png"
      ],
      image: "/easysoft/lovable-uploads/d6142c41-4bcc-4be8-b703-5165a9eb37e2.png",
    },
    {
      title: "All-in-One Delivery Platform",
      description: t('project.delivery.desc'),
      link: "https://preview--allinone-delivery-hub.lovable.app",
      images: [
        "/easysoft/lovable-uploads/3537029d-d205-4f7e-956b-385f601bebe7.png",
        "/easysoft/lovable-uploads/b69961af-187f-4a16-bf4b-155919a74769.png"
      ],
      image: "/easysoft/lovable-uploads/3537029d-d205-4f7e-956b-385f601bebe7.png",
    },
    {
      title: "E-Learning Platform",
      description: t('project.elearning.desc'),
      images: [
        "/easysoft/lovable-uploads/78d695eb-4e5c-493f-913b-87b4cbe95545.png",
        "/easysoft/lovable-uploads/867e689b-85ad-432d-8406-1dc0bbafb123.png",
        "/easysoft/lovable-uploads/dfb01e3a-6f77-46cb-b3e0-bda2bf57f02f.png"
      ],
      link: "https://preview--coursebridge-connect.lovable.app",
      image: "/easysoft/lovable-uploads/78d695eb-4e5c-493f-913b-87b4cbe95545.png",
    }
  ];

  return (
    <div>
      {/* Projects Hero */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 animate-slide-down">
              {t('projects.title')}
            </h1>
            <p className="text-xl text-muted-foreground animate-slide-up">
              {t('projects.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="section-container">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                link={project.link}
                image={project.image}
                images={project.images}
                delay={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-secondary">
        <div className="section-container">
          <h2 className="section-title fade-in-view">{t('projects.process')}</h2>
          <div className="grid md:grid-cols-4 gap-8 mt-12">
            <div className="fade-in-view glass rounded-xl p-6 text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-primary">1</span>
              </div>
              <h3 className="text-xl font-bold mb-3">{t('projects.discovery')}</h3>
              <p className="text-muted-foreground">
                {t('projects.discoveryDesc')}
              </p>
            </div>
            <div className="fade-in-view glass rounded-xl p-6 text-center" style={{ transitionDelay: "0.1s" }}>
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-primary">2</span>
              </div>
              <h3 className="text-xl font-bold mb-3">{t('projects.design')}</h3>
              <p className="text-muted-foreground">
                {t('projects.designDesc')}
              </p>
            </div>
            <div className="fade-in-view glass rounded-xl p-6 text-center" style={{ transitionDelay: "0.2s" }}>
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-primary">3</span>
              </div>
              <h3 className="text-xl font-bold mb-3">{t('projects.development')}</h3>
              <p className="text-muted-foreground">
                {t('projects.developmentDesc')}
              </p>
            </div>
            <div className="fade-in-view glass rounded-xl p-6 text-center" style={{ transitionDelay: "0.3s" }}>
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-primary">4</span>
              </div>
              <h3 className="text-xl font-bold mb-3">{t('projects.delivery')}</h3>
              <p className="text-muted-foreground">
                {t('projects.deliveryDesc')}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
