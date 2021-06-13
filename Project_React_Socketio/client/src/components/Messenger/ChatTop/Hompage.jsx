import "./homepage.css";

export default function HomePgae({ Username }) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <div className="homePage">
      <nav>
        <ul>
          <li className="homepageText">
            <a href=""> Homepage </a>
          </li>
          <li className="hompageVerticalbar">
            <span></span>
          </li>
          <li className="homepageImg">
            <a href="">
              <img
                src={
                  Username.profilePicture !== ""
                    ? PF + Username.profilePicture
                    : PF + "person/noAvatar.png"
                }
                alt=""
              />
            </a>
          </li>
          <li className="homepageText">
            <a href=""> {Username.username}</a>
          </li>
          <li class="homepageIcon">
            <a href="">
              {" "}
              <i className="fas fa-chevron-right"></i>
            </a>
          </li>
        </ul>
      </nav>

      <div className="expertise">
        <div className="expertiseContent">
          <div className="textYouHave">you have</div>
          <div className="textExpertise">5% of expertise</div>
          <div className="progress">
            <div
              className="progress-bar"
              role="progressbar"
              aria-valuenow="5"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
          <div className="expertiseIconRight">
            <i className="fas fa-chevron-right"></i>
          </div>
        </div>
      </div>
    </div>
  );
}
