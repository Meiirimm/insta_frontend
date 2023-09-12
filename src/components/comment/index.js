import React from "react";
import Image from "next/image";
import profpic from "../../app/images/profpic.jpg";
import like from "../../app/images/like.png";

export default function Comments ({ comment, remove }) {
  return (
    
        <div className="comment-item">
          <div className="post-header-author com-author">
            <Image src={profpic} alt="search" className="image" />
          </div>
          <div className="com-content">
            <div className="com-content-item">
                <h3>yawnzzn</h3>
                <p>{comment.text}</p>
            </div>
            <div className="com-item-action">
                <span onClick={() => remove(comment)}>Удалить</span>
                <span>Редактировать</span>
            </div>
          </div>
          <div>
            <Image src={like} alt="icon" className="image" />
          </div>
        </div>
  );
};