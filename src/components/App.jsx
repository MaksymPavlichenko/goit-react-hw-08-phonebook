import { Route, Routes } from 'react-router-dom';
import { LogIn } from 'Pages/Login';
import { Registration } from '../Pages/Registration';
import { AppBar } from './UserMenu/AppBar';
import { useSelector } from 'react-redux';
import { Contacts } from '../Pages/Contacts';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import PublicRoute from './PublicRoute/PublicRoute';
import { getisRefreshed } from 'Redux/Auth/AuthSelectors';
import { Loader } from './Loader/Loader';
import { NotFound } from 'Pages/NotFound';

export const App = () => {
  const isRefreshed = useSelector(getisRefreshed);

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