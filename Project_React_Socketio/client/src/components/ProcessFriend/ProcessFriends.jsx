import React, { useState, useEffect, useContext } from "react";
import "./processFriends.css";
import { AuthContext } from "./../../context/AuthContext";
import axios from "axios";
import { toast } from "react-toastify";
import { Switch } from "react-router-dom";
import Processbtn from "./processBtn/Processbtn";
import * as statusBtn from "./../Common/CommonSetting";

export default function ProcessFriends() {
  const [friends, setFriends] = useState([]);
  const [count, setCount] = useState(false);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get("/conversations/getall/" + user._id);

        setFriends(res.data);
      } catch (error) {
        console.log("error ProcessFriend", error);
      }
    };

    getData();
  }, [user]);

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
      console.log("add conversation", error);
    }
  };

  const UpdateStatusFriend = async (idConversation) => {
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
      console.log("update conversation", error);
    }
  };
  const DeleteConversation = async (idConversation) => {
    try {
      const res = await axios.delete("/conversations" + idConversation);
      if (res.status === 200) {
        const rs = await axios.get("/conversations/getall/" + user._id);
        setFriends(rs.data);
      } else {
        toast.warning("Error System !");
      }
    } catch (error) {
      console.log("Delete conversation", error);
    }
  };

  return (
    <div>
      <div className="inputSearch">
        <label htmlFor="text">Tìm kiếm</label>
      </div>
      <div className="listFriend">
        {friends.map((fr, index) =>
          fr._id !== user._id ? (
            <div key={index}>
              <Processbtn friend={fr} userId={user._id} />
            </div>
          ) : (
            ""
          )
        )}
      </div>
    </div>
  );
}
