export default function Page1() {
  return (
      <div className={"wrapper"}>
              <h1 className={"header"}>Вход</h1>
              <section className={"form"}>
                  <p className={"form-header"}>Введите логин и пароль</p>
                  <input type={"text"} className={"input"} placeholder={"Логин"}></input>
                  <input type={"password"} className={"input"} placeholder={"Пароль"}></input>
              </section>
              <button className={"btn send-button"}>Отправить SMS</button>
      </div>);
}
