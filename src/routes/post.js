import { useParams } from "react-router-dom";
import parse from "html-react-parser";
import contents from "../contents/contents.json";
import styles from "../styles/posts.module.scss";

export default function Post() {
  let { postId } = useParams();

  const post = contents.find((c) => parseInt(postId) === c.id);

  return (
    <div className={styles.container}>
      <div className={styles.post} key={`post-${postId}`}>
        <h1 className={styles.title}>{post.title.slice(0, -3)}</h1>
        <p className={styles.date}>{post.date.fullString}</p>
        {post ? parse(post.content) : "undefined"}
      </div>
    </div>
  );
}
