import { useState } from 'react';
import { useEffect} from 'react';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import Form from './Form/Form';

export const App = () => {
  const [filter, setFilter] = useState('');
  const [contacts, setContacts] = useState(() => {
    return (
      JSON.parse(localStorage.getItem('contacts')) ?? [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      ]
    )
  });

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addUserData = user => {
    if (
      contacts.some(
        option => option.name.toLowerCase() === user.name.toLowerCase()
      )
    ) {
      alert(`${user.name} is already in contacts.`);
      return;
    } else if (
      contacts.some(option => option.number === user.number)
    ) {
      alert(`${user.number} is already in contacts.`);
      return;
    }
    setContacts
    (prevState => [...prevState, user]);
  };


  const getContactList = () => {
    return contacts.filter(user =>
      user.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const deleteContact = contactId => {
      setContacts (prevState => prevState.filter(contact => contact.id !== contactId),
    );
  };

  const userFilter = e => {
    const { value } = e.target;
    setFilter(value)
  };

  return (
    <>
      <div className="container">
        <h1 className="mainText">Phonebook</h1>
        <Form addUserData={addUserData} />
        <h2 className="mainText">Contacts</h2>
        <Filter userFilter={userFilter} />
        <ContactList
          contactList={getContactList()}
          onDelete={deleteContact}
        />
      </div>
    </>
  );
};