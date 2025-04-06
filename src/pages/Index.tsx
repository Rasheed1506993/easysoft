
import HeroSection from "@/components/HeroSection";
import { Link } from "react-router-dom";
import ProjectCard from "@/components/ProjectCard";

const Index = () => {
  const featuredProjects = [
    {
      title: "Pharmacy Flow System",
      description: "Pharmacy management system for tracking inventory and orders.",
      link: "https://preview--pharmacy-flow-system.lovable.app",
      image: "/lovable-uploads/0f10928f-68f7-4da8-a4c1-17ad1c4edebb.png",
    },
    {
      title: "Savory Resto",
      description: "Restaurant website featuring elegant design and online booking.",
      link: "https://preview--savory-resto-replica.lovable.app",
      image: "/lovable-uploads/a1491d02-e1d4-4569-9485-32a4c3949821.png",
    },
    {
      title: "ShopGlow Haven",
      description: "E-commerce platform with modern UI and seamless shopping experience.",
      link: "https://preview--shopglow-haven.lovable.app",
      image: "/lovable-uploads/b503d201-320c-4385-9ef6-54be36a41063.png",
    },
  ];

  return (
    <div>
      <HeroSection />

      {/* About Preview Section */}
      <section className="py-20 bg-secondary">
        <div className="section-container">
          <div className="fade-in-view max-w-3xl mx-auto text-center">
            <h2 className="section-title">About Me</h2>
            <p className="text-lg mb-8">
              I'm a passionate Web Developer and Designer focused on creating beautiful, 
              functional, and user-centered digital experiences.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center text-primary font-medium hover:underline"
            >
              Learn more about me
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
          <h2 className="section-title fade-in-view">Featured Projects</h2>
          <p className="section-subtitle fade-in-view">
            Check out some of my recent work
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
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Skills Preview Section */}
      <section className="py-20 bg-secondary">
        <div className="section-container">
          <div className="fade-in-view max-w-3xl mx-auto text-center">
            <h2 className="section-title">My Skills</h2>
            <p className="text-lg mb-8">
              I've worked with a range of technologies in the web development world.
            </p>
            <Link
              to="/skills"
              className="inline-flex items-center text-primary font-medium hover:underline"
            >
              See all my skills
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
            <h2 className="section-title">Let's Work Together</h2>
            <p className="text-lg mb-8">
              Interested in collaborating? Feel free to reach out to me.
            </p>
            <Link
              to="/contact"
              className="px-8 py-3 rounded-lg bg-primary text-primary-foreground shadow-lg hover:opacity-90 transition-all"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
