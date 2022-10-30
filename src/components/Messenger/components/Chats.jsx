import React from "react";
import Switch from "@mui/material/Switch";
import { settingsContext } from "../App";

export default function Chats({ messages, setSettings }) {
  const [checked, setChecked] = React.useState(false);
  const context = React.useContext(settingsContext);
  const rooms = Object.keys(messages);
  rooms.sort((a, b) => {
    const aDate = +messages[a][messages[a].length - 1].date;
    const bDate = +messages[b][messages[b].length - 1].date;
    if (aDate < bDate) return 1;
    if (aDate > bDate) return -1;
    return 0;
  });

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <div className="chats">
        <h1 className="chats-header">Беседы</h1>
        <input placeholder="Поиск" className="chats-find"/>
        <ul className="chats-list">
            <li className="chat">
                <p className="last-sender"></p>
                <p className="last-message"></p>
            </li>
            <li className="chat">
                <p className="last-sender"></p>
                <p className="last-message"></p>
            </li>
            <li className="chat">
                <p className="last-sender"></p>
                <p className="last-message"></p>
            </li>
        </ul>
    </div>
  );
}