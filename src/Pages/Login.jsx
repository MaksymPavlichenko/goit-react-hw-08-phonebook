import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from 'Redux/Auth/AuthOperations';
import styles from '../components/Form/Form.module.css';
import { getisLogin } from 'Redux/Auth/AuthSelectors';
import { useSelector } from 'react-redux';
import LoginIcon from '@mui/icons-material/Login';
import Button from '@mui/material/Button';

export const LogIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleChange = evt => {
    const { name, value } = evt.target;
    if (name === 'email') {
      setEmail(value);
    } else {
      setPassword(value);
    }
  };

  const handleSubmit = async evt => {
    evt.preventDefault();
    if (!email || !password) {
      return;
    }

    const user = { email, password };
    try {
      await dispatch(logIn(user)).unwrap();
    } catch (error) {
      console.log(error);
    }
    setEmail('');
    setPassword('');
  };

  const isLogin = useSelector(getisLogin);

  return (
    <>
      {!isLogin && (
        <div>
          <h2>Log In</h2>
          <form className={styles.form} onSubmit={handleSubmit}>
            <label className={styles.label}>
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
              type="submit"
              variant="contained"
              endIcon={<LoginIcon />}
            >
              Log In
            </Button>
          </form>
        </div>
      )}
    </>
  );
};