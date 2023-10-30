import React, { useState, useEffect } from "react";
import UserNav from "@/Components/UserComponents/UserNav";
import UserSidebar from "@/Components/UserComponents/UserSidebar";
import Footer from "@/Components/UserComponents/Footer";
import Content from "@/Components/UserComponents/Content";
import Slider from "@/Components/UserComponents/Slider";

export default function UserDash() {
  const styleHead = {
    fontSize: "45px",
    textAlign: "center",
    margin: "12px",
  };

  const [showMobileSidebar, setShowMobileSidebar] = useState(false);
  const toggleMobileSidebar = () => {
    setShowMobileSidebar(!showMobileSidebar);
  };

  return (
    <>
      <div className="container">
        <header>
          <UserNav />
        </header>

        <div className="toggle-btn">
          <div
            className="btn btn-primary "
            onClick={() => setShowMobileSidebar(!showMobileSidebar)}
          >
            {" "}
            <i className="bx bx-menu" style={{ fontSize: "24px" }}></i>{" "}
          </div>
        </div>

        <UserSidebar show={showMobileSidebar} onClose={toggleMobileSidebar} />

        <h1 style={styleHead}>GlobeLink</h1>

        

        <Content />
        <Slider />

        {/* Display the translated text */}
        <div>{translatedText}</div>
      </div>
      <Footer />
    </>
  );
}
