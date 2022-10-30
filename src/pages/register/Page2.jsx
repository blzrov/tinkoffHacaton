import React from "react";

export default function Page2({ next, result }) {

  return (
    <div className={"wrapper"}>
      <h1 className={"header"}>Регистрация</h1>
      <section defaultValue={1} className={"form"}>
        <label className={"form-label"}>Имя</label>
        <input
          onChange={(e) => (result.current.user_name = e.target.value)}
          type={"text"}
          className={"input"}
        ></input>
        <label className={"form-label"}>Город</label>
        <input
          onChange={(e) => (result.current.user_city = e.target.value)}
          type={"text"}
          className={"input"}
        ></input>
        <label className={"form-label"}>Пол</label>
        <input
          onChange={(e) => (result.current.user_sex = e.target.value)}
          type={"button"}
          className={"input"}
        ></input>
        <label className={"form-label"}>Возраст</label>
        <input
          onChange={(e) => (result.current.user_age = e.target.value)}
          type={"number"}
          className={"input"}
          min={0}
        ></input>
      </section>
      <button onClick={next} className={"btn continue-btn"}>
        Далее
      </button>
    </div>
  );
}
