import React from 'react';
import AuthorSidebar from '@/Components/AuthorComponents/AuthorSidebar';

export default function NewsTable() {
    return (

<AuthorSidebar/>

        <div className="container-fluid pt-4 px-4">
            <div className="row g-4">
                <div className="col-sm-12 col-xl-6">
                    <div className="bg-secondary rounded h-100 p-4">
                        <h6 className="mb-4">Basic Table</h6>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">First Name</th>
                                    <th scope="col">Last Name</th>
                                    <th scope="col">Email</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>John</td>
                                    <td>Doe</td>
                                    <td>john@email.com</td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>mark@email.com</td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>jacob@email.com</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
             
            </div>
        </div>
        <Footer/>
    );
}
