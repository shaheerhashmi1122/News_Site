import React, { useState } from "react";
import {  Link, useForm } from "@inertiajs/react";

// import "../../css/Admin/app.css";
// import "../../css/Admin/Sidebar.css";

export default function UploadNews  () {











  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      // Use createObjectURL to generate a URL for the selected image
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
    }
  };





    // const { data, setData, post, processing, errors, reset } = useForm({
    //     heading: "",
    //     description: "",
    //     text: "",
    //     image: null, // Use null to store the image file
    // });

    // const handleImageChange = (e) => {
    //     const file = e.target.files[0];
    //     setData("image", file);
    // };

    // const submit = (e) => {
    //     e.preventDefault();

    //     post(route("author.add_news"));
    // };

    return (
        <>



            {/* <form onSubmit={submit} className="mb-4">
            <div className="col-sm-12 col-xl-6 ml-4">
              <div className="bg-secondary rounded h-100 p-4">
                <h6 className="mb-4">Upload News</h6>
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    name="heading"
                    value={data.heading}
                    className="form-control"
                    id="floatingInput"
                    placeholder="Heading"
                    onChange={(e) => setData('heading', e.target.value)}
                  />
                  <label htmlFor="floatingInput">Heading</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    name="description"
                    value={data.description}
                    className="form-control"
                    id="floatingInput"
                    placeholder="description"
                    onChange={(e) => setData('description', e.target.value)}
                  />
                  <label htmlFor="floatingInput">Description</label>
                </div>
                <div className="form-floating mb-3">
                  <textarea
                    className="form-control"
                    name="text"
                    value={data.text}
                    placeholder="Write A text"
                    id="floatingTextarea"
                    style={{ height: "150px" }}
                    onChange={(e) => setData('text', e.target.value)}
                  ></textarea>
                  <label htmlFor="floatingTextarea">Text</label>
                </div>
                {/* Add an input for file upload */}
            {/* <div className="form-floating mb-3">
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
                <button type="submit">Submit</button>
              </div>
            </div> */}
            {/* </form> */}

            {/* <> */}

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
                            {/* <div class="row">
                                <div class="col-3">
                                    <label class="mt-4">Collection</label>
                                    <input
                                        class="form-control"
                                        type="text"
                                        value="Summer"
                                        onfocus="focused(this)"
                                        onfocusout="defocused(this)"
                                    />
                                </div>
                                <div class="col-3">
                                    <label class="mt-4">Price</label>
                                    <input
                                        class="form-control"
                                        type="text"
                                        value="$90"
                                        onfocus="focused(this)"
                                        onfocusout="defocused(this)"
                                    />
                                </div>
                                <div class="col-3">
                                    <label class="mt-4">Quantity</label>
                                    <input
                                        class="form-control"
                                        type="number"
                                        value="50"
                                        onfocus="focused(this)"
                                        onfocusout="defocused(this)"
                                    />
                                </div>
                            </div> */}
                            {/* <div class="row">
                                <div class="col-sm-6">
                                    <label class="mt-4">Description</label>
                                    <p class="form-text text-muted text-xs ms-1 d-inline">
                                        (optional)
                                    </p>
                                    <div class="ql-toolbar ql-snow">
                                        <span class="ql-formats">
                                            <span class="ql-header ql-picker">
                                                <span
                                                    class="ql-picker-label"
                                                    tabindex="0"
                                                    role="button"
                                                    aria-expanded="false"
                                                    aria-controls="ql-picker-options-0"
                                                >
                                                    <svg viewBox="0 0 18 18">
                                                        {" "}
                                                        <polygon
                                                            class="ql-stroke"
                                                            points="7 11 9 13 11 11 7 11"
                                                        ></polygon>{" "}
                                                        <polygon
                                                            class="ql-stroke"
                                                            points="7 7 9 5 11 7 7 7"
                                                        ></polygon>{" "}
                                                    </svg>
                                                </span>
                                                <span
                                                    class="ql-picker-options"
                                                    aria-hidden="true"
                                                    tabindex="-1"
                                                    id="ql-picker-options-0"
                                                >
                                                    <span
                                                        tabindex="0"
                                                        role="button"
                                                        class="ql-picker-item"
                                                        data-value="1"
                                                    ></span>
                                                    <span
                                                        tabindex="0"
                                                        role="button"
                                                        class="ql-picker-item"
                                                        data-value="2"
                                                    ></span>
                                                    <span
                                                        tabindex="0"
                                                        role="button"
                                                        class="ql-picker-item"
                                                        data-value="3"
                                                    ></span>
                                                    <span
                                                        tabindex="0"
                                                        role="button"
                                                        class="ql-picker-item"
                                                    ></span>
                                                </span>
                                            </span>
                                            <select
                                                class="ql-header"
                                                style={{display: "none;"}}
                                            >
                                                <option value="1"></option>
                                                <option value="2"></option>
                                                <option value="3"></option>
                                                <option selected="selected"></option>
                                            </select>
                                        </span>
                                        <span class="ql-formats">
                                            <button
                                                type="button"
                                                class="ql-bold"
                                            >
                                                <svg viewBox="0 0 18 18">
                                                    {" "}
                                                    <path
                                                        class="ql-stroke"
                                                        d="M5,4H9.5A2.5,2.5,0,0,1,12,6.5v0A2.5,2.5,0,0,1,9.5,9H5A0,0,0,0,1,5,9V4A0,0,0,0,1,5,4Z"
                                                    ></path>{" "}
                                                    <path
                                                        class="ql-stroke"
                                                        d="M5,9h5.5A2.5,2.5,0,0,1,13,11.5v0A2.5,2.5,0,0,1,10.5,14H5a0,0,0,0,1,0,0V9A0,0,0,0,1,5,9Z"
                                                    ></path>{" "}
                                                </svg>
                                            </button>
                                            <button
                                                type="button"
                                                class="ql-italic"
                                            >
                                                <svg viewBox="0 0 18 18">
                                                    {" "}
                                                    <line
                                                        class="ql-stroke"
                                                        x1="7"
                                                        x2="13"
                                                        y1="4"
                                                        y2="4"
                                                    ></line>{" "}
                                                    <line
                                                        class="ql-stroke"
                                                        x1="5"
                                                        x2="11"
                                                        y1="14"
                                                        y2="14"
                                                    ></line>{" "}
                                                    <line
                                                        class="ql-stroke"
                                                        x1="8"
                                                        x2="10"
                                                        y1="14"
                                                        y2="4"
                                                    ></line>{" "}
                                                </svg>
                                            </button>
                                            <button
                                                type="button"
                                                class="ql-underline"
                                            >
                                                <svg viewBox="0 0 18 18">
                                                    {" "}
                                                    <path
                                                        class="ql-stroke"
                                                        d="M5,3V9a4.012,4.012,0,0,0,4,4H9a4.012,4.012,0,0,0,4-4V3"
                                                    ></path>{" "}
                                                    <rect
                                                        class="ql-fill"
                                                        height="1"
                                                        rx="0.5"
                                                        ry="0.5"
                                                        width="12"
                                                        x="3"
                                                        y="15"
                                                    ></rect>{" "}
                                                </svg>
                                            </button>
                                            <button
                                                type="button"
                                                class="ql-link"
                                            >
                                                <svg viewBox="0 0 18 18">
                                                    {" "}
                                                    <line
                                                        class="ql-stroke"
                                                        x1="7"
                                                        x2="11"
                                                        y1="7"
                                                        y2="11"
                                                    ></line>{" "}
                                                    <path
                                                        class="ql-even ql-stroke"
                                                        d="M8.9,4.577a3.476,3.476,0,0,1,.36,4.679A3.476,3.476,0,0,1,4.577,8.9C3.185,7.5,2.035,6.4,4.217,4.217S7.5,3.185,8.9,4.577Z"
                                                    ></path>{" "}
                                                    <path
                                                        class="ql-even ql-stroke"
                                                        d="M13.423,9.1a3.476,3.476,0,0,0-4.679-.36,3.476,3.476,0,0,0,.36,4.679c1.392,1.392,2.5,2.542,4.679.36S14.815,10.5,13.423,9.1Z"
                                                    ></path>{" "}
                                                </svg>
                                            </button>
                                        </span>
                                        <span class="ql-formats">
                                            <button
                                                type="button"
                                                class="ql-list"
                                                value="ordered"
                                            >
                                                <svg viewBox="0 0 18 18">
                                                    {" "}
                                                    <line
                                                        class="ql-stroke"
                                                        x1="7"
                                                        x2="15"
                                                        y1="4"
                                                        y2="4"
                                                    ></line>{" "}
                                                    <line
                                                        class="ql-stroke"
                                                        x1="7"
                                                        x2="15"
                                                        y1="9"
                                                        y2="9"
                                                    ></line>{" "}
                                                    <line
                                                        class="ql-stroke"
                                                        x1="7"
                                                        x2="15"
                                                        y1="14"
                                                        y2="14"
                                                    ></line>{" "}
                                                    <line
                                                        class="ql-stroke ql-thin"
                                                        x1="2.5"
                                                        x2="4.5"
                                                        y1="5.5"
                                                        y2="5.5"
                                                    ></line>{" "}
                                                    <path
                                                        class="ql-fill"
                                                        d="M3.5,6A0.5,0.5,0,0,1,3,5.5V3.085l-0.276.138A0.5,0.5,0,0,1,2.053,3c-0.124-.247-0.023-0.324.224-0.447l1-.5A0.5,0.5,0,0,1,4,2.5v3A0.5,0.5,0,0,1,3.5,6Z"
                                                    ></path>{" "}
                                                    <path
                                                        class="ql-stroke ql-thin"
                                                        d="M4.5,10.5h-2c0-.234,1.85-1.076,1.85-2.234A0.959,0.959,0,0,0,2.5,8.156"
                                                    ></path>{" "}
                                                    <path
                                                        class="ql-stroke ql-thin"
                                                        d="M2.5,14.846a0.959,0.959,0,0,0,1.85-.109A0.7,0.7,0,0,0,3.75,14a0.688,0.688,0,0,0,.6-0.736,0.959,0.959,0,0,0-1.85-.109"
                                                    ></path>{" "}
                                                </svg>
                                            </button>
                                            <button
                                                type="button"
                                                class="ql-list"
                                                value="bullet"
                                            >
                                                <svg viewBox="0 0 18 18">
                                                    {" "}
                                                    <line
                                                        class="ql-stroke"
                                                        x1="6"
                                                        x2="15"
                                                        y1="4"
                                                        y2="4"
                                                    ></line>{" "}
                                                    <line
                                                        class="ql-stroke"
                                                        x1="6"
                                                        x2="15"
                                                        y1="9"
                                                        y2="9"
                                                    ></line>{" "}
                                                    <line
                                                        class="ql-stroke"
                                                        x1="6"
                                                        x2="15"
                                                        y1="14"
                                                        y2="14"
                                                    ></line>{" "}
                                                    <line
                                                        class="ql-stroke"
                                                        x1="3"
                                                        x2="3"
                                                        y1="4"
                                                        y2="4"
                                                    ></line>{" "}
                                                    <line
                                                        class="ql-stroke"
                                                        x1="3"
                                                        x2="3"
                                                        y1="9"
                                                        y2="9"
                                                    ></line>{" "}
                                                    <line
                                                        class="ql-stroke"
                                                        x1="3"
                                                        x2="3"
                                                        y1="14"
                                                        y2="14"
                                                    ></line>{" "}
                                                </svg>
                                            </button>
                                        </span>
                                        <span class="ql-formats">
                                            <button
                                                type="button"
                                                class="ql-clean"
                                            >
                                                <svg
                                                    class=""
                                                    viewBox="0 0 18 18"
                                                >
                                                    {" "}
                                                    <line
                                                        class="ql-stroke"
                                                        x1="5"
                                                        x2="13"
                                                        y1="3"
                                                        y2="3"
                                                    ></line>{" "}
                                                    <line
                                                        class="ql-stroke"
                                                        x1="6"
                                                        x2="9.35"
                                                        y1="12"
                                                        y2="3"
                                                    ></line>{" "}
                                                    <line
                                                        class="ql-stroke"
                                                        x1="11"
                                                        x2="15"
                                                        y1="11"
                                                        y2="15"
                                                    ></line>{" "}
                                                    <line
                                                        class="ql-stroke"
                                                        x1="15"
                                                        x2="11"
                                                        y1="11"
                                                        y2="15"
                                                    ></line>{" "}
                                                    <rect
                                                        class="ql-fill"
                                                        height="1"
                                                        rx="0.5"
                                                        ry="0.5"
                                                        width="7"
                                                        x="2"
                                                        y="14"
                                                    ></rect>{" "}
                                                </svg>
                                            </button>
                                        </span>
                                    </div>
                                    <div
                                        id="edit-deschiption-edit"
                                        class="h-50 ql-container ql-snow"
                                    >
                                        <div
                                            class="ql-editor"
                                            data-gramm="false"
                                            contenteditable="true"
                                        >
                                            <p>
                                                Long sleeves black denim jacket
                                                with a twisted design. Contrast
                                                stitching. Button up closure.
                                                White arrow prints on the back.
                                            </p>
                                        </div>
                                        <div
                                            class="ql-clipboard"
                                            contenteditable="true"
                                            tabindex="-1"
                                        ></div>
                                        <div class="ql-tooltip ql-hidden">
                                            <a
                                                class="ql-preview"
                                                rel="noopener noreferrer"
                                                target="_blank"
                                                href="about:blank"
                                            ></a>
                                            <input
                                                type="text"
                                                data-formula="e=mc^2"
                                                data-link="https://quilljs.com"
                                                data-video="Embed URL"
                                            />
                                            <a class="ql-action"></a>
                                            <a class="ql-remove"></a>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <label class="mt-4">Category</label>
                                    <div
                                        class="choices"
                                        data-type="select-one"
                                        tabindex="0"
                                        role="listbox"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                    >
                                        <div class="choices__inner">
                                            <select
                                                class="form-control choices__input"
                                                name="choices-category"
                                                id="choices-category-edit"
                                                hidden=""
                                                tabindex="-1"
                                                data-choice="active"
                                            >
                                                <option value="Choice 1">
                                                    Furniture
                                                </option>
                                            </select>
                                            <div class="choices__list choices__list--single">
                                                <div
                                                    class="choices__item choices__item--selectable"
                                                    data-item=""
                                                    data-id="1"
                                                    data-value="Choice 1"
                                                    data-custom-properties="null"
                                                    aria-selected="true"
                                                >
                                                    Furniture
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            class="choices__list choices__list--dropdown"
                                            aria-expanded="false"
                                        >
                                            <div
                                                class="choices__list"
                                                role="listbox"
                                            >
                                                <div
                                                    id="choices--choices-category-edit-item-choice-1"
                                                    class="choices__item choices__item--choice choices__item--selectable is-highlighted"
                                                    role="option"
                                                    data-choice=""
                                                    data-id="1"
                                                    data-value="Choice 4"
                                                    data-select-text="Press to select"
                                                    data-choice-selectable=""
                                                    aria-selected="true"
                                                >
                                                    Clothing
                                                </div>
                                                <div
                                                    id="choices--choices-category-edit-item-choice-2"
                                                    class="choices__item choices__item--choice choices__item--selectable"
                                                    role="option"
                                                    data-choice=""
                                                    data-id="2"
                                                    data-value="Choice 3"
                                                    data-select-text="Press to select"
                                                    data-choice-selectable=""
                                                >
                                                    Electronics
                                                </div>
                                                <div
                                                    id="choices--choices-category-edit-item-choice-3"
                                                    class="choices__item choices__item--choice is-selected choices__item--selectable"
                                                    role="option"
                                                    data-choice=""
                                                    data-id="3"
                                                    data-value="Choice 1"
                                                    data-select-text="Press to select"
                                                    data-choice-selectable=""
                                                >
                                                    Furniture
                                                </div>
                                                <div
                                                    id="choices--choices-category-edit-item-choice-4"
                                                    class="choices__item choices__item--choice choices__item--selectable"
                                                    role="option"
                                                    data-choice=""
                                                    data-id="4"
                                                    data-value="Choice 5"
                                                    data-select-text="Press to select"
                                                    data-choice-selectable=""
                                                >
                                                    Others
                                                </div>
                                                <div
                                                    id="choices--choices-category-edit-item-choice-5"
                                                    class="choices__item choices__item--choice choices__item--selectable"
                                                    role="option"
                                                    data-choice=""
                                                    data-id="5"
                                                    data-value="Choice 2"
                                                    data-select-text="Press to select"
                                                    data-choice-selectable=""
                                                >
                                                    Real Estate
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <label>Color</label>
                                    <div
                                        class="choices"
                                        data-type="select-one"
                                        tabindex="0"
                                        role="listbox"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                    >
                                        <div class="choices__inner">
                                            <select
                                                class="form-control choices__input"
                                                name="choices-color"
                                                id="choices-color-edit"
                                                hidden=""
                                                tabindex="-1"
                                                data-choice="active"
                                            >
                                                <option value="Choice 1">
                                                    Black
                                                </option>
                                            </select>
                                            <div class="choices__list choices__list--single">
                                                <div
                                                    class="choices__item choices__item--selectable"
                                                    data-item=""
                                                    data-id="1"
                                                    data-value="Choice 1"
                                                    data-custom-properties="null"
                                                    aria-selected="true"
                                                >
                                                    Black
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            class="choices__list choices__list--dropdown"
                                            aria-expanded="false"
                                        >
                                            <div
                                                class="choices__list"
                                                role="listbox"
                                            >
                                                <div
                                                    id="choices--choices-color-edit-item-choice-1"
                                                    class="choices__item choices__item--choice is-selected choices__item--selectable is-highlighted"
                                                    role="option"
                                                    data-choice=""
                                                    data-id="1"
                                                    data-value="Choice 1"
                                                    data-select-text="Press to select"
                                                    data-choice-selectable=""
                                                    aria-selected="true"
                                                >
                                                    Black
                                                </div>
                                                <div
                                                    id="choices--choices-color-edit-item-choice-2"
                                                    class="choices__item choices__item--choice choices__item--selectable"
                                                    role="option"
                                                    data-choice=""
                                                    data-id="2"
                                                    data-value="Choice 3"
                                                    data-select-text="Press to select"
                                                    data-choice-selectable=""
                                                >
                                                    Blue
                                                </div>
                                                <div
                                                    id="choices--choices-color-edit-item-choice-3"
                                                    class="choices__item choices__item--choice choices__item--selectable"
                                                    role="option"
                                                    data-choice=""
                                                    data-id="3"
                                                    data-value="Choice 5"
                                                    data-select-text="Press to select"
                                                    data-choice-selectable=""
                                                >
                                                    Green
                                                </div>
                                                <div
                                                    id="choices--choices-color-edit-item-choice-4"
                                                    class="choices__item choices__item--choice choices__item--selectable"
                                                    role="option"
                                                    data-choice=""
                                                    data-id="4"
                                                    data-value="Choice 4"
                                                    data-select-text="Press to select"
                                                    data-choice-selectable=""
                                                >
                                                    Orange
                                                </div>
                                                <div
                                                    id="choices--choices-color-edit-item-choice-5"
                                                    class="choices__item choices__item--choice choices__item--selectable"
                                                    role="option"
                                                    data-choice=""
                                                    data-id="5"
                                                    data-value="Choice 2"
                                                    data-select-text="Press to select"
                                                    data-choice-selectable=""
                                                >
                                                    White
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> */}

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
