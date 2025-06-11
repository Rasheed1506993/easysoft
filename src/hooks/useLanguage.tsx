
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
        // About Page
    'about.title': 'About Me',
    'about.subtitle': 'Passionate web developer and designer crafting digital experiences',
    'about.aboutMe': 'About Me',
    'about.aboutText1': 'I am a passionate web developer and designer with a keen eye for detail and a dedication to creating exceptional digital experiences. My journey in web development began with a curiosity about how websites work, and has evolved into a professional career building elegant, functional web applications.',
    'about.aboutText2': 'I combine technical expertise with creative problem-solving to deliver solutions that not only meet but exceed client expectations. My approach focuses on user-centered design principles, ensuring that the end product is not just visually appealing but also intuitive and accessible.',
    'about.aboutText3': "When I'm not coding, I enjoy staying up-to-date with the latest technologies and design trends, contributing to open-source projects, and collaborating with other developers to share knowledge and best practices.",
    'about.experience': 'Experience',
    'about.seniorDev': 'Senior Web Developer',
    'about.seniorDevDuration': '2020 - Present',
    'about.seniorDevCompany': 'TechSolutions Inc.',
    'about.seniorDevDesc': 'Lead development of web applications using React, Node.js, and modern frontend frameworks. Collaborate with design and product teams to create exceptional user experiences.',
    'about.frontendDev': 'Frontend Developer',
    'about.frontendDevDuration': '2018 - 2020',
    'about.frontendDevCompany': 'Digital Innovations Co.',
    'about.frontendDevDesc': 'Developed responsive websites and web applications. Worked with JavaScript frameworks and CSS preprocessors to create modern, performant interfaces.',
    'about.intern': 'Web Design Intern',
    'about.internDuration': '2017 - 2018',
    'about.internCompany': 'Creative Design Studio',
    'about.internDesc': 'Assisted senior designers with website mockups and implementations. Learned fundamentals of UX/UI design and frontend development.',
    'about.education': 'Education',
    'about.degree': 'Bachelor of Science in Computer Science',
    'about.degreeDuration': '2014 - 2018',
    'about.university': 'University of Technology',
    'about.degreeDesc': 'Graduated with honors. Specialized in Web Technologies and Human-Computer Interaction.',
    'about.ctaTitle': 'Ready to Start a Project?',
    'about.ctaText': "Let's collaborate to bring your vision to life.",
    'about.ctaButton': 'Get in Touch',

    // Services Page
    'services.title': 'My Services',
    'services.subtitle': 'Professional web development and design services tailored to your needs',
    'services.webDev': 'Web Development',
    'services.webDevDesc': 'Creating modern, responsive websites and web applications using the latest technologies and best practices. From simple landing pages to complex web applications, I deliver high-quality solutions that meet your specific needs.',
    'services.uiux': 'UI/UX Design',
    'services.uiuxDesc': 'Designing intuitive and engaging user interfaces with a focus on user experience. I create designs that are not only visually appealing but also functional, accessible, and optimized for conversion and engagement.',
    'services.ecommerce': 'E-commerce Solutions',
    'services.ecommerceDesc': 'Building comprehensive e-commerce platforms with secure payment processing, inventory management, and customer relationship management. I create online stores that provide seamless shopping experiences and drive sales.',
    'services.cms': 'Content Management Systems',
    'services.cmsDesc': 'Implementing and customizing content management systems that make it easy for you to update and maintain your website. Whether you need a simple blog or a complex content-driven website, I can create a solution that meets your needs.',
    'services.performance': 'Performance Optimization',
    'services.performanceDesc': 'Improving the speed and performance of existing websites to provide a better user experience and higher search engine rankings. I identify and fix performance bottlenecks, optimize code, and implement caching strategies.',
    'services.responsive': 'Responsive Web Design',
    'services.responsiveDesc': 'Creating websites that look and function great on all devices, from desktop computers to smartphones. I ensure your site provides an excellent user experience regardless of screen size or device type.',
    'services.processTitle': 'How I Work',
    'services.step1': 'Initial Consultation',
    'services.step1Desc': 'We begin with a detailed conversation about your project goals, requirements, and vision. This helps me understand exactly what you need and how I can best serve you.',
    'services.step2': 'Proposal & Planning',
    'services.step2Desc': "I'll create a detailed proposal outlining the scope, timeline, and cost of your project. Once approved, I develop a comprehensive plan to guide the project from start to finish.",
    'services.step3': 'Design & Development',
    'services.step3Desc': 'I create mockups for your approval, then begin the development process. Throughout this phase, I maintain regular communication to ensure the project is progressing according to your expectations.',
    'services.step4': 'Testing & Review',
    'services.step4Desc': 'I thoroughly test the project across different devices and browsers, fixing any issues that arise. You\'ll have the opportunity to review and request any adjustments.',
    'services.step5': 'Launch & Support',
    'services.step5Desc': 'Once everything is approved, I launch your project and provide support to ensure everything runs smoothly. I also offer maintenance services to keep your project up-to-date.',
    'services.ctaTitle': 'Ready to Start Your Project?',
    'services.ctaText': "Let's work together to create something amazing. Contact me to discuss your project and how I can help bring your vision to life.",
    'services.ctaButton': 'Get in Touch',
 
        // Contact Page
    'contact.title': 'Contact Me',
    'contact.subtitle': "Let's discuss your project and how I can help",
    'contact.getInTouch': 'Get in Touch',
    'contact.description': "I'm always open to new projects and opportunities. Whether you need a website, web application, or just want to chat about a potential collaboration, feel free to reach out.",
    'contact.email': 'Email',
    'contact.phone': 'Phone',
    'contact.workingHours': 'Working Hours',
    'contact.hours': 'Monday - Friday: 9am - 6pm',
    'contact.connect': 'Connect With Me',
    'contact.faqTitle': 'Frequently Asked Questions',
    'contact.faq1': 'What is your typical project workflow?',
    'contact.faq1Answer': 'I follow a structured approach that includes discovery, planning, design, development, testing, and deployment. I keep clients involved throughout the process to ensure the final product meets their expectations.',
    'contact.faq2': 'How long does it take to complete a project?',
    'contact.faq2Answer': 'Project timelines vary based on complexity and scope. A simple website might take 2-4 weeks, while more complex applications can take several months. I provide detailed timelines during the proposal phase.',
    'contact.faq3': 'Do you offer maintenance services after project completion?',
    'contact.faq3Answer': 'Yes, I offer ongoing maintenance packages to ensure your website remains up-to-date, secure, and functioning optimally after launch.',
    'contact.faq4': 'What payment terms do you offer?',
    'contact.faq4Answer': 'I typically require a 30% deposit to begin work, with the remaining balance due upon project completion. For larger projects, I offer milestone-based payment schedules.',

    // Skills Page
    'skills.title': 'My Skills',
    'skills.subtitle': 'A comprehensive overview of my technical expertise and capabilities',
    'skills.technical': 'Technical Skills',
    'skills.design': 'Design Skills',
    'skills.additional': 'Additional Skills',
    'skills.categories': 'Skill Categories',
    'skills.frontend': 'Frontend Development',
    'skills.backend': 'Backend Development',
    'skills.tools': 'Tools & Methodologies',
 
    
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
  
    
    // صفحة نبذة عني
    'about.title': 'نبذة عني',
    'about.subtitle': 'مطور ومصمم مواقع ويب شغوف يصنع تجارب رقمية',
    'about.aboutMe': 'نبذة عني',
    'about.aboutText1': 'أنا مطور ومصمم مواقع ويب شغوف بدقة التفاصيل ومكرس لإنشاء تجارب رقمية استثنائية. بدأت رحلتي في تطوير الويب بفضول حول كيفية عمل المواقع، وتطورت إلى مهنة احترافية في بناء تطبيقات ويب أنيقة وعملية.',
    'about.aboutText2': 'أجمع بين الخبرة التقنية وحل المشكلات الإبداعي لتقديم حلول لا تلبي توقعات العملاء فحسب، بل تتجاوزها. يركز نهجي على مبادئ التصميم المتمحور حول المستخدم، مما يضمن أن المنتج النهائي ليس جذابًا بصريًا فحسب، بل أيضًا بديهيًا وسهل الاستخدام.',
    'about.aboutText3': 'عندما لا أكتب أكوادًا، أستمتع بمتابعة أحدث التقنيات واتجاهات التصميم، والمساهمة في المشاريع مفتوحة المصدر، والتعاون مع المطورين الآخرين لمشاركة المعرفة وأفضل الممارسات.',
    'about.experience': 'الخبرة',
    'about.seniorDev': 'مطور ويب أول',
    'about.seniorDevDuration': '2020 - الحاضر',
    'about.seniorDevCompany': 'تيك سوليوشنز',
    'about.seniorDevDesc': 'قيادة تطوير تطبيقات الويب باستخدام React و Node.js وأطر عمل الواجهة الأمامية الحديثة. التعاون مع فرق التصميم والمنتج لإنشاء تجارب مستخدم استثنائية.',
    'about.frontendDev': 'مطور واجهة أمامية',
    'about.frontendDevDuration': '2018 - 2020',
    'about.frontendDevCompany': 'ديجيتال إنوفيشنز',
    'about.frontendDevDesc': 'تطوير مواقع ويب وتطبيقات ويب متجاوبة. العمل مع أطر عمل JavaScript ومعالجات CSS مسبقة لإنشاء واجهات حديثة وعالية الأداء.',
    'about.intern': 'متدرب في تصميم الويب',
    'about.internDuration': '2017 - 2018',
    'about.internCompany': 'استوديو التصميم الإبداعي',
    'about.internDesc': 'مساعدة المصممين الكبار في إنشاء نماذج المواقع وتنفيذها. تعلم أساسيات تصميم UX/UI وتطوير الواجهة الأمامية.',
    'about.education': 'التعليم',
    'about.degree': 'بكالوريوس علوم الحاسوب',
    'about.degreeDuration': '2014 - 2018',
    'about.university': 'جامعة التكنولوجيا',
    'about.degreeDesc': 'تخرجت بامتياز. تخصصت في تقنيات الويب والتفاعل بين الإنسان والحاسوب.',
    'about.ctaTitle': 'هل أنت مستعد لبدء مشروع؟',
    'about.ctaText': 'دعونا نتعاون لتحقيق رؤيتك.',
    'about.ctaButton': 'تواصل معي',

    // صفحة الخدمات
    'services.title': 'خدماتي',
    'services.subtitle': 'خدمات تطوير وتصميم مواقع ويب احترافية مصممة خصيصًا لاحتياجاتك',
    'services.webDev': 'تطوير الويب',
    'services.webDevDesc': 'إنشاء مواقع وتطبيقات ويب حديثة متجاوبة باستخدام أحدث التقنيات وأفضل الممارسات. من صفحات الهبوط البسيطة إلى تطبيقات الويب المعقدة، أقدم حلولاً عالية الجودة تلبي احتياجاتك المحددة.',
    'services.uiux': 'تصميم واجهة المستخدم/تجربة المستخدم',
    'services.uiuxDesc': 'تصميم واجهات مستخدم بديهية وجذابة مع التركيز على تجربة المستخدم. أصمم واجهات ليست جذابة بصريًا فحسب، بل أيضًا وظيفية وسهلة الاستخدام ومحسنة للتحويل والمشاركة.',
    'services.ecommerce': 'حلول التجارة الإلكترونية',
    'services.ecommerceDesc': 'بناء منصات تجارة إلكترونية شاملة مع معالجة دفع آمنة وإدارة مخزون وإدارة علاقات العملاء. أصمم متاجر إلكترونية توفر تجارب تسوق سلسة وتعزز المبيعات.',
    'services.cms': 'أنظمة إدارة المحتوى',
    'services.cmsDesc': 'تنفيذ وتخصيص أنظمة إدارة المحتوى التي تجعل من السهل عليك تحديث موقعك وصيانته. سواء كنت بحاجة إلى مدونة بسيطة أو موقع ويب معقد يعتمد على المحتوى، يمكنني إنشاء حل يناسب احتياجاتك.',
    'services.performance': 'تحسين الأداء',
    'services.performanceDesc': 'تحسين سرعة وأداء المواقع الحالية لتوفير تجربة مستخدم أفضل وترتيب أعلى في محركات البحث. أحدد وأصلح مشكلات الأداء وأحسن الكود وأنفذ استراتيجيات التخزين المؤقت.',
    'services.responsive': 'تصميم ويب متجاوب',
    'services.responsiveDesc': 'إنشاء مواقع ويب تبدو وتعمل بشكل رائع على جميع الأجهزة، من أجهزة الكمبيوتر المكتبية إلى الهواتف الذكية. أضمن أن موقعك يوفر تجربة مستخدم ممتازة بغض النظر عن حجم الشاشة أو نوع الجهاز.',
    'services.processTitle': 'كيف أعمل',
    'services.step1': 'استشارة أولية',
    'services.step1Desc': 'نبدأ بمحادثة مفصلة حول أهداف مشروعك ومتطلباته ورؤيتك. هذا يساعدني على فهم احتياجاتك بالضبط وكيف يمكنني خدمتك بشكل أفضل.',
    'services.step2': 'اقتراح وتخطيط',
    'services.step2Desc': 'سأقوم بإنشاء عرض مفصل يحدد نطاق المشروع والجدول الزمني والتكلفة. بمجرد الموافقة، أقوم بوضع خطة شاملة لتوجيه المشروع من البداية إلى النهاية.',
    'services.step3': 'تصميم وتطوير',
    'services.step3Desc': 'أقوم بإنشاء نماذج لموافقتك، ثم أبدأ عملية التطوير. طوال هذه المرحلة، أحافظ على اتصال منتظم لضمان تقدم المشروع وفقًا لتوقعاتك.',
    'services.step4': 'اختبار ومراجعة',
    'services.step4Desc': 'أختبر المشروع بدقة عبر أجهزة ومتصفحات مختلفة، وأصلح أي مشكلات تظهر. سيكون لديك الفرصة لمراجعة المشروع وطلب أي تعديلات.',
    'services.step5': 'إطلاق ودعم',
    'services.step5Desc': 'بمجرد الموافقة على كل شيء، أطلق مشروعك وأقدم الدعم لضمان سير كل شيء بسلاسة. كما أقدم خدمات صيانة للحفاظ على تحديث مشروعك.',
    'services.ctaTitle': 'هل أنت مستعد لبدء مشروعك؟',
    'services.ctaText': 'دعونا نعمل معًا لإنشاء شيء مذهل. تواصل معي لمناقشة مشروعك وكيف يمكنني المساعدة في تحقيق رؤيتك.',
    'services.ctaButton': 'تواصل معي',
    
    // صفحة التواصل
    'contact.title': 'تواصل معي',
    'contact.subtitle': 'لنتناقش حول مشروعك وكيف يمكنني المساعدة',
    'contact.getInTouch': 'ابقى على تواصل',
    'contact.description': 'أنا دائمًا منفتح لمشاريع وفرص جديدة. سواء كنت بحاجة إلى موقع ويب أو تطبيق ويب، أو فقط تريد التحدث حول تعاون محتمل، فلا تتردد في التواصل.',
    'contact.email': 'البريد الإلكتروني',
    'contact.phone': 'الهاتف',
    'contact.workingHours': 'ساعات العمل',
    'contact.hours': 'من الإثنين إلى الجمعة: 9 صباحًا - 6 مساءً',
    'contact.connect': 'تواصل معي',
    'contact.faqTitle': 'أسئلة متكررة',
    'contact.faq1': 'ما هي خطوات العمل المعتادة لمشروعك؟',
    'contact.faq1Answer': 'أتبع منهجية منظمة تشمل الاكتشاف والتخطيط والتصميم والتطوير والاختبار والنشر. أحافظ على مشاركة العملاء طوال العملية لضمان أن المنتج النهائي يلبي توقعاتهم.',
    'contact.faq2': 'كم من الوقت يستغرق إكمال المشروع؟',
    'contact.faq2Answer': 'تختلف المدة الزمنية للمشروع حسب التعقيد والنطاق. قد يستغرق موقع ويب بسيط من 2-4 أسابيع، بينما يمكن أن تستغرق التطبيقات الأكثر تعقيدًا عدة أشهر. أقدم جداول زمنية مفصلة خلال مرحلة العرض.',
    'contact.faq3': 'هل تقدم خدمات صيانة بعد اكتمال المشروع؟',
    'contact.faq3Answer': 'نعم، أقدم حزم صيانة مستمرة لضمان بقاء موقعك محدثًا وآمنًا ويعمل بشكل مثالي بعد الإطلاق.',
    'contact.faq4': 'ما هي شروط الدفع التي تقدمها؟',
    'contact.faq4Answer': 'أطلب عادةً دفعة مقدمة 30% لبدء العمل، مع استحقاق الرصيد المتبقي عند اكتمال المشروع. بالنسبة للمشاريع الأكبر، أقدم جداول دفع تعتمد على معالم المشروع.',

    // صفحة المهارات
    'skills.title': 'مهاراتي',
    'skills.subtitle': 'نظرة شاملة على خبراتي التقنية وقدراتي',
    'skills.technical': 'المهارات التقنية',
    'skills.design': 'مهارات التصميم',
    'skills.additional': 'مهارات إضافية',
    'skills.categories': 'فئات المهارات',
    'skills.frontend': 'تطوير الواجهة الأمامية',
    'skills.backend': 'تطوير الواجهة الخلفية',
    'skills.tools': 'الأدوات والمنهجيات',
 
    
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
