import { ContactListItem } from '../ContactListItem/ContactListItem';
import styles from './ContactList.module.css';
import { deleteContact } from 'Redux/Contacts/contacts';
import { useDispatch, useSelector } from 'react-redux';

export const ContactList = () => {
    const contacts = useSelector(state => state.contacts.contacts);
    const dispatch = useDispatch();
    const filter = useSelector(state => state.contacts.filter);
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
