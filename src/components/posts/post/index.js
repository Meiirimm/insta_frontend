export default function Post ({item, openModalPost}) {
    return (
        <div className="post-grid-item" onClick={() => openModalPost(item.image)}>
          <img src={item.image} alt="Post" />
          <div className="postimg-hover" ></div>
        </div>
    )
}