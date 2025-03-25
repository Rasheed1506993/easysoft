
const Services = () => {
  const services = [
    {
      title: "Web Development",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-primary"
        >
          <polyline points="16 18 22 12 16 6"></polyline>
          <polyline points="8 6 2 12 8 18"></polyline>
        </svg>
      ),
      description:
        "Creating modern, responsive websites and web applications using the latest technologies and best practices. From simple landing pages to complex web applications, I deliver high-quality solutions that meet your specific needs.",
    },
    {
      title: "UI/UX Design",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-primary"
        >
          <circle cx="12" cy="12" r="10"></circle>
          <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
          <line x1="9" y1="9" x2="9.01" y2="9"></line>
          <line x1="15" y1="9" x2="15.01" y2="9"></line>
        </svg>
      ),
      description:
        "Designing intuitive and engaging user interfaces with a focus on user experience. I create designs that are not only visually appealing but also functional, accessible, and optimized for conversion and engagement.",
    },
    {
      title: "E-commerce Solutions",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-primary"
        >
          <path d="M5 10h14a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1Z"></path>
          <path d="M17 10v9a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-9"></path>
          <path d="m6 1 2 4h8l2-4"></path>
        </svg>
      ),
      description:
        "Building comprehensive e-commerce platforms with secure payment processing, inventory management, and customer relationship management. I create online stores that provide seamless shopping experiences and drive sales.",
    },
    {
      title: "Content Management Systems",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-primary"
        >
          <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
          <polyline points="14 2 14 8 20 8"></polyline>
        </svg>
      ),
      description:
        "Implementing and customizing content management systems that make it easy for you to update and maintain your website. Whether you need a simple blog or a complex content-driven website, I can create a solution that meets your needs.",
    },
    {
      title: "Performance Optimization",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-primary"
        >
          <path d="m19 4-7 7"></path>
          <path d="M11.5 12.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z"></path>
          <path d="M5 19l7-7"></path>
          <path d="M19 14v-5h-5"></path>
          <path d="M5 10V5h5"></path>
        </svg>
      ),
      description:
        "Improving the speed and performance of existing websites to provide a better user experience and higher search engine rankings. I identify and fix performance bottlenecks, optimize code, and implement caching strategies.",
    },
    {
      title: "Responsive Web Design",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-primary"
        >
          <rect width="18" height="11" x="3" y="4" rx="2"></rect>
          <path d="M7 19h10"></path>
          <path d="M12 15v4"></path>
        </svg>
      ),
      description:
        "Creating websites that look and function great on all devices, from desktop computers to smartphones. I ensure your site provides an excellent user experience regardless of screen size or device type.",
    },
  ];

  return (
    <div>
      {/* Services Hero */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 animate-slide-down">
              My Services
            </h1>
            <p className="text-xl text-muted-foreground animate-slide-up">
              Professional web development and design services tailored to your needs
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="section-container">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <div
                key={index}
                className="fade-in-view glass rounded-2xl p-8 h-full flex flex-col"
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-muted-foreground flex-grow">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How I Work */}
      <section className="py-16 bg-secondary">
        <div className="section-container">
          <h2 className="section-title fade-in-view">How I Work</h2>
          <div className="max-w-3xl mx-auto mt-12">
            <div className="fade-in-view relative border-l-2 border-primary/30 pl-8 pb-10">
              <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-primary"></div>
              <h3 className="text-xl font-bold mb-3">Initial Consultation</h3>
              <p className="text-muted-foreground">
                We begin with a detailed conversation about your project goals, requirements, and vision. This helps me understand exactly what you need and how I can best serve you.
              </p>
            </div>
            <div className="fade-in-view relative border-l-2 border-primary/30 pl-8 pb-10" style={{ transitionDelay: "0.1s" }}>
              <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-primary"></div>
              <h3 className="text-xl font-bold mb-3">Proposal & Planning</h3>
              <p className="text-muted-foreground">
                I'll create a detailed proposal outlining the scope, timeline, and cost of your project. Once approved, I develop a comprehensive plan to guide the project from start to finish.
              </p>
            </div>
            <div className="fade-in-view relative border-l-2 border-primary/30 pl-8 pb-10" style={{ transitionDelay: "0.2s" }}>
              <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-primary"></div>
              <h3 className="text-xl font-bold mb-3">Design & Development</h3>
              <p className="text-muted-foreground">
                I create mockups for your approval, then begin the development process. Throughout this phase, I maintain regular communication to ensure the project is progressing according to your expectations.
              </p>
            </div>
            <div className="fade-in-view relative border-l-2 border-primary/30 pl-8 pb-10" style={{ transitionDelay: "0.3s" }}>
              <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-primary"></div>
              <h3 className="text-xl font-bold mb-3">Testing & Review</h3>
              <p className="text-muted-foreground">
                I thoroughly test the project across different devices and browsers, fixing any issues that arise. You'll have the opportunity to review and request any adjustments.
              </p>
            </div>
            <div className="fade-in-view relative pl-8" style={{ transitionDelay: "0.4s" }}>
              <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-primary"></div>
              <h3 className="text-xl font-bold mb-3">Launch & Support</h3>
              <p className="text-muted-foreground">
                Once everything is approved, I launch your project and provide support to ensure everything runs smoothly. I also offer maintenance services to keep your project up-to-date.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="section-container">
          <div className="fade-in-view glass rounded-2xl p-10 max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Start Your Project?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Let's work together to create something amazing. Contact me to discuss your project and how I can help bring your vision to life.
            </p>
            <a
              href="/contact"
              className="px-8 py-3 rounded-lg bg-primary text-primary-foreground shadow-lg hover:opacity-90 transition-all"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
