import style from "./NavBar.module.css";
import logo from "../../assets/blood.png";
import { Link, NavLink, useRoutes } from "react-router-dom";

const LinkList = () => {
  return (
    <ul className={style.linksList}>
      <li>
        <NavLink to="/" className={({isActive}) => isActive ? style.active : ""}>
          <span>🏠</span>Dashboard
        </NavLink>
      </li>
      <li>
        <NavLink to="/addMeal" className={({isActive}) => isActive ? style.active : ""}>
          <span>🍱</span>New meal
        </NavLink>
      </li>
      <li>
        <NavLink to="/history" className={({isActive}) => isActive ? style.active : ""}>
          <span>🕣</span>Meals history
        </NavLink>
      </li>
      <li>
        <Link to="/">
          <span>📉</span>Graphs
        </Link>
      </li>
    </ul>
  );
};

const NavBar = () => {
  return (
    <nav>
      <p className={style.navTitle}>
        <img src={logo} alt="logo" className={style.logoIcon} />
        Diabestie
      </p>
      <LinkList />
      <p className={style.account}>
        <span className={style.userIcon}>👤</span>Amandine Ameye
        <span className={style.logOutIcon}>🏃🏻‍♂️‍➡️</span>
      </p>
    </nav>
  );
};

export default NavBar;
