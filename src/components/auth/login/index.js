'use client'
import Image from "next/image"
import Link from "next/link"

import logo from "../../../app/images/logo.svg"


export default function UserLogin () {

    return (
        <section className="login-page">
            <div className="card">
                <div className="login-header">
                    <Image src={logo} alt="Logo" />
                </div>
                <form className="registration-form">
                    <input className="input" placeholder="Телефон, имя пользователя или эл. адрес" />
                    <input className="input" placeholder="Пароль" />
                    <button className="button">Войти</button>
                </form>
                <div className="divider">
                    <div className="divider-line"></div>
                    <p className="divider-text">ИЛИ</p>
                    <div className="divider-line"></div>
                </div>
                <button className="button facebook-button">
                    <span className="facebook-icon"></span>
                    <span className="facebook-text">Войти через Facebook</span>
                </button>
            </div>
            <div className="card">
            <div className="login-alternative">
                <h3>У вас ещё нет аккаунта? 
                    <Link href="/signup" className="link-style">Зарегистрироваться</Link>
                </h3>
            </div>
            </div>

        </section>
        
    )
}