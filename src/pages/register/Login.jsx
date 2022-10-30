import React from "react";
export default function Login(props) {
  const [login, setLogin] = React.useState("");
  const [pass, setPass] = React.useState("");

  function doLogin() {
    // fetch("", { login, pass })
    //   .then((res) => res.json())
    //   .then((data) => console.log(data));
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
      <button onClick={doLogin} className={"btn login-button"}>
        Войти
      </button>
      <button onClick={props.next} className={"btn login-button"}>
        Создать аккаунт
      </button>
    </div>
  );
}
