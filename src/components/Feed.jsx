export default function Feed({ posts }) {
  return (
    <>
      <h2>Feed</h2>
      <p>Os posts dos meus blogs preferidos</p>
      <ul>
        {posts.map((post) => (
          <li>
            [<strong>{post.blogName}</strong>] {post.title}, {post.date}
          </li>
        ))}
      </ul>
    </>
  );
}

