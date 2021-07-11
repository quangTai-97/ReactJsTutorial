import React, { useState, useEffect, useContext } from "react";
import "./processbtn.css";
import axios from "axios";
import * as ProcessbtnStatus from "./../../Common/CommonSetting";

export default function Processbtn({
  friend,
  userId,
  handle_AddFriend,
  hanle_UpdateStatusFriend,
  hanle_DeleteStatusFriend,
  handle_Chat,
}) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [btn, setBtn] = useState();
  const [members, setMembers] = useState([]);
  const [count, setCount] = useState(false);

  // console.log("statusBtn", statusBtn);

  useEffect(() => {
    if (friend.status === "") {
      setBtn(
        <button
          className="btn btn-primary"
          onClick={() => handle_AddFriend(friend._id)}
          title="Add Friend"
        >
          <i class="fas fa-user-plus"></i>
        </button>
      );
    } else if (
      friend.status === ProcessbtnStatus.pendingRequest &&
      friend.button === false
    ) {
      setBtn(
        <>
          <button
            className="btn btn-danger "
            onClick={() => hanle_DeleteStatusFriend(friend.conversationId)}
            title="No"
          >
            <i class="fas fa-times-circle"></i>
          </button>
          <button
            className="btn btn-success mr-1"
            onClick={() => hanle_UpdateStatusFriend(friend.conversationId)}
            title="Yes"
          >
            <i class="fas fa-check-circle"></i>
          </button>
        </>
      );
    } else if (
      friend.status === ProcessbtnStatus.pendingRequest &&
      friend.button === true
    ) {
      setBtn(
        <button
          className="btn btn-danger"
          onClick={() => hanle_DeleteStatusFriend(friend.conversationId)}
          title="Cancel Request"
        >
          <i class="fas fa-times-circle"></i>
        </button>
      );
    } else {
      setBtn(
        <button
          className="btn btn-info"
          onClick={() => handle_Chat(friend.conversationId)}
          title="Chat"
        >
          <i class="fas fa-comment-dots"></i>
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
