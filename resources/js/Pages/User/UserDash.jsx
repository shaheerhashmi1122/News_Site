
import UserNav from "@/Components/UserComponents/UserNav";
import UserSidebar from "@/Components/UserComponents/UserSidebar";
// import MobBar from "@/Components/UserComponents/MobBar";
import React, {useState} from 'react'


export default function UserDash() {
    const [showNav, setShowNav] = useState(false);

    return (
        // <AuthenticatedLayout
        //     user={auth.user}
        //     header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">UserDashboard</h2>}
        // >
        //     <Head title="UserDash" />

        //     <div className="py-12">
        //         <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
        //             <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
        //                 <div className="p-6 text-gray-900">You're logged in!</div>
        //             </div>
        //         </div>
        //     </div>
        // </AuthenticatedLayout>




        <div>
          
            <UserNav/>


          

            <div className="toggle-btn">
            <div className="btn btn-primary btn-sm" onClick={()=> setShowNav(!showNav)}>btn</div>
            </div>
           
            <UserSidebar show={showNav}/>
         
          
            

    
        </div>
    );
}
