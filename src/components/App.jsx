import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import Form from './Form/Form';

export const App = () => {
  return (
    <>
      <div className="container">
        <h1 className="mainText">Phonebook</h1>
        <Form />
        <h2 className="mainText">Contacts</h2>
        <Filter />
        <ContactList />
      </div>
    </>
  );
};