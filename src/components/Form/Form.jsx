import { useState } from 'react';
import styles from './Form.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { AddContact } from 'Redux/Contacts/contacts-operations';
import { selectGetItemsContacts } from 'Redux/Contacts/contacts-selectors';

export function Form() {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const contacts = useSelector(selectGetItemsContacts);
    const dispatch = useDispatch();
    const userChange = e => {
        const { name, value } = e.target;
        switch (name) {
          case 'name':
            setName(value);
            break;
          case 'number':
            setNumber(value);
            break;
          default:
            return;
        }
    };

    const userSubmit = e => {
        e.preventDefault();
        const contactFilter = contacts?.some(
          option => option.name.toLowerCase() === name.toLowerCase()
        );
        if (contactFilter) {
          alert(`${name} is already in contacts.`);
          return;
        }
        const user = { name, number };
        dispatch(AddContact(user));
        setName('');
        setNumber('');
      };

      return (
        <>
          <form className={styles.form} onSubmit={userSubmit}>
            <label className={styles.label}>
              Name
              <input
                className={styles.input}
                type="text"
                name="name"
                value={name}
                onChange={userChange}
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
              />
            </label>
            <label className={styles.label}>
              Number
              <input
                className={styles.input}
                type="tel"
                name="number"
                value={number}
                onChange={userChange}
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
              />
            </label>
            <button className={styles.btn} type="submit">
              Add contact
            </button>
          </form>
        </>
      );
};