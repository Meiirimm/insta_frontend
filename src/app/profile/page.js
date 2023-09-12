'use client'
import { useState } from "react"

import Image from "next/image"
import icon from "../images/more.png"
import profpic from "../images/profpic.jpg"
import postIcon from "../images/posticon.png"
import Posts from '@/components/posts'
import Header from '@/components/header1'
import ModalCreatePost from "@/components/modalCreatePost"
import ModalPost from "@/components/modalPost"


export default function ProfilePage() {
    const [modalCreatePostIsOpen, setModalCreatePostIsOpen] = useState(false)
    const [modalPostIsOpen, setModalPostIsOpen] = useState(false);
    const [postImage, setPostImage] = useState(""); 


    const  closeModalCreatePost = () => {
        setModalCreatePostIsOpen(false)
    }
  
    const openModalCreatePost = () => {
        setModalCreatePostIsOpen(true);
    };

    const openModalPost = (postImage) => {
        setModalPostIsOpen(true);
        setPostImage(postImage); 
    };
    
    const closeModalPost = () => {
        setModalPostIsOpen(false);
    };
      

  const posts = [
    {
        image: "/images/1.jpg",
    },
    {
        image: "/images/2.jpg",
    },
    {
        image: "/images/3.jpg",
    },
    {
        image: "/images/4.jpg",
    },
    {
        image: "/images/5.jpg",
    },
    {
        image: "/images/6.jpg",
    },
    {
        image: "/images/7.jpg",
    },
  ]
  

  return (
    <main className="main">
        <Header openModal={openModalCreatePost} />
        {modalCreatePostIsOpen && <ModalCreatePost close={closeModalCreatePost}/>}
        {modalPostIsOpen && <ModalPost close={closeModalPost} postImage={postImage} />}

        <section className="main-content">
            <div className="container">
                <div className="profile-head">
                    <div className="profile-head-item">
                        <Image src={profpic} alt="search" className="image" />
                    </div>
                    <div className="profile-head-item">
                        <div className="profile-head-left">
                            <h2>yawnzzn</h2>
                            <button className="button">Подписаться</button>
                            <Image src={icon} alt="Logo" />
                        </div>
                        <div className="profile-head-left">
                            <a><span>7</span> публикаций</a>
                            <a><span>16 млн</span> подписчиков</a>
                            <a><span>2</span> подписок</a>
                        </div>
                        <div className="profile-head-left">
                            <h3>YEONJUN</h3>
                        </div>
                    </div>
                </div>
                <div className="post">
                    <div className="post-head">
                        <a>
                            <Image src={postIcon} alt="post"/>
                            <span>ПУБЛИКАЦИИ</span>
                        </a>
                    </div>
                    <Posts posts={posts} openModalPost={(postImage) => openModalPost(postImage)} />
                </div>
            </div>
        </section>

    </main>
  )
}
