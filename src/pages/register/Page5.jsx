export default function Page5() {
    return (
        <div className={"wrapper"}>
            <h1 className={"header"}>Анкета</h1>
            <div className={"form"}>
                <label className={"form-label"}>Мои хобби</label>
                <select className={"input"}></select>
                <label className={"form-label"}>Ищу коллег только из своего города</label>
                <input type={"button"} className={"input"}></input>
            </div>
            <button className={"btn"}>Готово</button>
        </div>);
}