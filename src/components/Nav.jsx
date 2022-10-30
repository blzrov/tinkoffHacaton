import React from "react";
import { Link } from "react-router-dom";

export default function Nav(props) {
  return (
    <nav className={"site-nav"}>
      <ul className={"nav-list"}>
        <li>
          <Link to="/profile" className={"nav-link profile-icon"}>
            Профиль
          </Link>
        </li>
        <li className={"nav-item"}>
          <Link to="/chat" className={"nav-link chats-icon"}>
            Беседы
          </Link>
        </li>
        <li className={"nav-item"}>
          <Link to="/settings" className={"nav-link chatroulette-icon"}>
            Чатрулетка
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/settings" className={"nav-link settings-icon"}>
            Настройки
          </Link>
        </li>
      </ul>
    </nav>
  );
}
