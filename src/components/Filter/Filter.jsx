import styles from '../Form/Form.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { filterContacts } from '../../Redux/Contacts/contacts-actions';

export const Filter = () => {
  const name = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();
  const userFilter = e => {
    dispatch(filterContacts(e.target.value));
  };

  return (
    <form className={styles.form}>
      <label className={styles.label}>
        Find Contacts by name
        <input
          className={styles.input}
          type="text"
          name="name"
          value={name}
          onChange={userFilter}
        />
      </label>
    </form>
  );
};