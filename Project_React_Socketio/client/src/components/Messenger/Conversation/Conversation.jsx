import axios from "axios";
import { useEffect, useState } from "react";
import "./conversation.css";

export default function Conversation({ converstion, currentUser, active }) {
  const [user, setUser] = useState({});
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  useEffect(() => {
    const friendId = converstion.members.find((m) => m !== currentUser._id);

    const getUser = async () => {
      try {
        const res = await axios("/users?userId=" + friendId);
        setUser(res.data);
      } catch (err) {
        console.log("err Conversation", err);
      }
    };
    getUser();
  }, [converstion, currentUser]);

  //   className="ItemFriendActive"
  return (
    <div class="ItemFriend">
      <a href="#" className={active ? "ItemFriendActive" : ""}>
        <div class="ItemFriendImg">
          <img
            id="Oval_c"
            src={
              user.profilePicture !== ""
                ? PF + user.profilePicture
                : PF + "person/noAvatar.png"
            }
            alt=""
          />
        </div>
        <div class="ItemFriendText">
          <div class="NameAndHour">
            <div class="Ricardo_Lopez">
              <span>{user.username}</span>
            </div>
            <div class="ID1123_am">
              <span>11:23 am</span>
            </div>
          </div>

          <div class="Adobe">
            <span>{user.company}</span>
          </div>

          <div class="Three">
            <span>Three Ways To Get Travel Disco…</span>
          </div>
        </div>
      </a>
      <span class="LineBottom"></span>
    </div>
  );
}
