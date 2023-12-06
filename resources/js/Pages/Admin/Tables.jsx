import NavBar from "@/Components/AdminComponents/NavBar";
import React from 'react';
import AuthenticatedLayout from '../../Layouts/AuthenticatedLayout';
import MainPage from '../../Components/AdminComponents/MainPage';
import Revenue from '../../Components/AdminComponents/Revenue';
import { Head, usePage } from '@inertiajs/react';
import SideBar from '@/Components/AdminComponents/SideBar';
const Tables = () => {
    const { data,auth,author } = usePage().props;
  return (
    <AuthenticatedLayout auth={auth}>
<Head title="Tables"/>
           
                    
                        <MainPage />
                    
                    <div className="row mt-5">
                    
                                           <div className="col-12">
                                       <div className="card mb-4">
                                           <div className="card-header pb-0">
                                               <h6>User Data</h6>
                                           </div>
                                           <div className="card-body px-0 pt-0 pb-2">
                                               <div className="table-responsive p-0">
                                                   <table className="table align-items-center mb-0">
                                                       <thead>
                                                           <tr>
                                                               <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                                                                   Name
                                                               </th>
                                                               <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                                                                   Email
                                                               </th>
                                                               <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                                                                   Role
                                                               </th>
                                                               <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                                                                   Action
                                                               </th>
                                                           </tr>
                                                       </thead>
                                                       <tbody>
                                                       {data.map((data) => (
                                                           <tr key={data.id}>
                                                            
                                                               <td>
                                                                   <div className="d-flex px-2 py-1">
                                                                       <div className="d-flex flex-column justify-content-center">
                                                                           <h6 className="mb-0 text-sm">
                                                                               {data.name}
                                                                           </h6>
                                                                       </div>
                                                                   </div>
                                                               </td>
                                                               <td>
                                                                   <p className="text-xs font-weight-bold mb-0">
                                                                     {data.email}
                                                                   </p>
                                                               </td>
                                                               <td className="align-middle text-center text-sm">
                                                                   <span className="badge badge-sm bg-gradient-success">
                                                                       {data.role}
                                                                   </span>
                                                               </td>
                                                               <td className="align-middle text-center">
                                                               <a
                                                                       href="javascript:;"
                                                                       className="text-secondary font-weight-bold text-xs"
                                                                       data-toggle="tooltip"
                                                                       data-original-title="Edit user"
                                                                   >
                                                                       Contact
                                                                   </a>
                                                               </td>
                                                           </tr>
                                                           ))}
                                                       </tbody>
                                                   </table>
                                               </div>
                                           </div>
                                       </div>
                                       <div className="card mb-4">
                                           <div className="card-header pb-0">
                                               <h6>Author Data</h6>
                                           </div>
                                           <div className="card-body px-0 pt-0 pb-2">
                                               <div className="table-responsive p-0">
                                                   <table className="table align-items-center mb-0">
                                                       <thead>
                                                           <tr>
                                                               <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                                                                   Name
                                                               </th>
                                                               <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                                                                   Email
                                                               </th>
                                                               <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                                                                   Role
                                                               </th>
                                                           </tr>
                                                       </thead>
                                                       <tbody>
                                                       {author.map((author) => (
                                                           <tr key={author.id}>
                                                            
                                                               <td>
                                                                   <div className="d-flex px-2 py-1">
                                                                       <div className="d-flex flex-column justify-content-center">
                                                                           <h6 className="mb-0 text-sm">
                                                                               {author.name}
                                                                           </h6>
                                                                       </div>
                                                                   </div>
                                                               </td>
                                                               <td>
                                                                   <p className="text-xs font-weight-bold mb-0">
                                                                     {author.email}
                                                                   </p>
                                                               </td>
                                                               <td className="align-middle text-center text-sm">
                                                                   <span className="badge badge-sm bg-gradient-success">
                                                                       {author.role}
                                                                   </span>
                                                               </td>
                                                           </tr>
                                                           ))}
                                                       </tbody>
                                                   </table>
                                               </div>
                                           </div>
                                       </div>
                                   </div>
                               {/* </div>                            */}
                           </div>
                  
           
            
    </AuthenticatedLayout>
  );
};

export default Tables;
