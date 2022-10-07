import { NavLink, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { selectIsAuth } from 'Redux/Contacts/contacts-selectors';
import styles from './AppBar.module.css';

export function AppBar() {
  const isAuth = useSelector(selectIsAuth);

  return (
    <header>
      <Link to="/" className={styles.title}>
        Phonebook
      </Link>
      <div className={styles.container}>
        {!isAuth ? (
          <NavLink to="/register" className={styles.link}>
            Sign In
          </NavLink>
        ) : null}
        {isAuth ? (
          <NavLink to="/contacts" className={styles.link}>
            Contacts
          </NavLink>
        ) : null}
        {!isAuth ? (
          <NavLink to="/login" className={styles.link}>
            Log In
          </NavLink>
        ) : null}
        {isAuth ? <UserMenu /> : null}
      </div>
    </header>
  );
}