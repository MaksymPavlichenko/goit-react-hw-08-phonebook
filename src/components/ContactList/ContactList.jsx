import { ContactListItem } from '../ContactListItem/ContactListItem';
import styles from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getContacts } from 'Redux/Contacts/contacts-operations';
import { deleteContact } from 'Redux/Contacts/contacts-operations';
import { selectGetItemsContacts, selectGetFilterValue } from 'Redux/Contacts/contacts-selectors';

export const ContactList = () => {
    const contacts = useSelector(selectGetItemsContacts);
    const dispatch = useDispatch();
    const filter = useSelector(selectGetFilterValue);

    useEffect(() => {
        dispatch(getContacts());
    }, [dispatch]);

    const handlerDelete = id => {
        dispatch(deleteContact(id));
    };

    const getContactList = () => {
        return contacts.filter(user =>
          user.name.toLowerCase().includes(filter.toLowerCase())
        );
    };

    return (
        <ul className={styles.list}>
          {getContactList()?.map(({ id, name, number }) => (
            <ContactListItem
              key={id}
              name={name}
              number={number}
              onDelete={handlerDelete}
              id={id}
            />
          ))}
        </ul>
      );
};
