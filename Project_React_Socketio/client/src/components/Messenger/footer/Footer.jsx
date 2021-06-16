import "./footer.css";
export default function Footer() {
  return (
    <div class="footer">
      <div class="comboboxLaguage">
        <select name="mutiLanguage" class="mutiLanguage">
          <option value="English">English</option>
          <option value="Vietnamese">Vietnamese</option>
          <option value="America">America</option>
          <option value="France">France</option>
        </select>
      </div>
      <div class="createLink">
        <nav>
          <ul>
            <li>
              <a href="">Our Story</a>
              <div class="rounded-corners"></div>
            </li>
            <li>
              <a href="">Partnerships</a>
              <div class="rounded-corners"></div>
            </li>
            <li>
              <a href="">Join us</a>
              <div class="rounded-corners"></div>
            </li>
            <li>
              <a href="">Privacy policy</a>
              <div class="rounded-corners"></div>
            </li>
            <li>
              <a href="">Terms of services</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
