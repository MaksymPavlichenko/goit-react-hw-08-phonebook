import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { getUser } from 'Redux/Contacts/contacts-operations';
import { AppBar } from './AppBar/AppBar';
import { Contacts } from './Contacts/Contacts';
import { Loader } from './Loader/Loader';
import { Login } from './Login/Login';
import { Register } from './Register/Register';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from './App.module.css';
import PrivateRoute from './PrivateRoute/PrivateRoute';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  return (
    <div className={styles.body}>
      <AppBar />
      <div className={styles.wrapper}>
        <Routes>
          <Route path="/" element={<p className={styles.title}>Welcome to Phonebook!</p>} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contacts" element={<PrivateRoute>
                  <Contacts />
                </PrivateRoute>} />
        </Routes>
      </div>
      <ToastContainer />
      <Loader />
    </div>
  );
}

export default App;