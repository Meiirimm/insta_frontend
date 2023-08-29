'use client'
import Image from "next/image"
import Link from "next/link"

import logo from "../../app/images/logo.svg"


export default function UserSignup () {

    return (
        <section className="login-page">
            <div className="card">
                <div className="login-header">
                    <Image src={logo} alt="Logo" />
                    <h2>Зарегистрируйтесь, чтобы смотреть фото и видео ваших друзей.</h2>
                </div>
                <button className="button facebook-button">
                    <span className="facebook-icon"></span>
                    <span className="facebook-text">Войти через Facebook</span>
                </button>
                <div className="divider">
                    <div className="divider-line"></div>
                    <p className="divider-text">ИЛИ</p>
                    <div className="divider-line"></div>
                </div>
                <form className="registration-form">
                    <input className="input" placeholder="Моб. телефон или эл. адрес" />
                    <input className="input" placeholder="Имя и фамилия" />
                    <input className="input" placeholder="Имя пользователя" />
                    <input className="input" placeholder="Пароль" />
                    <div className="text-block">
                        <p>Люди, которые пользуются нашим сервисом, могли загрузить вашу контактную информацию в Instagram. <a href="#">Подробнее</a></p>
                        <p>Регистрируясь, вы принимаете наши <a>Условия</a>, <a>Политику конфиденциальности</a> и <a href="#">Политику в отношении файлов cookie</a>.</p>
                    </div>                    
                    <button className="button">Регистрация</button>
                </form>
            </div>
            <div className="card">
            <div className="login-alternative">
                <h3>Есть аккаунт? 
                    <Link href="/login" className="link-style">Вход</Link>
                </h3>
            </div>
            </div>
        </section>
        
    )
}