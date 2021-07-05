import React from "react";
import { AuthContext } from "../../context/AuthContext";
import { useContext, useState, useEffect } from "react";
export default function ManageUser() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [profilePicture, setProfilePicture] = useState("");
  const { user } = useContext(AuthContext);
  useEffect(() => {
    setUsername(user.username);
    setEmail(user.email);
    setProfilePicture(user.profilePicture);
  }, [user]);

  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <div className="userfrom">
      <form>
        <label className="lbForm">User Name</label>
        <input
          type="text"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label className="lbForm">Email</label>
        <input
          type="text"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label className="lbForm">Image</label>
        <img
          src={
            profilePicture !== ""
              ? PF + profilePicture
              : PF + "person/noAvatar.png"
          }
          alt=""
        />
      </form>
    </div>
  );
}
