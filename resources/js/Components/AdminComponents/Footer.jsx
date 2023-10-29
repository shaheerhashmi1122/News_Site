import React from "react";

export default function Footer() {
  return (
    <div className="container-fluid pt-4 px-4">
      <div className="bg-secondary rounded-top p-4">
        <div className="row">
          <div className="col-12 col-sm-6 text-center text-sm-start text-light">
            &copy; <a href="#">Globe Link</a>, All Right Reserved.
          </div>
          <div className="col-12 col-sm-6 text-center text-sm-end text-light">
            Designed By <a href="#">Globe Link</a>
            <br />
            Distributed By:{" "}
            <a href="#" target="_blank">
              Developers
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
