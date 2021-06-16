import "./chatBoxHeader.css";

export default function ChatBoxHeader({ infoConversation }) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <div class="header">
      <div class="headerImg">
        <a href="#">
          <img
            src={
              infoConversation.profilePicture !== ""
                ? PF + infoConversation.profilePicture
                : PF + "person/noAvatar.png"
            }
            alt=""
          />
        </a>
      </div>
      <div class="headerText">
        <a href="#">{infoConversation.username}</a>
      </div>
      <div class="headerIcon">
        <a href="#">
          <i class="fas fa-phone-alt"></i>
        </a>
        <a href="#">
          <i class="fas fa-envelope"></i>
        </a>
      </div>

      <div class="headerCompany">
        <span class="headerCompanyText">Company</span>
        <span class="headerCompanyInvision">{infoConversation.company}</span>
      </div>

      <div class="headerOffer">
        <span class="headerOfferText">Offer</span>
        <span class="headerOfferAdvertising">Advertising</span>
      </div>

      <div class="headerIconClose">
        <a href="#">
          <img src="css/image/Icon/close.svg" alt="" />
        </a>
      </div>
    </div>
  );
}
