import { Link } from "react-router-dom";
import { useLanguage } from "@/hooks/useLanguage";

const About = () => {
  const { t } = useLanguage();

  return (
    <div>
      {/* About Hero */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 animate-slide-down">
              {t('about.title')}
            </h1>
            <p className="text-xl text-muted-foreground animate-slide-up">
              {t('about.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="section-container">
          <div className="grid md:grid-cols-5 gap-12">
            {/* Sidebar */}
            <div className="md:col-span-2 fade-in-view">
              <div className="glass rounded-2xl p-8 sticky top-24">
                <div className="flex flex-col items-center text-center">
                  <div className="w-32 h-32 rounded-full bg-primary/10 mb-6 flex items-center justify-center">
                    <span className="text-3xl font-bold text-primary">R</span>
                  </div>
                  <h2 className="text-2xl font-bold mb-2">{t('hero.name')}</h2>
                  <p className="text-muted-foreground mb-4">{t('hero.title')}</p>
                  <div className="w-16 h-1 bg-primary/30 rounded-full mb-6"></div>

                  <div className="space-y-3 w-full text-left">
                    <div className="flex items-center space-x-3">
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
                        className="text-primary"
                      >
                        <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                      </svg>
                      <a
                        href="mailto:mazen1221cool@gmail.com"
                        className="text-sm hover:text-primary transition-colors"
                      >
                        mazen1221cool@gmail.com
                      </a>
                    </div>
                    <div className="flex items-center space-x-3">
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
                        className="text-primary"
                      >
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                      </svg>
                      <a
                        href="tel:+966539628489"
                        className="text-sm hover:text-primary transition-colors"
                      >
                        +966 539 628 489
                      </a>
                    </div>
                  </div>

                  <div className="mt-8 w-full">
                    <Link
                      to="/contact"
                      className="w-full py-2.5 px-4 rounded-lg bg-primary text-primary-foreground text-sm shadow hover:opacity-90 transition-all flex justify-center items-center"
                    >
                      {t('hero.contactMe')}
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="md:col-span-3">
              <div className="space-y-12">
                <section className="fade-in-view">
                  <h3 className="text-2xl font-bold mb-4">{t('about.aboutMe')}</h3>
                  <div className="prose prose-lg">
                    <p className="mb-4">
                      {t('about.aboutText1')}
                    </p>
                    <p className="mb-4">
                      {t('about.aboutText2')}
                    </p>
                    <p>
                      {t('about.aboutText3')}
                    </p>
                  </div>
                </section>

                <section className="fade-in-view">
                  <h3 className="text-2xl font-bold mb-4">{t('about.experience')}</h3>
                  <div className="space-y-6">
                    <div className="glass rounded-xl p-6">
                      <div className="flex justify-between mb-2">
                        <h4 className="font-bold">{t('about.seniorDev')}</h4>
                        <span className="text-sm text-muted-foreground">{t('about.seniorDevDuration')}</span>
                      </div>
                      <p className="text-muted-foreground mb-4">{t('about.seniorDevCompany')}</p>
                      <p className="text-sm">
                        {t('about.seniorDevDesc')}
                      </p>
                    </div>

                    <div className="glass rounded-xl p-6">
                      <div className="flex justify-between mb-2">
                        <h4 className="font-bold">{t('about.frontendDev')}</h4>
                        <span className="text-sm text-muted-foreground">{t('about.frontendDevDuration')}</span>
                      </div>
                      <p className="text-muted-foreground mb-4">{t('about.frontendDevCompany')}</p>
                      <p className="text-sm">
                        {t('about.frontendDevDesc')}
                      </p>
                    </div>

                    <div className="glass rounded-xl p-6">
                      <div className="flex justify-between mb-2">
                        <h4 className="font-bold">{t('about.intern')}</h4>
                        <span className="text-sm text-muted-foreground">{t('about.internDuration')}</span>
                      </div>
                      <p className="text-muted-foreground mb-4">{t('about.internCompany')}</p>
                      <p className="text-sm">
                        {t('about.internDesc')}
                      </p>
                    </div>
                  </div>
                </section>

                <section className="fade-in-view">
                  <h3 className="text-2xl font-bold mb-4">{t('about.education')}</h3>
                  <div className="glass rounded-xl p-6">
                    <div className="flex justify-between mb-2">
                      <h4 className="font-bold">{t('about.degree')}</h4>
                      <span className="text-sm text-muted-foreground">{t('about.degreeDuration')}</span>
                    </div>
                    <p className="text-muted-foreground mb-4">{t('about.university')}</p>
                    <p className="text-sm">
                      {t('about.degreeDesc')}
                    </p>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-secondary">
        <div className="section-container">
          <div className="fade-in-view max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">{t('about.ctaTitle')}</h2>
            <p className="text-lg mb-8">
              {t('about.ctaText')}
            </p>
            <Link
              to="/contact"
              className="px-8 py-3 rounded-lg bg-primary text-primary-foreground shadow-lg hover:opacity-90 transition-all"
            >
              {t('about.ctaButton')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;