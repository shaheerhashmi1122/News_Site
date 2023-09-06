import React, { useState } from "react";

function DarkMode({ darkMode, toggleDarkMode }) {
  return (
    <div className="dark-mode-toggle">
      <label>
        <input
          type="checkbox"
          checked={darkMode}
          onChange={toggleDarkMode}
        />
        Dark Mode
      </label>
    </div>
  );
}

export default DarkMode;
