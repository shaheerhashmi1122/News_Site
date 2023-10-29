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
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
          />
          <label htmlFor="floatingInput">Email address</label>
        </div>        <div className="form-floating mb-3">
          <input
            type="file"
            className="form-control"
            id="fileUpload"
            accept="image/*"
            onChange={handleImageChange}
          />
          <label htmlFor="fileUpload">Choose an image</label>
        </div>
        <div className="form-floating mb-3">
          <select
            className="form-select"
            id="floatingSelect"
            aria-label="Floating label select example"
          >
            <option selected>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
          <label htmlFor="floatingSelect">Works with selects</label>
        </div>
        <div className="form-floating">
          <textarea
            className="form-control"
            placeholder="Leave a comment here"
            id="floatingTextarea"
            style={{ height: "150px" }}
          ></textarea>
          <label htmlFor="floatingTextarea">Description</label>
        </div>
      </div>
      <div className="btn btn-danger" style={{marginLeft:"550px"}}>
        Submit
      </div>
    </div>
            </form>
  );
}
