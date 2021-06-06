import "./message.css";

export default function Message({ own }) {
  return (
    <div className={own ? "message own" : "message"}>
      <div className="messageTop">
        <img
          className="messageImg"
          src="https://filedn.com/ltOdFv1aqz1YIFhf4gTY8D7/ingus-info/BLOGS/Photography-stocks3/stock-photography-slider.jpg"
          alt=""
        />
        <p className="messageText">Hello this is a message</p>
      </div>
      <div className="messageBottom">1 hours ago</div>
    </div>
  );
}
