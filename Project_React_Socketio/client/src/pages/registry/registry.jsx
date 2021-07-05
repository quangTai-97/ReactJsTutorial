import { useRef } from "react";
import "./registry.css";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Registry() {
  const username = useRef();
  const password = useRef();
  const email = useRef();
  const passwordAgain = useRef();

  const handleClick = async (e) => {
    e.preventDefault();
    if (passwordAgain.current.value !== password.current.value) {
      passwordAgain.current.setCustomValidity("Mật khẩu không trùng khớp");
    } else {
      const user = {
        username: username.current.value,
        password: password.current.value,
        email: email.current.value,
      };
      try {
        const res = await axios.post("/auth/register", user);

        res.data && window.location.replace("/login");
      } catch (error) {
        console.log("registry log: ", error);
      }
    }
  };

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">IMess</h3>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={handleClick}>
            <input
              placeholder="Username"
              required
              ref={username}
              className="loginInput"
            />
            <input
              placeholder="Email"
              required
              ref={email}
              className="loginInput"
              type="email"
            />
            <input
              placeholder="Password"
              required
              ref={password}
              className="loginInput"
              type="password"
              minLength="1"
            />
            <input
              placeholder="Password Again"
              required
              ref={passwordAgain}
              className="loginInput"
              type="password"
            />
            <button className="loginButton" type="submit">
              Sign Up
            </button>

            <button type="button" className="loginRegisterButton">
              <Link className="link" to="/login">
                Log into Account
              </Link>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
