import React, { useState, useEffect, useContext } from "react";
import "./processbtn.css";
import axios from "axios";
import * as ProcessbtnStatus from "./../../Common/CommonSetting";
export default function Processbtn({ friend, userId }) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [btn, setBtn] = useState();
  const [members, setMembers] = useState([]);
  const [count, setCount] = useState(false);

  useEffect(() => {
    const getRs = async () => {
      if (friend.conversationId !== undefined && friend.conversationId !== "") {
        const res = await axios.get(
          "/conversations/conversation/" + friend.conversationId
        );
        setMembers(res.data.members);
        if (userId === res.data.members[0]) {
          setCount(true);
        }
      }
    };
    getRs();
  }, [friend, userId]);
  console.log("friend.idConversation", friend.conversationId);

  const AddFriend = async (friendId) => {
    console.log("Delete conversation");
  };

  const UpdateStatusFriend = async (idConversation) => {
    console.log("Delete conversation");
  };
  const DeleteConversation = async (idConversation) => {
    console.log("Delete conversation");
  };
  useEffect(() => {
    if (friend.status === "") {
      setBtn(
        <button
          className="btn btn-primary"
          onClick={(e) => AddFriend(friend._id)}
        >
          <i class="fas fa-comment-dots"></i> Add Friend
        </button>
      );
    } else if (
      friend.status === ProcessbtnStatus.pendingRequest &&
      count === false
    ) {
      setBtn(
        <>
          <button
            className="btn btn-danger "
            onClick={() => DeleteConversation(friend.idConversation)}
          >
            <i class="fas fa-times-circle"></i> No
          </button>
          <button
            className="btn btn-info mr-1"
            onClick={() => UpdateStatusFriend(friend.idConversation)}
          >
            <i class="fas fa-check-circle"></i> Yes
          </button>
        </>
      );
    } else if (
      friend.status === ProcessbtnStatus.pendingRequest &&
      count === true
    ) {
      setBtn(
        <button className="btn btn-danger">
          <i class="fas fa-times-circle"></i> Cancel
        </button>
      );
    } else {
      setBtn(
        <button className="btn btn-info">
          <i class="fas fa-comment-dots"></i> Chat
        </button>
      );
    }
  }, [friend, userId]);

  return (
    <>
      <img
        className="friendImg"
        src={
          friend.profilePicture !== ""
            ? PF + friend.profilePicture
            : PF + "person/noAvatar.png"
        }
        alt=""
      />

      <label htmlFor="text" className="friendText">
        {friend.username}
      </label>
      {count.value}
      {btn}
    </>
  );
}
