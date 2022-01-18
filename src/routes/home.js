import me from "../contents/home/tang.jpg";
import styles from "../styles/home.module.scss";

export default function Home() {
  return (
    <div style={{ width: "100%" }}>
      <img alt="me" src={me} className={styles.myImg} />
      <p>Hi my name is Jason and I am a software developer in Australia.</p>
    </div>
  );
}
