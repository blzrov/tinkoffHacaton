import {useRef} from "react";

export default function Page6() {
    return (
        <div className={"wrapper"}>
            <h1 className={"header"}>Профиль</h1>
            <div className={"form"}>
                <div className={"add-avatar"}></div>
                <label className={"form-label"}>Имя</label>
                <input placeholder={"Денис"} className={"input profile-input"}/>
                <label className={"form-label"}>Город</label>
                <input placeholder={"Екатеринбург"} className={"input profile-input"}/>
                <label className={"form-label"}>Должность</label>
                <select className={"input profile-input"}>
                    <option disabled selected>Выберите свою должность</option>
                    <option>Программист</option>
                    <option>Аналитик</option>
                    <option>Дизайнер</option>
                </select>
                <label className={"form-label"}>О себе</label>
                <textarea className={"input form-textarea"} rows={7}></textarea>
                <button className={"btn btn-interests"}>Мои интересы</button>
            </div>
            <nav className={"site-nav"}>
                <ul className={"nav-list"}>
                    <li className={"nav-item current"}>
                        <a href={"#"} className={"nav-link profile-icon"}>Профиль</a>
                    </li>
                    <li className={"nav-item"}>
                        <a href={"#"} className={"nav-link chats-icon"}>Беседы</a>
                    </li>
                    <li className={"nav-item"}>
                        <a href={"#"} className={"nav-link chatroulette-icon"}>Чатрулетка</a>
                    </li>
                    <li className={"nav-item"}>
                        <a href={"#"} className={"nav-link settings-icon"}>Настройки</a>
                    </li>
                </ul>
            </nav>
        </div>);
}