import React from "react";
import { Link } from "react-router-dom";

export default function Page4({ result }) {
  function postResult() {
    fetch("", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      method: "POST",
      body: JSON.stringify(result.current),
    })
      .then((res) => console.log(res))
      .catch((e) => console.log(e));
  }
  result.current.user_hobbies = [];

  return (
    <div className={"wrapper"}>
      <h1 className={"header"}>Анкета</h1>
      <div className={"form"}>
        <label className={"form-label"}>Мои хобби</label>
        <ul className="interests">
          {["Спорт", "Компьютерные игры", "Настольные игры", "Музыка"].map(
            (element, index) => {
              return (
                <button
                  onClick={(e) => {
                    e.target.disabled = true;
                    result.current.user_hobbies.push(e.target.textContent);
                  }}
                  className={"hobby"}
                  key={index}
                >
                  {element}
                </button>
              );
            }
          )}
        </ul>
        <label className={"form-label"}>
          Ищу коллег только из своего города
        </label>
        <input type={"button"} className={"input"}></input>
      </div>
      <button className={"btn"} onClick={postResult}>
        Готово
      </button>
      {/* <Link to="/chat">Перейти в чат</Link> */}
    </div>
  );
}
