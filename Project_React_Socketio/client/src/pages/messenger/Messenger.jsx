import "./messenger.css";

import React from "react";
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";
import HomePgae from "../../components/Messenger/chatTop/Hompage";
import Menu from "../../components/Messenger/menuHome/Menu";
import Footer from "../../components/Messenger/footer/Footer";
import MessengerMain from "../../components/Messenger/messengerMain/MessengerMain";
import ManageUser from "../../components/User/ManageUser";

import { BrowserRouter, Switch, Route } from "react-router-dom";
export default function Messenger() {
  const { user } = useContext(AuthContext);

  return (
    <div class="container">
      <div class="Messenger">
        <Menu />
        <div class="containerContent">
          <div class="headerContent">
            <HomePgae Username={user} />
            <div class="Inner">
              <Switch>
                <Route path="/messenger" component={ManageUser} />
                <Route path="/messenger/list" component={ManageUser} />
              </Switch>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}
