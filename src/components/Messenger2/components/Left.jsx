import React, { useState, useContext } from "react";
import AvatarImg from "../../../img/avatar.png"

export default function Left() {
  return <div className="companion">
    <div className="companion-info">
      <h2>Собеседник</h2>
      <img src={AvatarImg} alt="" />
      <p className="name">Имя собеседника</p>
      <p className="age">Возраст</p>
    </div>
    <div className="companion-buttons">
      <button className="btn">Сменить собеседника</button>
      <button className="btn">Добавить в чаты</button>
    </div>
  </div>;
}