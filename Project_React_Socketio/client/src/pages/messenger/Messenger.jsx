import "./messenger.css";
import React from "react";
import { AuthContext } from "../../context/AuthContext";
import { useContext, useEffect, useState, useRef } from "react";
import HomePgae from "../../components/Messenger/ChatTop/Hompage";
import Conversation from "../../components/Messenger/Conversation/Conversation";
import Message from "../../components/Messenger/Message/Massage";
import Menu from "../../components/Messenger/menuHome/Menu";
import Footer from "../../components/Messenger/footer/Footer";
import ChatBoxHeader from "../../components/Messenger/ChatBoxHeader/ChatBoxHeader";

import axios from "axios";
import io from "socket.io-client";
export default function Messenger() {
  const [conversations, setConversation] = useState([]);
  const [currentChat, setcurrentChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessages, setNewMessages] = useState("");
  const [infoConversation, setInfoConversation] = useState({});
  const [arrivalMessages, setArrivalMessages] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const [active, setActive] = useState(null);
  const { user } = useContext(AuthContext);
  const scrollRef = useRef();

  const socket = useRef();
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  useEffect(() => {
    socket.current = io("ws://localhost:8990");
    socket.current.on("getMessage", (data) => {
      setArrivalMessages({
        sender: data.senderId,
        text: data.text,
        createdAt: Date.now(),
      });
    });
  }, []);

  useEffect(() => {
    arrivalMessages &&
      currentChat?.members.includes(arrivalMessages.sender) &&
      setMessages((prev) => [...prev, arrivalMessages]);
  }, [arrivalMessages, currentChat]);

  useEffect(() => {
    socket.current.emit("addUser", user._id);

    socket.current.on("getUsers", (users) => {
      setOnlineUsers(
        user.followings.filter((f) => users.some((u) => u.userId === f))
      );
    });
  }, [user]);

  useEffect(() => {
    const getConversation = async () => {
      try {
        const res = await axios.get("/conversations/" + user._id);
        setConversation(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getConversation();
  }, [user._id]);

  useEffect(() => {
    const getMessages = async () => {
      try {
        const res = await axios.get("/messages/" + currentChat?._id);

        setMessages(res.data);
      } catch (err) {
        console.log("err getMessages:", err);
      }
    };
    getMessages();

    //GET INFOR HEADER
    if (currentChat !== null) {
      const friendId = currentChat?.members.find((m) => m !== user._id);
      const getUser = async () => {
        try {
          const res = await axios("/users?userId=" + friendId);
          setInfoConversation(res.data);
        } catch (err) {
          console.log("err Conversation", err);
        }
      };
      getUser();
    }
  }, [currentChat, user]);

  useEffect(() => {
    scrollRef?.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  //console.log("infoConversation", currentChat);

  //SEND MESSAGE
  const handleSubmit = async (e) => {
    e.preventDefault();
    const message = {
      sender: user._id,
      text: newMessages,
      conversationId: currentChat._id,
    };
    console.log("socket currentChat", currentChat);
    const receiverId = currentChat.members.find(
      (member) => member !== user._id
    );
    console.log("socket receiverId", receiverId);
    socket.current.emit("sendMessage", {
      receiverId: receiverId,
      senderId: user._id,
      text: newMessages,
    });

    try {
      const res = await axios.post("/messages", message);
      setMessages([...messages, res.data]);
      setNewMessages("");
    } catch (err) {
      console.log("err handleSubmit", err);
    }
  };

  //SELECT CONVERSATION
  const ConversationSelect = (c, index) => {
    setcurrentChat(c);

    setActive(index);
  };

  return (
    <div class="container">
      <div class="Messenger">
        <Menu />
        <div class="containerContent">
          <div class="headerContent">
            <HomePgae Username={user} />
            <div class="Inner">
              {currentChat ? (
                <div class="ChatBox">
                  <ChatBoxHeader infoConversation={infoConversation} />

                  <div class="chatContent">
                    <div class="chatContentText">
                      {messages.map((m, index) => (
                        <div ref={scrollRef} key={index}>
                          <Message
                            message={m}
                            key={index}
                            own={m.sender === user._id}
                          />
                        </div>
                      ))}
                    </div>

                    <div class="chatContentInput">
                      <input
                        name="input"
                        className="input"
                        onChange={(e) => setNewMessages(e.target.value)}
                        onKeyPress={(e) =>
                          e.key === "Enter" ? handleSubmit(e) : null
                        }
                        value={newMessages}
                        type="text"
                        placeholder="Type something"
                      />
                      <div class="enter">
                        <button
                          className="btnChat"
                          type="submit"
                          onClick={(e) => handleSubmit(e)}
                        >
                          {
                            <svg class="Fill_1">
                              <path
                                id="Fill_1"
                                d="M 17.77618026733398 8.37578296661377 L 1.785364627838135 0.1299525797367096 C 0.9489737749099731 -0.3013394773006439 0 0.3936140239238739 0 1.437616586685181 L 0 5.728525161743164 C 0 6.635617256164551 0.5641914010047913 7.416442394256592 1.347163915634155 7.592538833618164 L 7.199559211730957 8.909636497497559 C 7.94550085067749 9.077267646789551 7.94550085067749 10.289626121521 7.199559211730957 10.45749855041504 L 1.347163915634155 11.77459621429443 C 0.5641914010047913 11.95069313049316 0 12.731276512146 0 13.63860988616943 L 0 17.92927742004395 C 0 18.97327995300293 0.9489737749099731 19.6684741973877 1.785364627838135 19.23694038391113 L 17.77618026733398 10.99135303497314 C 18.76473808288574 10.48144626617432 18.76473808288574 8.88544750213623 17.77618026733398 8.37578296661377"
                              ></path>
                            </svg>
                          }
                        </button>
                      </div>
                      <div class="chatContentInputImg">
                        <img
                          id="Oval_Copy_2_"
                          src={
                            user.profilePicture !== ""
                              ? PF + user.profilePicture
                              : PF + "person/noAvatar.png"
                          }
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <span className="noConversationText">
                  Open a conversation to start a chat.
                </span>
              )}
              <div class="conversation">
                <div class="convartionMain">
                  <div class="conversationSearch">
                    <div class="buttonSearch">
                      <button>
                        <svg class="Fill_1_c">
                          <path
                            id="Fill_1_c"
                            d="M 9.849838256835938 10.95864009857178 C 9.48539924621582 10.95864009857178 9.142899513244629 10.8200798034668 8.885439872741699 10.56848049163818 L 7.354736804962158 9.072680473327637 C 6.623217582702637 9.468879699707031 5.791175842285156 9.678250312805176 4.949760913848877 9.678310394287109 C 3.626069068908691 9.678390502929688 2.382586002349854 9.175959587097168 1.448364496231079 8.263580322265625 C -0.4827882647514343 6.375550270080566 -0.4827882647514343 3.303509950637817 1.448364496231079 1.415480017662048 C 2.382893085479736 0.5026900172233582 3.627286672592163 0 4.952309131622314 0 C 6.277330875396729 0 7.521724700927734 0.5026900172233582 8.456253051757813 1.415480017662048 C 10.00971412658691 2.934380054473877 10.35019683837891 5.307790279388428 9.284232139587402 7.187180042266846 L 10.81493473052979 8.682979583740234 C 11.34643268585205 9.202360153198242 11.34643268585205 10.04819011688232 10.81493473052979 10.56848049163818 C 10.55703449249268 10.8200798034668 10.21428871154785 10.95864009857178 9.849838256835938 10.95864009857178 Z M 4.952309131622314 2.175750017166138 C 4.222989082336426 2.175750017166138 3.538236379623413 2.452620029449463 3.024195432662964 2.95536994934082 C 2.509714841842651 3.45770001411438 2.22637414932251 4.126840114593506 2.22637414932251 4.839529991149902 C 2.22637414932251 5.552209854125977 2.509714841842651 6.221350193023682 3.024195432662964 6.723680019378662 C 3.538236379623413 7.22642993927002 4.222989082336426 7.503300189971924 4.952309131622314 7.503300189971924 C 5.681628227233887 7.503300189971924 6.366381168365479 7.22642993927002 6.880422115325928 6.723680019378662 C 7.394903182983398 6.221350193023682 7.678243637084961 5.552209854125977 7.678243637084961 4.839529991149902 C 7.678243637084961 4.126840114593506 7.394903182983398 3.45770001411438 6.880422115325928 2.95536994934082 C 6.366381168365479 2.452620029449463 5.681628227233887 2.175750017166138 4.952309131622314 2.175750017166138 Z"
                          ></path>
                        </svg>
                      </button>
                    </div>

                    <input
                      type="text"
                      className="inputSearch"
                      placeholder="search messages"
                    />
                  </div>
                  <div class="conversationFriend">
                    <span class="LineTop"></span>
                    {conversations.map((c, index) => (
                      <div
                        onClick={() => ConversationSelect(c, index)}
                        key={index}
                      >
                        <Conversation
                          converstion={c}
                          key={index}
                          currentUser={user}
                          active={active === index ? true : false}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}
