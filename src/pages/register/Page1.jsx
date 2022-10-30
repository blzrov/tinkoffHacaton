import React from "react";

export default function Page1({ next, result }) {

    return (
        <div className={"wrapper"}>
            <h1 className={"header"}>Регистрация</h1>
            <section className={"form"}>
                <p className={"form-header"}>Введите логин и пароль</p>
                <input
                    onChange={(e) => result.current.user_login = e.target.value}
                    className={"input"}
                    placeholder={"Логин"}
                ></input>
                <input
                    onChange={(e) => result.current.user_password = e.target.value}
                    type={"password"}
                    className={"input"}
                    placeholder={"Пароль"}
                ></input>
            </section>
            <button onClick={next} className={"btn continue-btn"}>
                Далее
            </button>
        </div>
    );
}
