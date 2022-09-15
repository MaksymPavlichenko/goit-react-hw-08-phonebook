import PropTypes from 'prop-types';
import styles from '../Form/Form.module.css';

export const Filter = ({ userFilter }) => {
  return (
    <form className={styles.form}>
      <label className={styles.label}>
        Find Contacts by name
        <input
          className={styles.input}
          type="text"
          name="name"
          onChange={userFilter}
        />
      </label>
    </form>
  );
};

Filter.propTypes = {
  userFilter: PropTypes.func.isRequired,
};