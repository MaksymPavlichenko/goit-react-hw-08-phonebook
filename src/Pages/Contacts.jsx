import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import Form from 'components/Form/Form';
import { useSelector } from 'react-redux';
import { getisLogin } from 'Redux/Auth/AuthSelectors';
import styles from '../Pages/Pages.module.css';

export const Contacts = () => {
  const isLogin = useSelector(getisLogin);

  return (
    <>
    {isLogin ? (
      <div className={styles.container}>
        <h2>Add new contact</h2>
        <Form></Form>
        <Filter></Filter>
        <h3 className={styles.text}>Contacts</h3>
         <ContactList></ContactList>
      </div>
  ) : (<h2>Please Login</h2>)}
    </>
  );
};