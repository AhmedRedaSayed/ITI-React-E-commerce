import React from "react";
export default function Footer() {
  return (
    <div className=" footer mt-auto bg-body-tertiary p-5">
      <div className="row">
        <div className="col-md-12 text-start">
        </div>
        <div className="col-md-12 d-flex  justify-content-between ">
          <div
            className=" ps-3 py-2"
            style={{
              width: "85%",
            }}
          >
            <textarea
              placeholder="Your Feed Back"
              type="text"
              className="form-control mb-3 "
              id="footerEmail"
            />
          </div>
          <div
            className="py-2"
            style={{
              width: "15%",
            }}
          >
          </div>
        </div>
       
      </div>
    </div>
  );
}
