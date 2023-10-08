// Layout.js
import React from 'react';
import UserSidebar from "@/Components/UserComponents/UserSidebar"
const UserLayout = ({ children }) => {
  return (
    <div className="app">
    
    <UserSidebar />
      <main>{children}</main>
    </div>
  );
};

export default UserLayout;
