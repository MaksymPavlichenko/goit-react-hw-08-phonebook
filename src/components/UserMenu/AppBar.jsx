import { UserMenu } from './UserMenu';
import { AuthNav } from './AuthNav';
import { useSelector } from 'react-redux';
import { getisLogin } from 'Redux/Auth/AuthSelectors';

export const AppBar = () => {
  const isLogin = useSelector(getisLogin);
  return (
    <>
      <header>
        {isLogin ? <UserMenu /> : <AuthNav />}
      </header>
    </>
  );
};
