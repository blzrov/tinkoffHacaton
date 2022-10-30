import React from "react";
import { json, Link } from "react-router-dom";

export default function Page4({ result, setUser, setUserRes }) {
  console.log(setUserRes);
  const [isLogin, setIsLogin] = React.useState(false);

  function postResult() {
    if (!JSON.parse(localStorage.getItem("hobbi"))) {
      let o = {}
      o[result.current.user_hobbies] = Date.now();
      localStorage.setItem("hobbi", JSON.stringify(o));
    }
    setUserRes(result.current.user_hobbies);
    fetch("127.0.0.1:8000/postUser/", {
      method: "POST",
      body: JSON.stringify(result.current),
    })
      .then((res) => JSON.parse(res))
      .then((e) => console.log(e))
      .catch((e) => console.log(e))
      .finally(() => {
        if (true) {
          setIsLogin(true);
          setUser(result.current.user_login);
        }
      });
  }
  result.current.user_hobbies = [];

  return (
    <div className={"wrapper"}>
      <h1 className={"header"}>Анкета</h1>
      <div className={"form"}>
        <label className={"form-label"}>Мои хобби</label>
        <ul className="interests">
          {[
            "Спорт",
            "Киберспорт",
            "Настольные игры",
            "Музыка",
            "Книги",
            "Путешествия",
            "Искусство",
            "IT-технологии",
            "Фото",
            "Животные",
            "Кулинария",
            "Растения",
            "Здоровый образ жизни",
            "Тусовки",
            "Фильмы",
            "Коллекционирование",
            "Хэндмейд",
            "Пение",
          ].map((element, index) => {
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
          })}
        </ul>
        <label className={"form-label"}>
          Ищу коллег только из своего города
        </label>
        <fieldset className="form-own-city">
          <input
            onChange={(e) => (result.current.user_is_my_city = e.target.value)}
            type={"radio"}
            className={"input"}
            value={"true"}
            id="radio-y"
          ></input>
          <label htmlFor="radio-y">+</label>
          <input
            onChange={(e) => (result.current.user_is_my_city = e.target.value)}
            type={"radio"}
            className={"input"}
            value={"false"}
            id="radio-n"
          ></input>
          <label htmlFor="radio-n">-</label>
        </fieldset>
      </div>

      {!isLogin ? (
        <button className={"btn"} onClick={postResult}>
          Готово
        </button>
      ) : (
        <Link to="/chat">
          <button className={"btn login-button"}>Перейти в чат</button>
        </Link>
      )}
      {/* <Link to="/chat">Перейти в чат</Link> */}
    </div>
  );
}
