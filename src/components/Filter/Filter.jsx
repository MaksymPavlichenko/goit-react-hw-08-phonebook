import styles from '../Form/Form.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../Redux/Contacts/filterSlice';
import { selectGetFilterValue } from 'Redux/Contacts/contacts-selectors'

export function Filter() {
  const filter = useSelector(selectGetFilterValue);
  const dispatch = useDispatch();

  return (
    <form className={styles.form}>
      <label className={styles.label}>
        Find Contacts by name
        <input
          className={styles.input}
          type="text"
          name="filter"
          value={filter.value}
          onChange={e => dispatch(setFilter(e.target.value.toLowerCase()))}
        />
      </label>
    </form>
  );
};