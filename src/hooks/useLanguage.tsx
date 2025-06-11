
import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Translation object
const translations = {
  en: {
    // Navbar
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.projects': 'Projects',
    'nav.services': 'Services',
    'nav.skills': 'Skills',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.name': 'Rasheed Sharaf AL-Deen',
    'hero.title': 'Web Developer & Designer',
    'hero.viewWork': 'View My Work',
    'hero.contactMe': 'Contact Me',
    
    // Footer
    'footer.rights': 'All rights reserved.',
    
    // Projects Page
    'projects.title': 'My Projects',
    'projects.subtitle': 'A showcase of my recent web development and design work',
    'projects.process': 'My Development Process',
    'projects.discovery': 'Discovery',
    'projects.discoveryDesc': 'Understanding requirements and defining project goals',
    'projects.design': 'Design',
    'projects.designDesc': 'Creating wireframes and visual designs that meet objectives',
    'projects.development': 'Development',
    'projects.developmentDesc': 'Building robust code with modern technologies',
    'projects.delivery': 'Delivery',
    'projects.deliveryDesc': 'Testing, refining, and launching the final product',
    'projects.viewProject': 'View Project',
    
    // Home Page
    'home.aboutMe': 'About Me',
    'home.aboutDesc': "I'm a passionate Web Developer and Designer focused on creating beautiful, functional, and user-centered digital experiences.",
    'home.learnMore': 'Learn more about me',
    'home.featuredProjects': 'Featured Projects',
    'home.featuredDesc': 'Check out some of my recent work',
    'home.viewAllProjects': 'View All Projects',
    'home.mySkills': 'My Skills',
    'home.skillsDesc': "I've worked with a range of technologies in the web development world.",
    'home.seeAllSkills': 'See all my skills',
    'home.workTogether': "Let's Work Together",
    'home.workDesc': 'Interested in collaborating? Feel free to reach out to me.',
    
    // Project Descriptions
    'project.pharmacy.desc': 'Comprehensive pharmacy management system for tracking inventory, processing orders, and managing customer information with an intuitive dashboard.',
    'project.resto.desc': 'Restaurant website featuring elegant design and online booking system. Includes menu showcase, reservation capabilities, and location information.',
    'project.shop.desc': 'E-commerce platform with modern UI and seamless shopping experience. Features include product catalog, shopping cart, and secure checkout process.',
    'project.remedy.desc': 'Medical dashboard for healthcare professionals to monitor patient information, schedule appointments, and track medical records securely.',
    'project.realestate.desc': 'Comprehensive real estate website for listing properties for sale or rent, featuring an advanced search system that filters by location, price, and size. Enables direct communication with owners or agents.',
    'project.delivery.desc': 'All-in-one delivery platform for your needs—from food and groceries to pharmacies and more. A single app that combines multiple services with real-time tracking and various payment options.',
    'project.elearning.desc': 'Integrated e-learning platform offering high-quality courses by top instructors. Covers diverse fields such as programming, design, and business, with advanced search and Arabic language support.',
    
     },
  ar: {
    // شريط التنقل
    'nav.home': 'الرئيسية',
    'nav.about': 'نبذة عني',
    'nav.projects': 'المشاريع',
    'nav.services': 'الخدمات',
    'nav.skills': 'المهارات',
    'nav.contact': 'التواصل',
    
    // قسم البطل
    'hero.name': 'رشيد شرف الدين',
    'hero.title': 'مطور ومصمم مواقع الويب',
    'hero.viewWork': 'عرض أعمالي',
    'hero.contactMe': 'تواصل معي',
    
    // التذييل
    'footer.rights': 'جميع الحقوق محفوظة.',
    
    // صفحة المشاريع
    'projects.title': 'مشاريعي',
    'projects.subtitle': 'عرض لأحدث أعمالي في تطوير وتصميم المواقع',
    'projects.process': 'عملية التطوير الخاصة بي',
    'projects.discovery': 'الاستكشاف',
    'projects.discoveryDesc': 'فهم المتطلبات وتحديد أهداف المشروع',
    'projects.design': 'التصميم',
    'projects.designDesc': 'إنشاء الإطارات والتصاميم المرئية التي تحقق الأهداف',
    'projects.development': 'التطوير',
    'projects.developmentDesc': 'بناء كود قوي باستخدام التقنيات الحديثة',
    'projects.delivery': 'التسليم',
    'projects.deliveryDesc': 'الاختبار والتحسين وإطلاق المنتج النهائي',
    'projects.viewProject': 'عرض المشروع',
    
    // الصفحة الرئيسية
    'home.aboutMe': 'نبذة عني',
    'home.aboutDesc': 'أنا مطور ومصمم مواقع ويب شغوف أركز على إنشاء تجارب رقمية جميلة وعملية تتمحور حول المستخدم.',
    'home.learnMore': 'تعرف علي أكثر',
    'home.featuredProjects': 'المشاريع المميزة',
    'home.featuredDesc': 'اطلع على بعض أعمالي الحديثة',
    'home.viewAllProjects': 'عرض جميع المشاريع',
    'home.mySkills': 'مهاراتي',
    'home.skillsDesc': 'لقد عملت مع مجموعة من التقنيات في عالم تطوير الويب.',
    'home.seeAllSkills': 'عرض جميع المهارات',
    'home.workTogether': 'دعنا نعمل معاً',
    'home.workDesc': 'مهتم بالتعاون؟ لا تتردد في التواصل معي.',
    
    // وصف المشاريع
    'project.pharmacy.desc': 'نظام إدارة شامل للصيدليات لتتبع المخزون ومعالجة الطلبات وإدارة معلومات العملاء مع لوحة تحكم بديهية.',
    'project.resto.desc': 'موقع مطعم يتميز بتصميم أنيق ونظام حجز عبر الإنترنت. يشمل عرض القائمة وإمكانيات الحجز ومعلومات الموقع.',
    'project.shop.desc': 'منصة تجارة إلكترونية بواجهة مستخدم حديثة وتجربة تسوق سلسة. تتضمن كتالوج المنتجات وعربة التسوق وعملية دفع آمنة.',
    'project.remedy.desc': 'لوحة تحكم طبية للمهنيين الصحيين لمراقبة معلومات المرضى وجدولة المواعيد وتتبع السجلات الطبية بأمان.',
    'project.realestate.desc': 'موقع عقاري متكامل لعرض العقارات المتاحة للبيع أو الإيجار مع نظام بحث متقدم يسمح بالتصفية حسب الموقع والسعر والمساحة. يمكن المستخدمين من التواصل المباشر مع الملاك أو الوسطاء.',
    'project.delivery.desc': 'منصة توصيل شاملة لجميع احتياجاتك، من الطعام إلى البقالة والصيدليات وأكثر. تطبيق واحد يجمع خدمات متعددة مع تتبع المندوب وخيارات دفع متنوعة.',
    'project.elearning.desc': 'منصة تعليمية متكاملة توفر دورات عالية الجودة بأيدي أفضل المدرسين، تقدم مجالات متنوعة مثل البرمجة والتصميم والأعمال، مع نظام بحث متقدم ودعم للغة العربية.',
  }
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      <div className={language === 'ar' ? 'rtl' : 'ltr'} dir={language === 'ar' ? 'rtl' : 'ltr'}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
