import React, { useState } from "react";
import { Head, Link, useForm } from "@inertiajs/react";

import "../../../css/Admin/app.css";
import "../../../css/Admin/Sidebar.css";

export default function SideBar() {
  const { data, setData, post, processing, errors, reset } = useForm({
    heading: "",
    description: "",
    text: "",
    image: null, // Use null to store the image file
  });

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setData("image", file);
  };

  const submit = (e) => {
    e.preventDefault();

    post(route("author.add_news"));
  };
  

  return (
    <form action="submit" className="mb-4">
    <div className="col-sm-12 col-xl-6 ml-4">
      <div className="bg-secondary rounded h-100 p-4">
        <h6 className="mb-4">Upload News</h6>
        <div className="form-floating mb-3">
          <input
            type="text"
            name="heading"
            className="form-control"
            id="floatingInput"
            placeholder="Heading"
          />
          <label htmlFor="floatingInput">Heading</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="text"
            name="description"
            className="form-control"
            id="floatingInput"
            placeholder="description"
          />
          <label htmlFor="floatingInput">Description</label>
        </div>
        <div className="form-floating mb-3">
          <textarea
            className="form-control"
            name="text"
            placeholder="Write A text"
            id="floatingTextarea"
            style={{ height: "150px" }}
          ></textarea>
          <label htmlFor="floatingTextarea">Text</label>
        </div>
        {/* Add an input for file upload */}
        <div className="form-floating mb-3">
          <input
            type="file"
            name="image"
            className="form-control"
            id="fileUpload"
            accept="image/*"
            onChange={handleImageChange}
          />
          <label htmlFor="fileUpload">Choose an image</label>
        </div>
      </div>
      <div className="btn btn-danger" style={{marginLeft:"550px"}}>
        Submit
      </div>
    </div>
            </form>
  );
}
