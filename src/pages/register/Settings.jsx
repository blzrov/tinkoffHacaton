import React from "react";
import Nav from "../../components/Nav";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

export default function Settings(props) {
  const [value, setValue] = React.useState("female");

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <div className={"wrapper"}>
      <h1 className={"header"}>Настройки</h1>
      <ul className="settings">
        <li className="notifications">
          <h2 className={"notifications-header"}>Уведомления</h2>
          <ul className={"notifications-params"}>
            <li className={"parameter"}>Все</li>
            <li className={"parameter"}>Личные</li>
            <li className={"parameter"}>Нет</li>
          </ul>

        </li>
        <li className="language">
          <label className={"form-label"}>Язык</label>
          <select value={1} className={"input"}>
            <option>Русский</option>
            <option>Белорусский</option>
            <option>Армянский</option>
            <option>Английский</option>
          </select>
        </li>
        <li className="theme">
          <label className="form-label">Тема</label>
          <select className={"input"}>
            <option>Светлая</option>
            <option>Тёмная</option>
          </select>
        </li>
        <li className="blacklist">
          <label className="form-label">Чёрный список</label>
          <input
            type={"button"}
            className={"input blacklist-btn"}
            value={"+"}
          ></input>
        </li>
        <button className={"btn btn-exit"}>Выйти из аккаунта</button>
      </ul>
      <Nav setPage={props.setPage} />
    </div>
  );
}
