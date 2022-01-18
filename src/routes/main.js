import styles from "../styles/main.module.scss";
import { NavLink, Outlet } from "react-router-dom";
const env = process.env.NODE_ENV;
export default function Main() {
  return (
    <div className={styles.container}>
      <header className={styles.mainHeader}>
        <NavLink to="/about" id={styles.logo}>
          jasonji
        </NavLink>
        {env === "development" && <span>(env : {env})</span>}
        <div className={styles.menu}>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? styles.clicked : undefined
            }
          >
            About
          </NavLink>
          <NavLink
            to="/posts"
            className={({ isActive }) =>
              isActive ? styles.clicked : undefined
            }
          >
            Posts
          </NavLink>
        </div>
      </header>
      <div className={styles.content}>
        <Outlet />
      </div>
      <footer className={styles.mainFooter}>
        <span>© 2022</span>
        <span className={styles.sign}>jasonji</span>
      </footer>
    </div>
  );
}

// import { Link, Outlet } from "react-router-dom";

// export default function App() {
//   return (
//     <div>
//       <h1>Bookkeeper</h1>
//       <nav
//         style={{
//           borderBottom: "solid 1px",
//           paddingBottom: "1rem",
//         }}
//       >
//         <Link to="/invoices">Invoices</Link> |{" "}
//         <Link to="/expenses">Expenses</Link>
//       </nav>
//       <Outlet />
//     </div>
//   );
// }
