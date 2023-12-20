import React from 'react';
import AuthLayout from '@/Layouts/AuthLayout';



import NewsTable from '@/Components/AuthorComponents/NewsTable';


export default function tables({auth}) {


 

    return (
        <>
        

   <AuthLayout auth={auth}>
<NewsTable/>
   </AuthLayout>
                        </>
    );
}
