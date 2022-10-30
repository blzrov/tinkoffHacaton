import React, { useState, useContext } from "react";
import AvatarImg from "../../../img/avatar.png";

export default function Left({ userRes,name }) {
  return (
    <div className="companion">
      <div className="companion-info">
        <h2>Собеседник</h2>
        <img src={AvatarImg} width={10} alt="" />
        <p className="name">{name}</p>
        {userRes.map((e) => (
          <span>{e}</span>
        ))}
      </div>
      <div className="companion-buttons">
        <button className="btn">Сменить собеседника</button>
        <button className="btn">Добавить в чаты</button>
      </div>
    </div>
  );
}
