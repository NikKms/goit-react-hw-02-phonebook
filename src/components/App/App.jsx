import React, { Component } from 'react';
import shortid from 'shortid';
import { Phonebook } from './App.styled';

import { ContactForm } from 'components/ContactForm';
import { ContactList } from 'components/ContactList';
import { Filter } from 'components/Filter';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  containsContact = addName => {
    return this.state.contacts.find(({ name }) => name === addName);
  };

  addContact = (name, number) => {
    const existingContact = this.containsContact(name);
    const contact = { id: shortid.generate(), name, number };

    existingContact
      ? alert(`${name} is already in contacts`)
      : this.setState(prevState => ({
          contacts: [contact, ...prevState.contacts],
        }));
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  changeFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;

    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const visibleContacts = this.getVisibleContacts();

    return (
      <Phonebook>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />

        <h2>Contacts</h2>
        <Filter onChangeFilter={this.changeFilter} value={this.state.filter} />
        <ContactList
          filtred={visibleContacts}
          contacts={this.state.contacts}
          onDeleteContact={this.deleteContact}
        />
      </Phonebook>
    );
  }
}
