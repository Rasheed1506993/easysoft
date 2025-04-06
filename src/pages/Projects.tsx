
import ProjectCard from "@/components/ProjectCard";

const Projects = () => {
  const projects = [
    {
      title: "Pharmacy Flow System",
      description:
        "Comprehensive pharmacy management system for tracking inventory, processing orders, and managing customer information with an intuitive dashboard.",
      link: "https://preview--pharmacy-flow-system.lovable.app",
      image: "/lovable-uploads/0f10928f-68f7-4da8-a4c1-17ad1c4edebb.png",
    },
    {
      title: "Savory Resto",
      description:
        "Restaurant website featuring elegant design and online booking system. Includes menu showcase, reservation capabilities, and location information.",
      link: "https://preview--savory-resto-replica.lovable.app",
      image: "/lovable-uploads/a1491d02-e1d4-4569-9485-32a4c3949821.png",
    },
    {
      title: "ShopGlow Haven",
      description:
        "E-commerce platform with modern UI and seamless shopping experience. Features include product catalog, shopping cart, and secure checkout process.",
      link: "https://preview--shopglow-haven.lovable.app",
      image: "/lovable-uploads/b503d201-320c-4385-9ef6-54be36a41063.png",
    },
    {
      title: "RemedyView Station",
      description:
        "Medical dashboard for healthcare professionals to monitor patient information, schedule appointments, and track medical records securely.",
      link: "https://preview--remedyview-station.lovable.app",
      image: "/lovable-uploads/7fc7b9b2-da77-493e-9879-10015c8eed11.png",
    },
    {
      title: "عقاراتنا - Real Estate Platform",
      description:
        "موقع عقاري متكامل لعرض العقارات المتاحة للبيع أو الإيجار مع نظام بحث متقدم يسمح بالتصفية حسب الموقع والسعر والمساحة. يمكن المستخدمين من التواصل المباشر مع الملاك أو الوسطاء.",
      link: "https://p-7949.lovable.app",
      images: [
        "/lovable-uploads/d6142c41-4bcc-4be8-b703-5165a9eb37e2.png",
        "/lovable-uploads/7c8d4191-0bba-4269-b80f-d13965f8e537.png"
      ],
      image: "/lovable-uploads/d6142c41-4bcc-4be8-b703-5165a9eb37e2.png",
    },
    {
      title: "All-in-One Delivery Platform",
      description:
        "منصة توصيل شاملة لجميع احتياجاتك، من الطعام إلى البقالة والصيدليات وأكثر. تطبيق واحد يجمع خدمات متعددة مع تتبع المندوب وخيارات دفع متنوعة.",
      link: "https://preview--allinone-delivery-hub.lovable.app",
      images: [
        "/lovable-uploads/3537029d-d205-4f7e-956b-385f601bebe7.png",
        "/lovable-uploads/b69961af-187f-4a16-bf4b-155919a74769.png"
      ],
      image: "/lovable-uploads/3537029d-d205-4f7e-956b-385f601bebe7.png",
    },
    {
      title: "E-Learning Platform",
      description:
        "منصة تعليمية متكاملة توفر دورات عالية الجودة بأيدي أفضل المدرسين، تقدم مجالات متنوعة مثل البرمجة والتصميم والأعمال، مع نظام بحث متقدم ودعم للغة العربية.",
      images: [
        "/lovable-uploads/78d695eb-4e5c-493f-913b-87b4cbe95545.png",
        "/lovable-uploads/867e689b-85ad-432d-8406-1dc0bbafb123.png",
        "/lovable-uploads/dfb01e3a-6f77-46cb-b3e0-bda2bf57f02f.png"
      ],
      link: "https://preview--coursebridge-connect.lovable.app",
      image: "/lovable-uploads/78d695eb-4e5c-493f-913b-87b4cbe95545.png",
    }
  ];

  return (
    <div>
      {/* Projects Hero */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 animate-slide-down">
              My Projects
            </h1>
            <p className="text-xl text-muted-foreground animate-slide-up">
              A showcase of my recent web development and design work
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
          <h2 className="section-title fade-in-view">My Development Process</h2>
          <div className="grid md:grid-cols-4 gap-8 mt-12">
            <div className="fade-in-view glass rounded-xl p-6 text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-primary">1</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Discovery</h3>
              <p className="text-muted-foreground">
                Understanding requirements and defining project goals
              </p>
            </div>
            <div className="fade-in-view glass rounded-xl p-6 text-center" style={{ transitionDelay: "0.1s" }}>
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-primary">2</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Design</h3>
              <p className="text-muted-foreground">
                Creating wireframes and visual designs that meet objectives
              </p>
            </div>
            <div className="fade-in-view glass rounded-xl p-6 text-center" style={{ transitionDelay: "0.2s" }}>
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-primary">3</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Development</h3>
              <p className="text-muted-foreground">
                Building robust code with modern technologies
              </p>
            </div>
            <div className="fade-in-view glass rounded-xl p-6 text-center" style={{ transitionDelay: "0.3s" }}>
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-primary">4</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Delivery</h3>
              <p className="text-muted-foreground">
                Testing, refining, and launching the final product
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
