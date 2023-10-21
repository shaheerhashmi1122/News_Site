import React from 'react'
import "../../../css/User/PageHead.css"
import ImgHead from "../../../js/Images/news-head.jpg"


export default function PageHead() {
  return (
    <div>
      <div className="page-name">
    <div className="container">
        {/* <h1 className="title">General</h1> */}
        <img src={ImgHead} alt="" />


    </div>
</div>
    </div>
  )
}
