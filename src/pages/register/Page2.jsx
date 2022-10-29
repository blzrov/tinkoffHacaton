import React from "react";

export default function Page2({ next, result }) {

  return (
    <div className={"wrapper"}>
      <h1 className={"header"}>Регистрация</h1>
      <section defaultValue={1} className={"form"}>
        <label className={"form-label"}>Имя</label>
        <input
          onChange={(e) => (result.current.name = e.target.value)}
          type={"text"}
          className={"input"}
        ></input>
        <label className={"form-label"}>Город</label>
        <input
          onChange={(e) => (result.current.city = e.target.value)}
          type={"text"}
          className={"input"}
        ></input>
        <label className={"form-label"}>Пол</label>
        <input
          onChange={(e) => (result.current.sex = e.target.value)}
          type={"button"}
          className={"input"}
        ></input>
        <label className={"form-label"}>Возраст</label>
        <input
          onChange={(e) => (result.current.age = e.target.value)}
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
