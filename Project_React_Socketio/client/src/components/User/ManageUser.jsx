import React from "react";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";
import "./manageuser.css";
import { useContext, useState, useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { PermMedia, Cancel } from "@material-ui/icons";
export default function ManageUser() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [profilePicture, setProfilePicture] = useState("");
  const [file, setFile] = useState(null);
  const [coverPicture, setCoverPicture] = useState(null);

  const { user } = useContext(AuthContext);
  useEffect(() => {
    setUsername(user.username);
    setEmail(user.email);
    setProfilePicture(user.profilePicture);
    setCompany(user.company);
    setCoverPicture(user.coverPicture);
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (file) {
      const data = new FormData();
      const fileName = file.name;
      data.append("name", fileName);
      data.append("file", file);
      setCoverPicture(fileName);
      try {
        await axios.post("/upload", data);

        const userNew = {
          id: user._id,
          username,
          email,
          company,
          profilePicture: file.name,
          // coverPicture: file.name,
        };
        const resUser = await axios.put("/users", userNew);
        //console.log("data", userNew);
        if (resUser.status === 200) {
          toast.success("Update Success", {
            autoClose: 3000,
          });
        } else {
          toast.error("Update Fail!", {
            autoClose: 3000,
          });
        }
      } catch (err) {}
    } else if (coverPicture) {
      const userNew = {
        id: user._id,
        username,
        email,
        company,
        //profilePicture,
      };
      const resUser = await axios.put("/users", userNew);
      //console.log("data", userNew);
      if (resUser.status === 200) {
        toast.success("Update Success", {
          autoClose: 3000,
        });
      } else {
        toast.error("Update Fail!", {
          autoClose: 3000,
        });
      }
    } else {
      toast.warning("File Name is not null !", {
        autoClose: 3000,
      });
    }
  };
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <div className="userfrom">
      <form onSubmit={handleSubmit}>
        <div>
          <label className="lbForm col-3">
            {" "}
            <i class="fas fa-user"></i> User Name:
          </label>
          <input
            className="col-7 inputClass"
            type="text"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label className="lbForm col-3">
            <i class="fas fa-envelope-open-text"></i> Email:
          </label>
          <input
            className="col-7 inputClass"
            type="text"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label className="lbForm col-3">
            <i class="fas fa-building"></i> company:
          </label>
          <input
            className="col-7 inputClass"
            type="text"
            name="company"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          />
        </div>

        <div>
          <label
            htmlFor="file"
            className="shareOption col-3"
            style={{ float: "left" }}
          >
            <span className="shareOptionText">
              <i class="fas fa-images"></i> Profile Picture
            </span>
            <input
              style={{ display: "none" }}
              type="file"
              id="file"
              accept=".png,.jpeg,.jpg"
              onChange={(e) => setFile(e.target.files[0])}
            />
          </label>
          {file !== null ? (
            <div className="shareImgContainer col-7">
              <img
                className="shareImg"
                src={URL.createObjectURL(file)}
                alt=""
                style={{ width: "150px", height: "150px" }}
              />
              <Cancel
                className="shareCancelImg"
                onClick={() => setFile(null)}
              />
            </div>
          ) : (
            ""
          )}
          {file === null && profilePicture !== null && (
            <div className="shareImgContainer col-7">
              <img
                className="shareImg"
                src={
                  profilePicture !== ""
                    ? PF + profilePicture
                    : PF + "person/noAvatar.png"
                }
                alt=""
                style={{ width: "150px", height: "150px" }}
              />
              <Cancel
                className="shareCancelImg"
                onClick={() => setProfilePicture(null)}
              />
            </div>
          )}
        </div>
        {/* <div>
          <label
            htmlFor="file"
            className="shareOption col-3"
            style={{ float: "left" }}
          >
            <span className="shareOptionText">
              <i class="fas fa-images"></i> Cover Picture
            </span>
            <input
              style={{ display: "none" }}
              type="file"
              id="file"
              accept=".png,.jpeg,.jpg"
              onChange={(e) => setFile(e.target.files[0])}
            />
          </label>
          {file !== null ? (
            <div className="shareImgContainer col-7">
              <img
                className="shareImg"
                src={URL.createObjectURL(file)}
                alt=""
                style={{ width: "150px", height: "150px" }}
              />
              <Cancel
                className="shareCancelImg"
                onClick={() => setFile(null)}
              />
            </div>
          ) : (
            ""
          )}
          {file === null && coverPicture !== null && (
            <div className="shareImgContainer col-7">
              <img
                className="shareImg"
                src={
                  coverPicture !== ""
                    ? PF + coverPicture
                    : PF + "person/noAvatar.png"
                }
                alt=""
                style={{ width: "150px", height: "150px" }}
              />
              <Cancel
                className="shareCancelImg"
                onClick={() => setCoverPicture(null)}
              />
            </div>
          )}
        </div> */}
        <div>
          <button type="submit" class="btn btn-success">
            <i class="fas fa-save"></i> Save
          </button>
        </div>
      </form>
    </div>
  );
}
