'use client'
import { useState } from "react"
import Comments from "../comment"

import Image from "next/image"
import profpic from "../../app/images/profpic.jpg"
import icon from "../../app/images/more.png"
import like from "../../app/images/like.png"
import comment from "../../app/images/comment.png"
import send from "../../app/images/send.png"
import emoji from "../../app/images/emoji.png"




export default function ModalPost({close, postImage}) {   
    const [text, setText] = useState("")
    const [comments, setComments] = useState([])


    const onChangeText = (e) => {
        setText(e.target.value)
        console.log(e.target.value);
    }

    const addComment = (item) => {
        setComments([...comments, item])
        console.log(comments)
    }

    const sendCom = (e) => {
        e.preventDefault();
        const Comment = {
          text,
        };
        addComment(Comment);
        setText(""); 
    };
    
    const deleteComment = (comment) => {
        let com = [...comments]
        let index = comments.indexOf(comment)
        com.splice(index, 1);
        setComments(com)
    }


    return(
        <div className="modal">
            <div className="modal-backdrop" onClick={close}></div>
            <div className="modal-inner post-modal">
                    <div className='post-modal-item'>
                        <Image src={postImage} alt="Post" width={500} height={300} />
                    </div>
                    <div className='post-modal-item'>
                        <div className="post-header">
                            <div className="post-header-author">
                                <Image src={profpic} alt="search" className="image" />
                                <h3>yawnzzn</h3>
                            </div>
                            <Image src={icon} alt="Logo" />
                        </div>
                        <div className="comments-section">
                            {comments.map(item => (<Comments comment={item} remove={deleteComment}/>))}
                        </div>
                        <div className="post-actions">
                            <div className="post-actions-item">
                                <Image src={like} alt="icon" className="image" />
                                <Image src={comment} alt="icon" className="image" />
                                <Image src={send} alt="icon" className="image" />
                            </div>
                            <div>
                                <p>3 485 240 отметок "Нравится"</p>
                            </div>
                        </div>
                        <div className="write-comment">
                            <form>
                                <div className="write-comment-item">
                                    <Image src={emoji} alt="icon" className="image" />
                                    <input placeholder="Добавьте комментарий..." type="text" onChange={onChangeText} value={text}></input>
                                </div>
                                <button onClick={sendCom}>Опубликовать</button>
                            </form>
                        </div>
                    </div>
            </div>
        </div>
    )
}