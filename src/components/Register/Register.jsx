import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsAuth } from 'Redux/Contacts/contacts-selectors';
import { register } from 'Redux/Contacts/contacts-operations';
import styles from './Register.module.css';

export function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);

  const inputOperator = event => {
    if (event.target.name === 'name') {
      setName(event.target.value);
    } else if (event.target.name === 'email') {
      setEmail(event.target.value);
    } else if (event.target.name === 'password') {
      setPassword(event.target.value);
    } else {
      throw new Error('Unexpected value');
    }
  };

  const formSubmit = event => {
    event.preventDefault();
    dispatch(register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  if (!isAuth) {
    return (
      <form onSubmit={formSubmit} className={styles.form}>
        <label className={styles.label}>
          Username
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces.
                For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={inputOperator}
            className={styles.input}
          />
        </label>
        <label className={styles.label}>
          Email
          <input type="email" name="email" required value={email} onChange={inputOperator} className={styles.input} />
        </label>
        <label className={styles.label}>
          Password
          <input
            type="password"
            name="password"
            required
            value={password}
            onChange={inputOperator}
            className={styles.input}
          />
        </label>
        <button type="submit" className={styles.button}>
          Sign In
        </button>
      </form>
    );
  } else {
    return <Navigate to="/contacts" replace={true} />;
  }
}