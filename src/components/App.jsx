import { Component } from 'react';
import { Contacts } from './Contacts/Contacts';
import { FormSubmit } from './FormSubmit/FormSubmit';
import { nanoid } from 'nanoid';
import { Filter } from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [
      { id: nanoid(), name: 'Rosie Simpson', number: '459-12-56' },
      { id: nanoid(), name: 'Hermione Kline', number: '443-89-12' },
      { id: nanoid(), name: 'Eden Clements', number: '645-17-79' },
      { id: nanoid(), name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  // зміна значення фільтру

  onChangeFilter = e => {
    this.setState({
      filter: e.target.value,
    });
  };

  // Отримання списку контактів

  getContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  // Додавання контакту в список

  addContact = contact => {
    const isInContacts = this.state.contacts.some(
      ({ name }) => name.toLowerCase() === contact.name.toLowerCase()
    );

    if (isInContacts) {
      alert(`${contact.name} is already in contacts`);
      return;
    }
    this.setState(prevState => ({
      contacts: [{ id: nanoid(), ...contact }, ...prevState.contacts],
    }));
  };
  // Видалення контакту зі списку

  deleteContact = contactId => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(({ id }) => id !== contactId),
      };
    });
  };

  render() {
    const visibleContacts = this.getContacts();
    const { filter } = this.state;
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <h1
          style={{
            marginBottom: '16px',
          }}
        >
          Phonebook
        </h1>
        <FormSubmit addContact={this.addContact} />
        <h2
          style={{
            margin: 0,
          }}
        >
          Contacts
        </h2>
        {this.state.contacts.length > 0 ? (
          // Фільтр по списку шмен контактів
          <Filter value={filter} onChangeFilter={this.onChangeFilter} />
        ) : (
          <p
            style={{
              color: '#0b171c',
              fontSize: '48px',
              fontWeight: 'bold',
              textAlign: 'center',
            }}
          >
            Your phonebook is empty. Add first contact!
          </p>
        )}

        {this.state.contacts.length > 0 && (
          // Список контактів
          <Contacts contacts={visibleContacts} onDelete={this.deleteContact} />
        )}
      </div>
    );
  }
}
