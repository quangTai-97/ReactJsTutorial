import axios from "axios";
import { useEffect, useState } from "react";
import Moment from "react-moment";
import "./conversation.css";

export default function Conversation({ converstion, currentUser, active }) {
  const [user, setUser] = useState({});
  const [lastMessage, setLastMessage] = useState([]);
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

  useEffect(() => {
    const getMessage = async () => {
      try {
        const res = await axios("/messages/getLastMessage/" + converstion._id);

        setLastMessage(res.data[0]);
      } catch (err) {
        console.log("err lastMessage", err);
      }
    };
    getMessage();
  }, [converstion]);

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
              {/* <Moment format="hh:mm a">{lastMessage.createdAt}</Moment> */}
              <Moment format="DD/MM, hh:mm a">
                {lastMessage ? lastMessage.createdAt : Date.now}
              </Moment>

              {/* <span format="hh:mm a">{lastMessage.createdAt}</span> */}
              {/* <span>
                {format(lastMessage.createdAt, "en_US", { minInterval: 3 })}
              </span> */}
              {/* format('2016-06-12', 'en_US'); */}
            </div>
          </div>

          <div class="Adobe">
            <span>{user.company}</span>
          </div>

          <div class="lassMessage">
            <span>{lastMessage ? lastMessage.text : ""}</span>
          </div>
        </div>
      </a>
      <span class="LineBottom"></span>
    </div>
  );
}
