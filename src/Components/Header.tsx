import { Link } from "react-router-dom";

import { useUserContext } from "@context/UserContext";

import styles from "./Header.module.css";

// @ts-ignore: next-line
import { ReactComponent as Dogs } from "@assets/dogs.svg";

export function Header() {
  const { data } = useUserContext();

  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link className={styles.logo} to="/" aria-label="Dogs - Home">
          <Dogs />
        </Link>{" "}
        {data ? (
          <Link className={styles.login} to="/login">
            {data.name}
          </Link>
        ) : (
          <Link className={styles.login} to="/login">
            Login / Criar
          </Link>
        )}
      </nav>
    </header>
  );
}
