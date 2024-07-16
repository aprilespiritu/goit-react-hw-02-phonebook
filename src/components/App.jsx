import { Component } from "react";
import { ContactForm } from "./ContactForm/ContactForm";
import { Filter } from "./Filter/Filter";
import { ContactList } from "./ContactList/ContactList";

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Elijah Montefalco', number: '459-12-56' },
      { id: 'id-2', name: 'Klaire Ty', number: '443-89-12' },
      { id: 'id-3', name: 'Jaxon Riego', number: '665-17-79' },
      { id: 'id-4', name: 'Amber Sevilla', number: '783-51-90' },
    ],
    filter: '',
  };

  addContact = newContact => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  setFilter = filterValue => {
    this.setState({
      filter: filterValue,
    });
  };

  filterContact = () => {
    const { contacts, filter } = this.state;
    const filterLowerCase = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterLowerCase)
    );
  };

  render() {
    const { contacts, filter } = this.state;
    
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm addContact={this.addContact} contacts={contacts} />
        
        <h2>Contacts</h2>
        <Filter filter={filter} setFilter={this.setFilter} />
        <ContactList
          filterContact={this.filterContact}
          deleteContact={this.deleteContact}
        />
      </div>
    );
  }
}