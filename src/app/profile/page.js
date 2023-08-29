'use client'
import Image from "next/image"
import icon from "../images/icon.png"
import profpic from "../images/Profile.png"
import postIcon from "../images/post-Icon.png"
import Posts from '@/components/posts'
import Header from '@/components/header'


export default function ProfilePage() {
  const posts = [
    {
        image: "/images/Post.png",
    },
    {
        image: "/images/Post1.png",
    },
    {
        image: "/images/Post2.png",
    },
    {
        image: "/images/Post3.png",
    },
    {
        image: "/images/Post.png",
    },

  ]

  return (
    <main>
      <Header />
      <section>
            <div className="container">
                <div className="profile-head">
                    <div className="profile-head-item">
                        <Image src={profpic} alt="search" className="image" />
                    </div>
                    <div className="profile-head-item">
                        <div className="profile-head-left">
                            <h2>terrylucas</h2>
                            <button className="button">Follow</button>
                            <Image src={icon} alt="Logo" />
                        </div>
                        <div className="profile-head-left">
                            <a><span>1.258</span> posts</a>
                            <a><span>4M</span> followers</a>
                            <a><span>1.250</span> following</a>
                        </div>
                        <div className="profile-head-left">
                            <h3>Terry Lucas</h3>
                        </div>
                    </div>
                </div>
                <div className="post">
                    <div className="post-head">
                        <a>
                            <Image src={postIcon} alt="post"/>
                            <span>POSTS</span>
                        </a>
                    </div>
                    <Posts posts={posts}/>
                </div>
            </div>
        </section>

    </main>
  )
}
