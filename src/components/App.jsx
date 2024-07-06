import { Component } from "react";
import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from "./ContactList/ContactList";
import { Filter } from "./Filter/Filter";

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Elijah Montefalco', number: '459-12-56' },
      { id: 'id-2', name: 'Klaire Ty', number: '443-89-12' },
      { id: 'id-3', name: 'Jaxon Riego', number: '665-17-79' },
      { id: 'id-1', name: 'Amber Sevilla', number: '783-51-90' },
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
    return (
      <div>
        <h1>Phonebook</h1>
      
      </div>
    )
  }
}