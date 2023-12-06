import React, { useState } from "react";
import { Head, Link, useForm } from "@inertiajs/react";

// import "../../../css/Admin/app.css";
// import "../../../css/Admin/Sidebar.css";

export default function SideBar() {
  // const { data, setData, post, processing, errors, reset } = useForm({
  //   heading: "",
  //   description: "",
  //   text: "",
  //   image: null, // Use null to store the image file
  // });

  // const handleImageChange = (e) => {
  //   const file = e.target.files[0];
  //   setData("image", file);
  // };

  // const submit = (e) => {
  //   e.preventDefault();

  //   post(route("author.add_news"));
  // };
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      // Use createObjectURL to generate a URL for the selected image
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
    }
  };

  return (
//     <form onSubmit={submit} className="mb-4">
//     <div className="col-sm-12 col-xl-6 ml-4">
//       <div className="bg-secondary rounded h-100 p-4">
//         <h6 className="mb-4">Upload News</h6>
//         <div className="form-floating mb-3">
//           <input
//             type="text"
//             name="heading"
//             value={data.heading}
//             className="form-control"
//             id="floatingInput"
//             placeholder="Heading"
//             onChange={(e) => setData('heading', e.target.value)}
//           />
//           <label htmlFor="floatingInput">Heading</label>
//         </div>
//         <div className="form-floating mb-3">
//           <input
//             type="text"
//             name="description"
//             value={data.description}
//             className="form-control"
//             id="floatingInput"
//             placeholder="description"
//             onChange={(e) => setData('description', e.target.value)}
//           />
//           <label htmlFor="floatingInput">Description</label>
//         </div>
//         <div className="form-floating mb-3">
//           <textarea
//             className="form-control"
//             name="text"
//             value={data.text}
//             placeholder="Write A text"
//             id="floatingTextarea"
//             style={{ height: "150px" }}
//             onChange={(e) => setData('text', e.target.value)}
//           ></textarea>
//           <label htmlFor="floatingTextarea">Text</label>
//         </div>
//         {/* Add an input for file upload */}
//         <div className="form-floating mb-3">
//           <input
//             type="file"
//             name="image"
//             className="form-control"
//             id="fileUpload"
//             accept="image/*"
//             onChange={handleImageChange}
//           />
//           <label htmlFor="fileUpload">Choose an image</label>
//         </div>
//       </div>
//       <div className="btn btn-danger" style={{marginLeft:"550px"}}>
//         <button type="submit">Submit</button>
//       </div>
//     </div>
// </form>


<>


<div class="row mt-4">
                <div class="col-lg-4">
                    <div class="card h-100">
                        <div class="card-body">
                            <h5 class="font-weight-bolder">Image</h5>
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

                            <div class="row">
                                <div class="col-12">
                                {selectedImage && (
        <div>
          <img src={selectedImage} alt="Selected" style={{ maxWidth: '100%', maxHeight: '200px' }} />
        </div>
      )}                                 
                                </div>
                                <div class="col-12 mt-4">
                                    <div class="d-flex">
                                        <button
                                            class="btn bg-gradient-primary btn-sm mb-0 me-2"
                                            type="button"
                                            name="button"
                                        >
                                            Upload
                                        </button>
                                        <button
                                            class="btn btn-outline-dark btn-sm mb-0"
                                            type="button"
                                            name="button"
                                        >
                                            Remove
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-8 mt-lg-0 mt-4">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="font-weight-bolder">News</h5>
                            <div class="row">
                                <div class="col-12 col-sm-6">
                                    <label>Heading</label>
                                    <input
                                        class="form-control"
                                        type="text"
                                       placeholder="Heading"
                                        onfocus="focused(this)"
                                        onfocusout="defocused(this)"
                                    />
                                </div>
                                <div class="col-12 col-sm-6 mt-3 mt-sm-0">
                                    <label>Description</label>
                                    <input
                                        class="form-control"
                                        type="text"
                                        placeholder="Description"
                                        onfocus="focused(this)"
                                        onfocusout="defocused(this)"
                                    />
                                </div>
                            </div>
                        
                            <div class="form-group mt-4">
                                <div class="input-group">
                                    <span class="input-group-text">Detail</span>
                                    <textarea
                                        class="form-control"
                                        aria-label="With textarea"
                                    ></textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* </div> */}
            </div>


</>
  );
}
