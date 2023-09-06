'use client'

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"

import logo from "../../app/images/logo.svg"
import search from "../../app/images/search.svg"
import home from "../../app/images/home.svg"
import mess from "../../app/images/mess.svg"
import newpost from "../../app/images/newpost.svg"
import inter from "../../app/images/inter.svg"
import like from "../../app/images/like.svg"
import profpic from "../../app/images/profpic.svg"



export default function Header ({ setStep }) {

    const openModal = () => {
        setStep(2); // Обновляем состояние step при нажатии кнопки
      };
    

    return (
        
        <header className="header">
            <div className="container">
                <div className="header-inner">
                    <div className="header-logo">
                        <Link href="/">
                            <Image src={logo} alt="Logo" />
                        </Link>
                    </div>
                    <div className="header-search">
                        <Image src={search} alt="search" />
                        <p>Search</p>
                    </div> 
                    <div className="header-item">
                        <Link href="/">
                            <Image src={home} alt="icon" className="image" />
                        </Link>
                        <Image src={mess} alt="icon" className="image" />
                        <button className="newpost" onClick={openModal}><Image src={newpost} alt="icon" className="image" /></button>
                        <Image src={inter} alt="icon" className="image" />
                        <Image src={like} alt="icon" className="image" />
                        <Link href="/profile">
                            <Image src={profpic} alt="profpic" className="image" />
                        </Link>
                    </div>
                </div>
            </div>
        </header>
        
    )
}