import Moment from "react-moment";
import "./message.css";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import fileDownload from "js-file-download";
import axios from "axios";

export default function Message({ message, own }) {
  const [viewMessage, setViewMessage] = useState();
  const [user, setUser] = useState({});
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await axios.get("/users/" + message.sender);
        setUser(res.data);
      } catch (error) {
        console.log("error Message:", error);
      }
    };
    getUser();
  }, [message]);
  useEffect(() => {
    if (message.fileName !== "" && message.text !== "") {
      if (message.fileName.includes(".zip")) {
        setViewMessage(
          <div>
            <p class="messageText">{message.text}</p>
            <a href={PF + message.fileName} download="">
              <img class="messageFileZip" src={PF + "zip.png"} alt="" />
            </a>
            <label style={{ fontSize: "15px" }}>{message.fileName}</label>
          </div>
        );
      } else {
        setViewMessage(
          <>
            <p class="messageText">{message.text}</p>
            <a href={PF + message.fileName} download="">
              <img class="messageFileName" src={PF + message.fileName} alt="" />
            </a>
          </>
        );
      }
    } else if (message.fileName !== "") {
      if (message.fileName.includes(".zip")) {
        setViewMessage(
          <>
            <a href={PF + message.fileName} download="">
              <img class="messageFileZip" src={PF + "zip.png"} alt="" />
            </a>
            <label style={{ fontSize: "14px" }}>{message.fileName}</label>
          </>
        );
      } else {
        setViewMessage(
          <a href={PF + message.fileName} download="">
            <img class="messageFileName" src={PF + message.fileName} alt="" />
          </a>
        );
      }
    } else {
      setViewMessage(<p class="messageText">{message.text}</p>);
    }
  }, [message]);

  return (
    <>
      {own ? (
        <div class="message">
          <div class="messageTop">
            <img
              class="messageImg"
              src={
                user.profilePicture !== ""
                  ? PF + user.profilePicture
                  : PF + "person/noAvatar.png"
              }
              alt=""
            />
            {viewMessage}
            <div class="messageBottom">
              <Moment format="hh:mm a">{message.createdAt}</Moment>
            </div>
          </div>
        </div>
      ) : (
        <div class="message own">
          <div class="messageTop">
            <div class="messageBottom">
              <Moment format="hh:mm a">{message.createdAt}</Moment>
            </div>
            {viewMessage}
            <img
              class="messageImg"
              src={
                user.profilePicture !== ""
                  ? PF + user.profilePicture
                  : PF + "person/noAvatar.png"
              }
              alt=""
            />
          </div>
        </div>
      )}
    </>
  );
}
