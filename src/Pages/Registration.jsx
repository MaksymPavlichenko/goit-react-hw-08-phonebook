import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signIn } from 'Redux/Auth/AuthOperations';
import styles from '../components/Form/Form.module.css';
import { getisLogin } from 'Redux/Auth/AuthSelectors';
import { useSelector } from 'react-redux';
import Button from '@mui/material/Button';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';

export const Registration = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleChange = evt => {
    const { name, value } = evt.target;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
        setPassword(value);
    } else {
      throw new Error('Unexpected value');
    }
  };

  const handleSubmit = evt => {
    evt.preventDefault();

    const user = { email, password };

    dispatch(signIn(user));
    setEmail('');
    setPassword('');
    evt.target.reset();
  };

  const isLogin = useSelector(getisLogin);

  return (
    <>
      {!isLogin && (
        <>
          <h2>Registration</h2>
          <form className={styles.form} onSubmit={handleSubmit}>
            <label className={styles.label}>
              Email
              <input
                className={styles.input}
                name="email"
                value={email}
                onChange={handleChange}
                placeholder="Enter Email"
                type="teemailxt"
              />
            </label>
            <label className={styles.label}>
              Password
              <input
                className={styles.input}
                name="password"
                value={password}
                onChange={handleChange}
                placeholder="Enter Password"
                type="password"
              />
            </label>
            <Button
              sx={{
                fontFamily: 'inherit',
                color: '#0082D1',
                backgroundColor: '#FFD100',
                border: '1px solid #FFD100',
                '&:hover': {
                  color: '#FFD100',
                  background: '#0082D1',
                  border: '1px solid #FFD100',
                },
              }}
              variant="contained"
              endIcon={<AppRegistrationIcon />}
            >
              Register
            </Button>
          </form>
        </>
      )}
    </>
  );
};