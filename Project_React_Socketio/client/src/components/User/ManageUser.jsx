import React from "react";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";
import "./manageUser.css"
import { useContext, useState, useEffect } from "react";
import Notifications, {notify} from 'react-notify-toast';
export default function ManageUser() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  
  const [profilePicture, setProfilePicture] = useState("");
  const { user } = useContext(AuthContext);
  useEffect(() => {
    setUsername(user.username);
    setEmail(user.email);
    setProfilePicture(user.profilePicture);
    setCompany(user.company);
    
  }, [user]);

  const handleSubmit =async (e) =>{
    e.preventDefault();
    const userNew = {
      id:user._id,
      username,email,company,
      profilePicture
    }
    const data = await axios.put("/users",userNew);
    let myColor = { background: '#0E1717', text: "#FFFFFF" };
    notify.show("Sửa thành công", "success", 5000,myColor);
    console.log('data',data);
  }
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <div className="userfrom">
      <form onSubmit={handleSubmit}>
        <div>
        <label className="lbForm col-3">User Name:</label>
        <input
        className="col-7 inputClass"
          type="text"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        </div>
        <div>
        <label className="lbForm col-3">Email:</label>
        <input
          className="col-7 inputClass"
          type="text"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        </div>
        <div>
        <label className="lbForm col-3">company:</label>
        <input
          className="col-7 inputClass"
          type="text"
          name="company"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        />
        </div>
        <div>
        <label className="lbForm col-3">Image:</label>
        <img
          className="col-7 inputClass"
          src={
            profilePicture !== ""
              ? PF + profilePicture
              : PF + "person/noAvatar.png"
          }
          alt=""
        />
        </div>

        <button type="submit" class="btn btn-success"><i class="fas fa-save"></i> Save</button>
      </form>
    </div>
  );
}
