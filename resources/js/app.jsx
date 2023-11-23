import './bootstrap';
import '../css/Admin/app.css';
import '../css/User/Udash.css';
// import global_en from '../js/Components/UserComponents/en/global.json';
// import global_en from '../js/Components/UserComponents/es/global.json';
// import i18next from 'i18next';
// import { I18nextProvider } from 'react-i18next';
import { createRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

// i18next.init({
//   interpolation: { escapeValue: false },
//   lng: 'en',
//   resources: {
//     en: {
//       global: global_en,
//     }, es: {
//       global: global_en,
//     },
//   },
// });

createInertiaApp({
  title: (title) => `${title} - ${appName}`,
  resolve: (name) =>
    resolvePageComponent(`./Pages/${name}.jsx`, import.meta.glob('./Pages/**/*.jsx')),

  setup({ el, App, props }) {
    const root = createRoot(el);

    root.render(
        <App {...props} />
  
    );
  },
  progress: {
    color: '#4B5563',
  },
});
