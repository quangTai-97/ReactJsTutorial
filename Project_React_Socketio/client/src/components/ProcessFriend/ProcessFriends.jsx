import React, { useState, useEffect, useContext, useCallback } from "react";
import "./processFriends.css";
import { AuthContext } from "./../../context/AuthContext";
import axios from "axios";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";
import Processbtn from "./processBtn/Processbtn";
import * as statusBtn from "./../Common/CommonSetting";

export default function ProcessFriends() {
  const [friends, setFriends] = useState([]);
  const [inputSearch, setInputSearch] = useState("");
  const { user } = useContext(AuthContext);
  const history = useHistory();

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get("/conversations/getall/" + user._id);
        var search = res.data.filter((c) => {
          return c.username.includes(inputSearch);
        });

        setFriends(search);
      } catch (error) {
        console.log("error ProcessFriend", error);
      }
    };

    getData();
  }, [user, inputSearch]);

  //ADD FRIEND
  const AddFriend = async (idFriend) => {
    const members = {
      senderId: user._id,
      receiverId: idFriend,
    };

    try {
      const res = await axios.post("/conversations", members);
      if (res.status === 200) {
        const rs = await axios.get("/conversations/getall/" + user._id);
        setFriends(rs.data);
      } else {
        toast.warning("Error System !");
      }
    } catch (error) {
      toast.warning("Error System !");
    }
  };

  //UPDATE STATUS FRIEND
  const UpdateStatuFriend = async (idConversation) => {
    try {
      const conversation = {
        _id: idConversation,
        status: statusBtn.agreeFriend,
      };
      const res = await axios.put("/conversations", conversation);
      if (res.status === 200) {
        const rs = await axios.get("/conversations/getall/" + user._id);
        setFriends(rs.data);
      } else {
        toast.warning("Error System !");
      }
    } catch (error) {
      toast.warning("Error System !");
    }
  };

  //DELETE STATUS FRIEND
  const DeleteStatusFriend = async (idConversation) => {
    try {
      const res = await axios.delete("/conversations/" + idConversation);

      if (res.status === 200) {
        const rs = await axios.get("/conversations/getall/" + user._id);
        setFriends(rs.data);
      } else if (res.status === 304) {
        const rs = await axios.get("/conversations/getall/" + user._id);
        setFriends(rs.data);
        toast.warning("Request has been cancelled !");
      } else {
        toast.warning("Error System !");
      }
    } catch (error) {
      toast.warning("Error System !");
    }
  };

  const HandleChat = (conversationId) => {
    history.push("/messenger/conversation/" + conversationId);
  };

  return (
    <div>
      <div className="searchUserName">
        <label htmlFor="text">Search:</label>
        <input
          type="text"
          className="search"
          value={inputSearch}
          onChange={(e) => setInputSearch(e.target.value)}
          placeholder="Something text..."
        />
      </div>
      <div className="listFriend">
        {friends.map((fr, index) =>
          fr._id !== user._id ? (
            <div key={index}>
              <Processbtn
                friend={fr}
                userId={user._id}
                handle_AddFriend={AddFriend}
                hanle_UpdateStatusFriend={UpdateStatuFriend}
                hanle_DeleteStatusFriend={DeleteStatusFriend}
                handle_Chat={HandleChat}
              />
            </div>
          ) : (
            ""
          )
        )}
      </div>
    </div>
  );
}
