import React from "react";
import "./settings.css";
import Sidebar from "./../../components/sidebar/Sidebar";

export default function Settings() {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update your Account</span>
          <span className="settingsDeleteTitle">Delete Account</span>
        </div>
        <form className="settingsForm">
          <label for="">Profile Picture</label>
          <div className="settingsPP">
            <img
              src="https://images.pexels.com/photos/8197559/pexels-photo-8197559.jpeg?cs=srgb&dl=pexels-diana-smykova-8197559.jpg&fm=jpg"
              alt=""
            />
            <label htmlFor="fileInput">
              <i class="settingsPPIcon far fa-user-circle"></i>
            </label>
            <input type="file" id="fileInput" style={{ display: "none" }} />
          </div>
          <label for="">Username</label>
          <input type="text" name="" placeholder="Tài Đỗ" />
          <label for="">Email</label>
          <input type="email" name="" placeholder="taidohaui@gmail.com" />
          <label for="">Password</label>
          <input type="password" name="" />

          <button className="settingsSubmit">Update</button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
}
