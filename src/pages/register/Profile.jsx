import React from "react";
import Nav from "../../components/Nav";

export default function Profile(props) {
  return (
    <div className={"wrapper"}>
      <h1 className={"header"}>Профиль</h1>
      <div className={"form"}>
        <div className={"add-avatar"}></div>
        <label className={"form-label"}>Имя</label>
        <input placeholder={"Денис"} className={"input profile-input"} />
        <label className={"form-label"}>Город</label>
        <input placeholder={"Екатеринбург"} className={"input profile-input"} />
        <label className={"form-label"}>Должность</label>
        <select className={"input profile-input"}>
          <option disabled selected>
            Выберите свою должность
          </option>
          <option>Программист</option>
          <option>Аналитик</option>
          <option>Дизайнер</option>
        </select>
        <label className={"form-label"}>О себе</label>
        <textarea className={"input form-textarea"} rows={7}></textarea>
        <button className={"btn btn-interests"}>Мои интересы</button>
      </div>
      <Nav setPage={props.setPage} />
    </div>
  );
}
