import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsAuth } from 'Redux/Contacts/contacts-selectors';
import { login } from 'Redux/Contacts/contacts-operations';
import styles from './Login.module.css';

export function Login() {
  const [email, setMail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);

  const inputOperator = event => {
    if (event.target.name === 'email') {
      setMail(event.target.value);
    } else if (event.target.name === 'password') {
      setPassword(event.target.value);
    } else {
      throw new Error('Unexpected value');
    }
  };
  const formSubmit = event => {
    event.preventDefault();
    dispatch(login({ email, password }));
    setMail('');
    setPassword('');
  };

  if (!isAuth) {
    return (
      <form onSubmit={formSubmit} className={styles.form}>
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
          Log in
        </button>
      </form>
    );
  } else {
    return <Navigate to="/contacts" replace={true} />;
  }
}