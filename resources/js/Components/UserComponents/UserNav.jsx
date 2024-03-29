import React from "react";
import  "../../../css/User/user.css";
import { usePage } from "@inertiajs/react";

export default function UserNav() {
  const{ head }=usePage().props;
  // console.log(head)
    return (

<>




<div className="nav">


<div className="container" >
<div role="navigation" className="mt-3">
  

    <div className="border-bottom  d-flex ">
      <div >
        <div className="py-2 px-5  bg-dark text-white" style={{borderRadius:"50px"}}>Updates</div>
      </div>
      <div className="px-1" style={{overflow:"hidden"}}>
        <div id="scrollContent" className="text-secondary mb-4">
          {head.map((head, index) => (
            <div key={index}>{head.heading}</div>
          ))}
        </div>
      </div>
    </div>
  </div>


</div>
</div>

</>
    );
}
