import PropTypes from 'prop-types';
import { Component } from 'react';
import { nanoid } from 'nanoid';
import styles from './Form.module.css';

export class Form extends Component {
    static propTypes = {
        addUserData: PropTypes.func.isRequired,
    };

    state = {
        name: '',
        number: '',
    };

    userChange = ({ target: { name, value } }) => {
        this.setState({ [name]: value });
    };

    userSubmit = e => {
        e.preventDefault();
        const id = nanoid();
        const user = { ...this.state, id };
        this.props.addUserData(user);
        this.reset();
    };

    reset = () => {
        this.setState({ name: '', number: '' });
    };
    
    render() {
        return (
        <>
          <form className={styles.form} onSubmit={this.userSubmit}>
            <label className={styles.label}>
              Name
              <input
                className={styles.input}
                type="text"
                name="name"
                value={this.state.name}
                onChange={this.userChange}
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
                value={this.state.number}
                onChange={this.userChange}
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
};