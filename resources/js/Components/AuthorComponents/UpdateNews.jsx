import React, { useState } from "react";
import { Head, Link, useForm, usePage } from "@inertiajs/react";

// import "../../../css/Admin/app.css";
// import "../../../css/Admin/Sidebar.css";

export default function SideBar() {
    const{NewsData} = usePage().props;
    console.log(NewsData);
  const { data, setData, post, processing, errors } = useForm({
    heading: NewsData.heading || "",
    description: NewsData.description || "",
    text: NewsData.text || "",
    image: NewsData.image || null,
  });


  const submit = (e) => {
    e.preventDefault();

    post(route("author.editform",NewsData.id), data);
  };
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      // Use createObjectURL to generate a URL for the selected image
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
      setData("image", file);
    }
  };

  return (

<>

<form onSubmit={submit}>
<div className="row mt-4">
                <div className="col-lg-4">
                    <div className="card h-100">
                        <div className="card-body">
                            <h5 className="font-weight-bolder">Image</h5>
                            <div className="form-floating mb-3">
                                <input
                                    type="file"
                                    name="image"
                                    className="form-control w-100 border-radius-lg shadow-lg mt-3"
                                    id="fileUpload"
                                    accept="image/*"
                                    onChange={handleImageChange}
                                />
                                <label htmlFor="fileUpload">
                                    Choose an image
                                </label>
                            </div>

                            <div className="row">
                                <div className="col-12">
                                {selectedImage && (
        <div>
          <img src={selectedImage} alt="Selected" style={{ maxWidth: '100%', maxHeight: '200px' }} />
        </div>
      )}                                 
                                </div>
                                <div className="col-12 mt-4">
                                    <div className="d-flex">
                                        <button
                                            className="btn bg-gradient-primary btn-sm mb-0 me-2"
                                            type="submit"
                                            name="button"
                                        >
                                            Upload
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-8 mt-lg-0 mt-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="font-weight-bolder">News</h5>
                            <div className="row">
                                <div className="col-12 col-sm-6">
                                    <label>Heading</label>
                                    <input
                                        className="form-control"
                                        type="text"
                                       placeholder="Heading"
                                        onfocus="focused(this)"
                                        name="heading"
                                        onfocusout="defocused(this)"
                                        defaultValue={NewsData.heading}
                                        onChange={(e) => setData('heading', e.target.value)}
                                    />
                                </div>
                                <div className="col-12 col-sm-6 mt-3 mt-sm-0">
                                    <label>Description</label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        placeholder="Description"
                                        onfocus="focused(this)"
                                        name="description"
                                        onfocusout="defocused(this)"
                                        defaultValue={NewsData.description}
                                        onChange={(e) => setData('description', e.target.value)}
                                    />

                                </div>
                            </div>
                        
                            <div className="form-group mt-4">
                                <div className="input-group">
                                    <span className="input-group-text">Detail</span>
                                    <textarea
                                        className="form-control"
                                        name="text"
                                        aria-label="With textarea"
                                        defaultValue={NewsData.text}
                                        onChange={(e) => setData('text', e.target.value)}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* </div> */}
            </div>
            </form>


</>
  );
}
