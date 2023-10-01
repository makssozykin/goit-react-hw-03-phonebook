import React from 'react';
import PropTypes from 'prop-types';
import css from './Contacts.module.css';

export const Contacts = ({ contacts, onDelete }) => {
  return (
    <div>
      <ul className={css['contacts-list']}>
        {contacts.map(contact => (
          <li key={contact.id} className={css['contact-item']}>
            {contact.name + ' : ' + contact.number}
            <button
              className={css['btn-delete']}
              type="button"
              name="delete"
              onClick={() => onDelete(contact.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDelete: PropTypes.func.isRequired,
};
