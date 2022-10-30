import React from "react";
export default function Login(props) {
  const [user_login, setLogin] = React.useState("");
  const [user_password, setPass] = React.useState("");

  function doLogin() {
      fetch("http://127.0.0.1:8000/checkUser/", {
          headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
          },
          method: "POST",
          body: JSON.stringify({login: user_login, pass: user_password}),
      })
          .then((res) => console.log(JSON.parse(res)))
          .catch((e) => console.log(e));
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
