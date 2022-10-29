import React from "react";
export default function Page1(props) {
  const [login, setLogin] = React.useState("");
  const [pass, setPass] = React.useState("");

  function doLogin() {
    //doLogin
    console.log({ login, pass });
  }

  return (
    <div className={"wrapper"}>
      <h1 className={"header"}>Вход</h1>
      <section className={"form"}>
        <p className={"form-header"}>Введите логин и пароль</p>
        <input
          onChange={(e) => setLogin(e.target.value)}
          className={"input"}
          placeholder={"Логин"}
        ></input>
        <input
          onChange={(e) => setPass(e.target.value)}
          type={"password"}
          className={"input"}
          placeholder={"Пароль"}
        ></input>
      </section>
      <button onClick={doLogin} className={"btn send-button"}>
        Войти
      </button>
      <button onClick={props.next}  className={"btn send-button"}>
        Создать аккаунт
      </button>
    </div>
  );
}