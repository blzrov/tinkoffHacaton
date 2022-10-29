export default function Page3butt() {
    return (
        <div className={"wrapper"}>
                <h1 className={"header"}>Регистрация</h1>
                <section className={"form"}>
                    <label className={"form-label"}>Имя</label>
                    <input type={"text"} className={"input"}></input>
                    <label className={"form-label"}>Город</label>
                    <input type={"text"} className={"input"}></input>
                    <label className={"form-label"}>Пол</label>
                    <input type={"button"} className={"input"}></input>
                    <label className={"form-label"}>Возраст</label>
                    <input type={"number"} className={"input"} min={0}></input>
                </section>
                <button className={"btn continue-btn"}>Далее</button>
        </div>);
}
