import React from "react";
import  "../../../css/User/user.css";
import Dropdown from "../AdminComponents/Dropdown";

export default function UserNav(user) {
    return (

<>




<div className="container">


<div role="navigation">
  

    <div className="border-bottom  d-flex ">
      <div >
        <div className="py-2 px-5  bg-dark text-white" style={{borderRadius:"50px"}}>Updates</div>
      </div>
      <div className="px-1" style={{overflow:"hidden"}}>
        <div id="scrollContent" className="text-secondary mb-4">
          <div>Lorem Ipsum is simply dummy text. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages. It is a long
            established fact that a reader will be distracted by the readable content of a page when looking at its layout</div>
        </div>
      </div>
    </div>
  </div>


</div>

</>
    );
}
