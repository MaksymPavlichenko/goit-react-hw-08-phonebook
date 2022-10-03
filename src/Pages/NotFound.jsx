import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getisLogin } from 'Redux/Auth/AuthSelectors';

export const NotFound = () => {
  const isLogin = useSelector(getisLogin);
  const navigate = useNavigate();

  useEffect(() => {
    const test = (() => {
      if (isLogin) {
        navigate('/contacts');
      } else {
        navigate('/login');
      }
    });
    console.log(test);
  }, [isLogin, navigate]);

  return (
    <>
      <h1>page not found</h1>
    </>
  );
};