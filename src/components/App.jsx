import { Route, Routes } from 'react-router-dom';
import { LogIn } from 'Pages/Login';
import { Registration } from '../Pages/Registration';
import { AppBar } from './UserMenu/AppBar';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getRefresh } from 'Redux/Auth/AuthOperations';
import { Contacts } from '../Pages/Contacts';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import PublicRoute from './PublicRoute/PublicRoute';
import { getToken, getisRefreshed } from 'Redux/Auth/AuthSelectors';
import { Loader } from './Loader/Loader';
import { NotFound } from 'Pages/NotFound';

export const App = () => {
  const dispatch = useDispatch();
  const token = useSelector(getToken);
  const isRefreshed = useSelector(getisRefreshed);

  useEffect(() => {
    dispatch(getRefresh());
  }, [dispatch, token]);

  return (
    <>
      {isRefreshed ? (
        <Loader />
      ) : (
        <>
          <AppBar />
          <Routes>
            <Route
              path="/"
              element={
                <PublicRoute>
                  <Registration />
                </PublicRoute>
              }
            ></Route>
            <Route
              path="/login"
              element={
                <PublicRoute>
                  <LogIn />
                </PublicRoute>
              }
            ></Route>
            <Route
              path="/contacts"
              element={
                <PrivateRoute>
                  <Contacts />
                </PrivateRoute>
              }
            ></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </>
      )}
    </>
  );
};