import axios from "axios";
import { useEffect, useState } from "react";
import "./chatBox.css";

export default function ChatBox({ converstion, currentUser }) {
  const [user, setUser] = useState({});
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  // useEffect(() => {
  //   console.log("converstion", converstion);
  //   const friendId = converstion.members.find((m) => m !== currentUser._id);

  //   const getUser = async () => {
  //     try {
  //       const res = await axios("/users?userId=" + friendId);
  //       setUser(res.data);
  //     } catch (err) {
  //       console.log("err Conversation", err);
  //     }
  //   };
  //   getUser();
  // }, [converstion, currentUser]);

  return (
    <div className="ChatBox">
      <div class="header">
        <div class="headerImg">
          <a href="">
            <img
              src=""
              // src={
              //   user.profilePicture !== ""
              //     ? PF + user.profilePicture
              //     : PF + "person/noAvatar.png"
              // }
              alt=""
            />
          </a>
        </div>
        <div class="headerText">
          <a href="">currentChat_username</a>
        </div>
        <div class="headerIcon">
          <a href="">
            <i class="fas fa-phone-alt"></i>
          </a>
          <a href="">
            <i class="fas fa-envelope"></i>
          </a>
        </div>

        <div class="headerCompany">
          <span class="headerCompanyText">Company</span>
          <span class="headerCompanyInvision">currentChat_company</span>
        </div>

        <div class="headerOffer">
          <span class="headerOfferText">Offer</span>
          <span class="headerOfferAdvertising">Advertising</span>
        </div>

        <div class="headerIconClose">
          <a href="">
            <img src="css/image/Icon/close.svg" alt="" />
          </a>
        </div>
      </div>
      <div class="chatContent">
        <div class="chatContentText">
          <div class="message1">
            <div class="messageTop1">
              <img
                class="messageImg1"
                src="css/image/Oval_Copy_2_by.png"
                alt=""
              />
              <p class="messageText1">
                Now, if you are interested in being the best player, getting
                really good money and knowing some tricks and advices of what to
                do in a live tournament games, here is the best place to learn
                them.
              </p>
              <div class="messageBottom1">08:44 am</div>
            </div>
          </div>

          <div class="message1">
            <div class="messageTop1">
              <img
                class="messageImg1"
                src="css/image/Oval_Copy_2_by.png"
                alt=""
              />
              <p class="messageText1">
                Now, if you are interested in being the best player, getting
                really good money and knowing some tricks and advices of what to
                do in a live tournament games, here is the best place to learn
                them.
              </p>
              <div class="messageBottom1">08:44 am</div>
            </div>
          </div>

          <div class="message1 own">
            <div class="messageTop1">
              <img
                class="messageImg1"
                src="css/image/Oval_Copy_2_by.png"
                alt=""
              />
              <p class="messageText1">Now, if you are inter</p>
              <div class="messageBottom1">08:44 am</div>
            </div>
          </div>

          <div class="message1">
            <div class="messageTop1">
              <img
                class="messageImg1"
                src="css/image/Oval_Copy_2_by.png"
                alt=""
              />
              <p class="messageText1">
                Now, if you are interested in being the best player, getting
                really good money and knowing some tricks and advices of what to
                do in a live tournament games, here is the best place to learn
                them.
              </p>
              <div class="messageBottom1">08:44 am</div>
            </div>
          </div>

          <div class="message1 own">
            <div class="messageTop1">
              <img
                class="messageImg1"
                src="css/image/Oval_Copy_2_by.png"
                alt=""
              />
              <p class="messageText1">Now, if you are inter</p>
              <div class="messageBottom1">08:44 am</div>
            </div>
          </div>

          <div class="message1">
            <div class="messageTop1">
              <img
                class="messageImg1"
                src="css/image/Oval_Copy_2_by.png"
                alt=""
              />
              <p class="messageText1">
                Now, if you are interested in being the best player, getting
                really good money and knowing some tricks and advices of what to
                do in a live tournament games, here is the best place to learn
                them.
              </p>
              <div class="messageBottom1">08:44 am</div>
            </div>
          </div>

          <div class="message1 own">
            <div class="messageTop1">
              <img
                class="messageImg1"
                src="css/image/Oval_Copy_2_by.png"
                alt=""
              />
              <p class="messageText1">Now, if you are inter</p>
              <div class="messageBottom1">08:44 am</div>
            </div>
          </div>

          <div class="message1">
            <div class="messageTop1">
              <img
                class="messageImg1"
                src="css/image/Oval_Copy_2_by.png"
                alt=""
              />
              <p class="messageText1">
                Now, if you are interested in being the best player, getting
                really good money and knowing some tricks and advices of what to
                do in a live tournament games, here is the best place to learn
                them.
              </p>
              <div class="messageBottom1">08:44 am</div>
            </div>
          </div>

          <div class="message1 own">
            <div class="messageTop1">
              <img
                class="messageImg1"
                src="css/image/Oval_Copy_2_by.png"
                alt=""
              />
              <p class="messageText1">Now, if you are inter</p>
              <div class="messageBottom1">08:44 am</div>
            </div>
          </div>

          <div class="message">
            <div class="messageTop">
              <img
                class="messageImg"
                src="css/image/Oval_Copy_2_by.png"
                alt=""
              />
              <p class="messageText">11111</p>
              <div class="messageBottom">giờ</div>
            </div>
          </div>
          <div class="message own">
            <div class="messageTop">
              <div class="messageBottom">giờ</div>
              <p class="messageText">11111</p>
              <img
                class="messageImg"
                src="css/image/Oval_Copy_2_by.png"
                alt=""
              />
            </div>
          </div>
        </div>

        <div class="chatContentInput">
          <input
            name="input"
            class="input"
            type="text"
            placeholder="Type something"
          />
          <div class="enter">
            <button type="submit">
              <svg class="Fill_1">
                <path
                  id="Fill_1"
                  d="M 17.77618026733398 8.37578296661377 L 1.785364627838135 0.1299525797367096 C 0.9489737749099731 -0.3013394773006439 0 0.3936140239238739 0 1.437616586685181 L 0 5.728525161743164 C 0 6.635617256164551 0.5641914010047913 7.416442394256592 1.347163915634155 7.592538833618164 L 7.199559211730957 8.909636497497559 C 7.94550085067749 9.077267646789551 7.94550085067749 10.289626121521 7.199559211730957 10.45749855041504 L 1.347163915634155 11.77459621429443 C 0.5641914010047913 11.95069313049316 0 12.731276512146 0 13.63860988616943 L 0 17.92927742004395 C 0 18.97327995300293 0.9489737749099731 19.6684741973877 1.785364627838135 19.23694038391113 L 17.77618026733398 10.99135303497314 C 18.76473808288574 10.48144626617432 18.76473808288574 8.88544750213623 17.77618026733398 8.37578296661377"
                ></path>
              </svg>
            </button>
          </div>
          <div class="chatContentInputImg">
            <img id="Oval_Copy_2_" src="css/image/Oval_Copy_2_.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
