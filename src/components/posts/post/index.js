export default function Post ({item}) {
    return (
        <div className="post-grid-item">
          <img src={item.image} alt="Post" />
        </div>
    )
}