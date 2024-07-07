import React, { Component } from 'react';
import { ContactListItem } from 'components/ContactListItem/ContactListItem';
import PropTypes from 'prop-types';
import css from './ContactList.module.css';

export class ContactList extends Component {
    render() {
        const { filterContact, deleteContact } = this.props;
        const filteredContacts = filterContact();

        return (
            <ul className={css.ulBox}>
                {filteredContacts.map(filteredContact => (
                    <ContactListItem
                        key={filteredContact.id}
                        filteredContact={filteredContact}
                        deleteContact={deleteContact}
                    />
                ))}
            </ul>
        );
    }
}

ContactList.propTypes = {
    filterContact: PropTypes.func.isRequired,
    deleteContact: PropTypes.func.isRequired,
};