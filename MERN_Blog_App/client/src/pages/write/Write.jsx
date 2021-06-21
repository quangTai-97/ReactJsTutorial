import React from "react";
import "./write.css";
import Sidebar from "./../../components/sidebar/Sidebar";
export default function Write() {
  return (
    <div className="write">
      <img
        className="writeImg"
        src="https://images.pexels.com/photos/7084164/pexels-photo-7084164.jpeg?cs=srgb&dl=pexels-lachlan-ross-7084164.jpg&fm=jpg"
        alt=""
      />
      <form className="writeForm">
        <div className="writeFormGroup">
          <label className="fileInput">
            <i className="writeIcon fas fa-plus"></i>
          </label>
          <input type="file" id="fileInput" style={{ display: "none" }} />
          <input
            type="text"
            placeholder="Title"
            className="writeInput"
            autofocus={true}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            className="writeInput writeText"
            type="text"
            placeholder="Tell your story..."
          ></textarea>
        </div>
        <button className="writeSubmit">Publish</button>
      </form>
    </div>
  );
}
