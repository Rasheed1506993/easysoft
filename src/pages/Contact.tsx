import ContactForm from "@/components/ContactForm";
import { useLanguage } from "@/hooks/useLanguage";

const Contact = () => {
  const { t } = useLanguage();

  return (
    <div>
      {/* Contact Hero */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 animate-slide-down">
              {t('contact.title')}
            </h1>
            <p className="text-xl text-muted-foreground animate-slide-up">
              {t('contact.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16">
        <div className="section-container">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="fade-in-view order-2 md:order-1">
              <h2 className="text-2xl font-bold mb-6">{t('contact.getInTouch')}</h2>
              <p className="text-muted-foreground mb-8">
                {t('contact.description')}
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
                    <h3 className="font-medium mb-1">{t('contact.email')}</h3>
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
                    <h3 className="font-medium mb-1">{t('contact.phone')}</h3>
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
                    <h3 className="font-medium mb-1">{t('contact.workingHours')}</h3>
                    <p className="text-muted-foreground">
                      {t('contact.hours')}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <h3 className="text-xl font-bold mb-4">{t('contact.connect')}</h3>
                <div className="flex space-x-4">
                  {/* Social Icons remain the same */}
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
          <h2 className="section-title fade-in-view">{t('contact.faqTitle')}</h2>
          <div className="max-w-3xl mx-auto mt-12 space-y-6">
            <div className="fade-in-view glass rounded-xl p-6">
              <h3 className="text-lg font-bold mb-2">{t('contact.faq1')}</h3>
              <p className="text-muted-foreground">
                {t('contact.faq1Answer')}
              </p>
            </div>
            <div className="fade-in-view glass rounded-xl p-6" style={{ transitionDelay: "0.1s" }}>
              <h3 className="text-lg font-bold mb-2">{t('contact.faq2')}</h3>
              <p className="text-muted-foreground">
                {t('contact.faq2Answer')}
              </p>
            </div>
            <div className="fade-in-view glass rounded-xl p-6" style={{ transitionDelay: "0.2s" }}>
              <h3 className="text-lg font-bold mb-2">{t('contact.faq3')}</h3>
              <p className="text-muted-foreground">
                {t('contact.faq3Answer')}
              </p>
            </div>
            <div className="fade-in-view glass rounded-xl p-6" style={{ transitionDelay: "0.3s" }}>
              <h3 className="text-lg font-bold mb-2">{t('contact.faq4')}</h3>
              <p className="text-muted-foreground">
                {t('contact.faq4Answer')}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;