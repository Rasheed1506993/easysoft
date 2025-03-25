
import ContactForm from "@/components/ContactForm";

const Contact = () => {
  return (
    <div>
      {/* Contact Hero */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 animate-slide-down">
              Contact Me
            </h1>
            <p className="text-xl text-muted-foreground animate-slide-up">
              Let's discuss your project and how I can help
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16">
        <div className="section-container">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="fade-in-view order-2 md:order-1">
              <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
              <p className="text-muted-foreground mb-8">
                I'm always open to new projects and opportunities. Whether you need a website, web application, or just want to chat about a potential collaboration, feel free to reach out.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-primary"
                    >
                      <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Email</h3>
                    <a
                      href="mailto:mazen1221cool@gmail.com"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      mazen1221cool@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-primary"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Phone</h3>
                    <a
                      href="tel:+966539628489"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      +966 539 628 489
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-primary"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="M12 8v4"></path>
                      <path d="M12 16h.01"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Working Hours</h3>
                    <p className="text-muted-foreground">
                      Monday - Friday: 9am - 6pm
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <h3 className="text-xl font-bold mb-4">Connect With Me</h3>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary transition-colors"
                    aria-label="LinkedIn"
                  >
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
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect width="4" height="12" x="2" y="9"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </a>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary transition-colors"
                    aria-label="GitHub"
                  >
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
                    >
                      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                      <path d="M9 18c-4.51 2-5-2-7-2"></path>
                    </svg>
                  </a>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary transition-colors"
                    aria-label="Twitter"
                  >
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
                    >
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                    </svg>
                  </a>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary transition-colors"
                    aria-label="Instagram"
                  >
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
                    >
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div className="fade-in-view order-1 md:order-2">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-secondary">
        <div className="section-container">
          <h2 className="section-title fade-in-view">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto mt-12 space-y-6">
            <div className="fade-in-view glass rounded-xl p-6">
              <h3 className="text-lg font-bold mb-2">What is your typical project workflow?</h3>
              <p className="text-muted-foreground">
                I follow a structured approach that includes discovery, planning, design, development, testing, and deployment. I keep clients involved throughout the process to ensure the final product meets their expectations.
              </p>
            </div>
            <div className="fade-in-view glass rounded-xl p-6" style={{ transitionDelay: "0.1s" }}>
              <h3 className="text-lg font-bold mb-2">How long does it take to complete a project?</h3>
              <p className="text-muted-foreground">
                Project timelines vary based on complexity and scope. A simple website might take 2-4 weeks, while more complex applications can take several months. I provide detailed timelines during the proposal phase.
              </p>
            </div>
            <div className="fade-in-view glass rounded-xl p-6" style={{ transitionDelay: "0.2s" }}>
              <h3 className="text-lg font-bold mb-2">Do you offer maintenance services after project completion?</h3>
              <p className="text-muted-foreground">
                Yes, I offer ongoing maintenance packages to ensure your website remains up-to-date, secure, and functioning optimally after launch.
              </p>
            </div>
            <div className="fade-in-view glass rounded-xl p-6" style={{ transitionDelay: "0.3s" }}>
              <h3 className="text-lg font-bold mb-2">What payment terms do you offer?</h3>
              <p className="text-muted-foreground">
                I typically require a 30% deposit to begin work, with the remaining balance due upon project completion. For larger projects, I offer milestone-based payment schedules.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
