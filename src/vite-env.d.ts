
/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_BASE_URL: string;
  // أضف المتغيرات البيئية الأخرى هنا إذا احتجت
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
