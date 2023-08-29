'use client'
import Image from "next/image"
import logo from "../../app/images/logo.svg"
import search from "../../app/images/search.svg"
import home from "../../app/images/home.svg"
import mess from "../../app/images/mess.svg"
import newpost from "../../app/images/newpost.svg"
import inter from "../../app/images/inter.svg"
import like from "../../app/images/like.svg"
import profpic from "../../app/images/profpic.svg"



export default function Header () {
    return (
        <header className="header">
            <div className="container">
                <div className="header-inner">
                    <div className="header-logo">
                        <Image src={logo} alt="Logo" />
                    </div>
                    <div className="header-search">
                        <Image src={search} alt="search" />
                        <p>Search</p>
                    </div> 
                    <div className="header-item">
                        <Image src={home} alt="search" className="image" />
                        <Image src={mess} alt="search" className="image" />
                        <Image src={newpost} alt="search" className="image" />
                        <Image src={inter} alt="search" className="image" />
                        <Image src={like} alt="search" className="image" />
                        <Image src={profpic} alt="search" className="image" />
                    </div>
                </div>
            </div>
        </header>
        
    )
}