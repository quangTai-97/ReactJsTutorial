import Moment from "react-moment";
import "./message.css";

export default function Message({ message, own }) {
  return (
    <>
      {own ? (
        <div class="message">
          <div class="messageTop">
            <img class="messageImg" src="css/image/Oval_Copy_2_by.png" alt="" />
            <p class="messageText">{message.text}</p>
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
            <p class="messageText">{message.text}</p>
            <img class="messageImg" src="css/image/Oval_Copy_2_by.png" alt="" />
          </div>
        </div>
      )}
    </>
  );
}
