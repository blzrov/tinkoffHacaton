export default function Page4() {
    return (
        <div className={"wrapper"}>
            <h1 className={"header"}>Регистрация</h1>
            <div className={"form"}>
                <div className={"add-avatar"}></div>
                <label className={"form-label"}>Должность</label>
                <select className={"input"}></select>
                <label className={"form-label"}>О себе</label>
                <textarea className={"input form-textarea"} rows={7}></textarea>
            </div>
            <button className={"btn"}>Готово</button>
        </div>);
}