import { useSelector, useDispatch } from 'react-redux';
import { selectGetEmail } from 'Redux/Contacts/contacts-selectors';
import { logout } from 'Redux/Contacts/contacts-operations';
import styles from './UserMenu.module.css';

export function UserMenu() {
  const dispatch = useDispatch();
  const email = useSelector(selectGetEmail);

  return (
    <div className={styles.userMenu}>
      <p className={styles.userEmail}>{email}</p>
      <button type="button" onClick={() => dispatch(logout())} className={styles.link}>
        Log Out
      </button>
    </div>
  );
}