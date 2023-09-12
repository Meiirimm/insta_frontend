import Post from "./post"

export default function Posts ({posts, openModalPost}) {

    const showPosts = posts.map(item => (<Post item={item} openModalPost={() => openModalPost(item.image)} />))
    return (
        <div className="post-grid">
            {showPosts}
        </div>
    )
}