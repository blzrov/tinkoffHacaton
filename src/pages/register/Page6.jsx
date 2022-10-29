export default function Page2() {
    return (
        <div className={"wrapper"}>
            <h1 className={"header"}>Настройки</h1>
            <ul className="settings">
                <li className="notifications">
                    <h2 className={"notifications-header"}>Уведомления</h2>
                    <ul className={"notifications-params"}>
                        <li className={"parameter"}>Все</li>
                        <li className={"parameter"}>Личные</li>
                        <li className={"parameter"}>Нет</li>
                    </ul>
                </li>
                <li className="language">
                    <label className={"form-label"}>Язык</label>
                    <select value={1} className={"input"}>
                        <option>Русский</option>
                        <option>Белорусский</option>
                        <option>Армянский</option>
                        <option>Английский</option>
                    </select>
                </li>
                <li className="theme">
                    <label className="form-label">Тема</label>
                    <select className={"input"}>
                        <option>Светлая</option>
                        <option>Тёмная</option>
                    </select>
                </li>
                <li className="blacklist">
                    <label className="form-label">Чёрный список</label>
                    <input type={"button"} className={"input blacklist-btn"} value={"+"}></input>
                </li>
                <button className={"btn btn-exit"}>Выйти из аккаунта</button>
            </ul>
            <nav className={"site-nav"}>
                <ul className={"nav-list"}>
                    <li className={"nav-item"}>
                        <a href={"#"} className={"nav-link profile-icon"}>Профиль</a>
                    </li>
                    <li className={"nav-item"}>
                        <a href={"#"} className={"nav-link chats-icon"}>Беседы</a>
                    </li>
                    <li className={"nav-item"}>
                        <a href={"#"} className={"nav-link chatroulette-icon"}>Чатрулетка</a>
                    </li>
                    <li className={"nav-item current"}>
                        <a href={"#"} className={"nav-link settings-icon"}>Настройки</a>
                    </li>
                </ul>
            </nav>
        </div>);
}