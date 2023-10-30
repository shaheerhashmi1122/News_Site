import React, { useState } from "react";
import UserNav from "@/Components/UserComponents/UserNav";
import UserSidebar from "@/Components/UserComponents/UserSidebar";
import Footer from "@/Components/UserComponents/Footer";
import Slider from "@/Components/UserComponents/Slider";
import Language from "@/Components/UserComponents/Language";
import Content from "@/Components/UserComponents/Content";
import { useLanguage } from '../../../js/Components/UserComponents/LanguageContext';

const LanguageChanger = () => {
  const { currentLanguage, changeLanguage } = useLanguage();

  const handleLanguageChange = (newLanguage) => {
    changeLanguage(newLanguage);
  };

  return (
    <div>
    <button onClick={() => handleLanguageChange('en')}>English</button>
    <button onClick={() => handleLanguageChange('fr')}>French</button>
    </div>
  )
}
  const MyComponent = () => {
    const { currentLanguage } = useLanguage();
  
    // Define language-specific content
    const translations = {
      en: {
        greeting: 'Hello!',
        description: 'This is a React app.',
      },
      fr: {
        greeting: 'Bonjour!',
        description: 'Ceci est une application React.',
      },
    };
  }


export default function UserDash() {
    const styleHead = {
        fontSize: "45px",
        textAlign: "center",
        margin: "12px",
    };

    const { currentLanguage, changeLanguage } = useLanguage();

    const handleLanguageChange = (newLanguage) => {
        changeLanguage(newLanguage);
    };
    const [showMobileSidebar, setShowMobileSidebar] = useState(false);
    const toggleMobileSidebar = () => {
        setShowMobileSidebar(!showMobileSidebar);
    };

    const content = {
        en: {
            pageTitle: "GlobeLink",
        },
        fr: {
            pageTitle: "GlobeLink (French)",
        },
        // Add more translations as needed
    };

    return (
        <>
            <div className="container">
                <header>
                    <UserNav />
                    <LanguageChanger />
                    

                </header>

                <div className="toggle-btn">
                    <div
                        className="btn btn-primary"
                        onClick={() => setShowMobileSidebar(!showMobileSidebar)}
                    >
                        {" "}
                        <i className="bx bx-menu" style={{ fontSize: "24px" }}></i>{" "}
                    </div>
                </div>

                <UserSidebar show={showMobileSidebar} onClose={toggleMobileSidebar} />

                <h1 style={styleHead}>{content[currentLanguage].pageTitle}</h1>
                <Content />
                <Slider />
            </div>
            <Footer />
        </>
    );
}
