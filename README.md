
# 🌟 My Portfolio Website

موقع شخصي احترافي لعرض أعمالي ومهاراتي في تطوير الويب والتصميم

## 📋 نظرة عامة

هذا موقع شخصي تم بناؤه باستخدام أحدث تقنيات الويب لعرض مشاريعي ومهاراتي كمطور ويب ومصمم. الموقع يتميز بتصميم عصري وتجربة مستخدم سلسة مع دعم كامل للعربية والإنجليزية.

## ✨ المميزات

- 🎨 **تصميم عصري وجذاب** - واجهة مستخدم حديثة مع تأثيرات بصرية متقدمة
- 📱 **تصميم متجاوب** - يعمل بشكل مثالي على جميع الأجهزة
- 🌙 **وضع مظلم/فاتح** - إمكانية التبديل بين الأوضاع
- ⚡ **أداء عالي** - تحميل سريع وتفاعل سلس
- 🌐 **دعم متعدد اللغات** - العربية والإنجليزية
- 🔍 **SEO محسن** - محرك بحث مُحسن
- 📧 **نموذج اتصال** - إمكانية التواصل المباشر

## 🛠️ التقنيات المستخدمة

### Frontend
- **React 18** - مكتبة JavaScript لبناء واجهات المستخدم
- **TypeScript** - JavaScript مع الكتابة الثابتة
- **Vite** - أداة بناء سريعة وحديثة
- **React Router** - للتنقل بين الصفحات
- **Tailwind CSS** - إطار عمل CSS للتصميم السريع
- **Tailwind Animate** - تأثيرات الحركة والانتقالات
- **Shadcn/ui** - مكونات UI جاهزة وعالية الجودة

### State Management & Data
- **TanStack Query** - إدارة البيانات والطلبات
- **React Hook Form** - إدارة النماذج
- **Zod** - التحقق من صحة البيانات

### Icons & Charts
- **Lucide React** - مجموعة أيقونات حديثة
- **Recharts** - مكتبة الرسوم البيانية

### Development Tools
- **ESLint** - أداة فحص جودة الكود
- **PostCSS** - معالج CSS
- **Autoprefixer** - إضافة البادئات تلقائياً

## 📁 هيكل المشروع

```
my-portfolio/
├── public/                 # الملفات الثابتة
│   ├── lovable-uploads/   # صور المشاريع
│   └── favicon.ico        # أيقونة الموقع
├── src/
│   ├── components/        # المكونات القابلة لإعادة الاستخدام
│   │   ├── Layout.tsx     # تخطيط الصفحة الرئيسي
│   │   ├── Navbar.tsx     # شريط التنقل
│   │   ├── HeroSection.tsx # قسم الهيرو
│   │   ├── ProjectCard.tsx # بطاقة المشروع
│   │   └── ui/           # مكونات واجهة المستخدم
│   ├── pages/            # صفحات الموقع
│   │   ├── Index.tsx     # الصفحة الرئيسية
│   │   ├── About.tsx     # صفحة نبذة عني
│   │   ├── Projects.tsx  # صفحة المشاريع
│   │   ├── Services.tsx  # صفحة الخدمات
│   │   ├── Skills.tsx    # صفحة المهارات
│   │   ├── Contact.tsx   # صفحة التواصل
│   │   └── NotFound.tsx  # صفحة 404
│   ├── lib/              # المكتبات والأدوات المساعدة
│   ├── hooks/            # React Hooks مخصصة
│   ├── App.tsx           # مكون التطبيق الرئيسي
│   ├── main.tsx          # نقطة دخول التطبيق
│   └── index.css         # أنماط CSS الرئيسية
├── tailwind.config.ts    # إعدادات Tailwind CSS
├── vite.config.ts        # إعدادات Vite
├── tsconfig.json         # إعدادات TypeScript
└── package.json          # تبعيات المشروع
```

## 🚀 البدء السريع

### المتطلبات الأساسية

- Node.js (الإصدار 18 أو أحدث)
- npm أو yarn أو pnpm

### التثبيت

```bash
# استنساخ المستودع
git clone https://github.com/your-username/my-portfolio.git

# الانتقال إلى مجلد المشروع
cd my-portfolio

# تثبيت التبعيات
npm install

# تشغيل الخادم المحلي
npm run dev
```

الموقع سيكون متاحاً على: `http://localhost:8080`

## 📝 الأوامر المتاحة

```bash
# تشغيل الخادم المحلي للتطوير
npm run dev

# بناء المشروع للإنتاج
npm run build

# معاينة البناء المحلي
npm run preview

# فحص جودة الكود
npm run lint
```

## 🎨 التخصيص

### تخصيص الألوان
يمكنك تخصيص نظام الألوان من خلال تعديل ملف `src/index.css`:

```css
:root {
  --background: 210 40% 98%;
  --foreground: 222.2 84% 4.9%;
  --primary: 222.2 47.4% 11.2%;
  /* ... باقي الألوان */
}
```

### تخصيص الخطوط
يمكنك تغيير الخطوط من خلال تعديل `tailwind.config.ts`:

```ts
fontFamily: {
  sans: ['Inter', 'sans-serif'],
  display: ['SF Pro Display', 'Inter', 'sans-serif'],
}
```

### إضافة مشاريع جديدة
لإضافة مشروع جديد، قم بتعديل مصفوفة `projects` في `src/pages/Projects.tsx`:

```tsx
const projects = [
  {
    title: "اسم المشروع",
    description: "وصف المشروع",
    link: "https://link-to-project.com",
    image: "/path-to-image.png",
  },
  // ...باقي المشاريع
];
```

## 📱 الصفحات المتاحة

- **الرئيسية** (`/`) - صفحة الهبوط الرئيسية
- **نبذة عني** (`/about`) - معلومات شخصية ومهنية
- **المشاريع** (`/projects`) - عرض جميع المشاريع
- **الخدمات** (`/services`) - الخدمات المقدمة
- **المهارات** (`/skills`) - المهارات التقنية
- **التواصل** (`/contact`) - نموذج التواصل

## 🌐 النشر

### Netlify
```bash
npm run build
# رفع مجلد dist إلى Netlify
```

### Vercel
```bash
npm install -g vercel
vercel --prod
```

### GitHub Pages
```bash
npm run build
# نشر مجلد dist على GitHub Pages
```

## 🤝 المساهمة

أرحب بالمساهمات! إذا كان لديك اقتراحات للتحسين:

1. Fork المشروع
2. إنشاء فرع للميزة الجديدة (`git checkout -b feature/AmazingFeature`)
3. Commit التغييرات (`git commit -m 'Add some AmazingFeature'`)
4. Push للفرع (`git push origin feature/AmazingFeature`)
5. فتح Pull Request

## 📄 الترخيص

هذا المشروع مرخص تحت رخصة MIT - راجع ملف [LICENSE](LICENSE) للتفاصيل.

## 📞 التواصل

**Rasheed Sharaf AL-Deen**
- 📧 Email: mazen1221cool@gmail.com
- 📱 Phone: +966539628489
- 🌐 Portfolio: [your-portfolio-url.com]

## 🙏 شكر وتقدير

شكر خاص للمكتبات والأدوات مفتوحة المصدر التي جعلت هذا المشروع ممكناً:

- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vite](https://vitejs.dev/)
- [Shadcn/ui](https://ui.shadcn.com/)
- [Lucide Icons](https://lucide.dev/)

---

⭐ إذا أعجبك هذا المشروع، لا تنس إعطاؤه نجمة على GitHub!
