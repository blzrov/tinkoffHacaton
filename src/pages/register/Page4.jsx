export default function Page4({ result }) {
  function postResult() {
    fetch("http://127.0.0.1:8000/getUser/?user_login=Kolya_wolf", {
      method: "post",
      body: result.current,
    })
      .then((res) => console.log(res))
      .catch((e) => console.log(e));
  }
  result.current.hobbies = [];
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
                    result.current.hobbies.push(e.target.textContent);
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
    </div>
  );
}
