import React from 'react';
import { useTranslation } from 'react-i18next';

export default function Language() {
  const { t, i18n } = useTranslation("global");

  const handleChangeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  }

  return (
    <div>
      {t("home.body")} 
      <button onClick={() => handleChangeLanguage('en')}>English</button>
      <button onClick={() => handleChangeLanguage('es')}>Spanish</button>
    </div>
  );
}
