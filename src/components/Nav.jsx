import React from "react";

export default function Nav(props) {
  return (
    <nav className={"site-nav"}>
      <ul className={"nav-list"}>
        <li onClick={() => props.setPage(1)} className={"nav-item"}>
          <a href={"#"} className={"nav-link profile-icon"}>
            Профиль
          </a>
        </li>
        <li className={"nav-item"}>
          <a href={"#"} className={"nav-link chats-icon"}>
            Беседы
          </a>
        </li>
        <li className={"nav-item"}>
          <a href={"#"} className={"nav-link chatroulette-icon"}>
            Чатрулетка
          </a>
        </li>
        <li onClick={() => props.setPage(4)} className={"nav-item current"}>
          <a href={"#"} className={"nav-link settings-icon"}>
            Настройки
          </a>
        </li>
      </ul>
    </nav>
  );
}
