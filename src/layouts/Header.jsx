import { Link } from "react-router-dom";

import styles from "./Header.module.css";
import { getProfile } from "../services/user";
import { useQuery } from "@tanstack/react-query";

function Header() {
  const { data, refetch } = useQuery(["profile"], getProfile);

  const loginHandler = () => {
    document.cookie = "accessToken=;";
    refetch();
  };

  return (
    <header className={styles.header}>
      <div>
        <Link to="/">
          <img src="divar.svg" className={styles.logo} />
        </Link>
        <span>
          <img src="location.svg" />
          <p>تهران</p>
        </span>
      </div>
      <div>
        <div className={styles.login}>
          {data ? (
            <button onClick={loginHandler}>خروج</button>
          ) : (
            <Link to="/auth">
              <button onClick={loginHandler}>ورود</button>
            </Link>
          )}
        </div>
        <Link to="/auth">
          <span>
            <img src="profile.svg" />
            <p>دیوار من</p>
          </span>
        </Link>
        <Link to="/dashboard" className={styles.button}>
          ثبت آگهی
        </Link>
      </div>
    </header>
  );
}

export default Header;
