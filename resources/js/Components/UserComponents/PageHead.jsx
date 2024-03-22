import React from 'react';
import "../../../css/User/user.css";
import { MDBBreadcrumb, MDBBreadcrumbItem } from 'mdb-react-ui-kit';
import { Link } from '@inertiajs/react';

export default function PageHead({ breadcrumbs }) {
  return (
    <div className='container bread-crum py-4 px-4'>
      <MDBBreadcrumb>
        {breadcrumbs.map((breadcrumb, index) => (
          <MDBBreadcrumbItem key={index}>
            {breadcrumb.url ? (
              <Link href={breadcrumb.url}>{breadcrumb.label}</Link>
            ) : (
              breadcrumb.label
            )}
          </MDBBreadcrumbItem>
        ))}
      </MDBBreadcrumb>
    </div>
  );
}
