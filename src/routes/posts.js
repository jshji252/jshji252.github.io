import styles from "../styles/posts.module.scss";
import { Link } from "react-router-dom";

import contents from "../contents/contents.json";
export default function Posts() {
  contents.sort((a, b) => b.date.timestamp - a.date.timestamp);

  return (
    <div className={styles.container}>
      <h1>Recent Posts</h1>
      {contents.map((post, i) => (
        <Link
          className={styles.postListItem}
          key={post.id}
          to={`/posts/${post.id}`}
        >
          - {post.title.slice(0, -3)}
        </Link>
      ))}
    </div>
  );
}
