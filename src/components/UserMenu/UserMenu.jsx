import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'Redux/Auth/AuthOperations';
import { getUserName } from 'Redux/Auth/AuthSelectors';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import LogoutIcon from '@mui/icons-material/Logout';

import styles from '../UserMenu/UserMenu.module.css';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(getUserName);

  const navigate = useNavigate();

  return (
    <div className={styles.user_container}>
      <span className={styles.span}>Welcome, {name}</span>
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
        type="button"
        onClick={() => {
          dispatch(logOut());
          return navigate('/login');
        }}
        variant="contained"
        endIcon={<LogoutIcon />}
      >
        Log Out
      </Button>
    </div>
  );
};