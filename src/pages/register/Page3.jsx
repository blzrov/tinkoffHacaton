export default function Page3({ next, result }) {


    return (
        <div className={"wrapper"}>
            <h1 className={"header"}>Регистрация</h1>
            <div className={"form"}>
                <div className={"add-avatar"}></div>
                <label className={"form-label"}>Должность</label>
                <select onChange={(e) => result.current.user_specialization = e.target.value}
                        className={"input"}>
                    <option value={"Программист"}>Программист</option>
                    <option value={"Дизайнер"}>Дизайнер</option>
                    <option value={"Аналитик"}>Аналитик</option>
                </select>
                <label className={"form-label"}>О себе</label>
                <textarea onChange={(e) => result.current.aboutMe = e.target.value} className={"input form-textarea"} rows={7}></textarea>
            </div>
            <button onClick={next} className={"btn"}>Далее</button>
        </div>);
}