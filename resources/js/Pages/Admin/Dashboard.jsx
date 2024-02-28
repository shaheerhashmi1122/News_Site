import React from 'react';
import AuthenticatedLayout from '../../Layouts/AuthenticatedLayout';
import MainPage from '../../Components/AdminComponents/MainPage';
import Revenue from '../../Components/AdminComponents/Revenue';
// import { Head } from '@inertiajs/react';
import { Head } from '@inertiajs/react';
const Dashboard = ({ auth }) => {
  return (
    <AuthenticatedLayout auth={auth}>

           <Head title='Dashboard'/>
          
                        <MainPage />
        
                        <Revenue />
                  
           
            
    </AuthenticatedLayout>
  );
};

export default Dashboard;
