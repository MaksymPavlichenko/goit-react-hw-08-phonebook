import styles from '../Form/Form.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { filterContact } from '../../Redux/Contacts/contacts';

export const Filter = () => {
  const name = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();
  const userFilter = e => {
    dispatch(filterContact(e.target.value));
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