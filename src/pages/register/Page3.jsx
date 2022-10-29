export default function Page3({ next, result }) {
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
            <button onClick={next} className={"btn"}>Готово</button>
        </div>);
}