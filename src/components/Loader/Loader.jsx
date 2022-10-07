import { InfinitySpin } from "react-loader-spinner";
import { useSelector } from 'react-redux';
import { selectAuthIsLoading, selectItemsIsLoading } from 'Redux/Contacts/contacts-selectors';
import styles from './Loader.module.css';

export function Loader() {
  const authIsLoading = useSelector(selectAuthIsLoading);
  const itemsIsLoading = useSelector(selectItemsIsLoading);

  if (authIsLoading || itemsIsLoading) {
    return (
      <div className={styles.loader}>
        <InfinitySpin width="200" color="#4fa94d" />
      </div>
    );
  }
}