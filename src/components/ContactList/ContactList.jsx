import React from 'react';
import PropTypes from 'prop-types';
import { List, Item, Name, Tel, Button } from './ContactList.styled';

export const ContactList = ({ onDeleteContact, filtred }) => {
  return (
    <List>
      {filtred.map(({ name, number, id }) => {
        return (
          <Item key={id}>
            <Name>{name}:</Name>
            <Tel>{number}</Tel>
            <Button type="button" onClick={() => onDeleteContact(id)}>
              Delete
            </Button>
          </Item>
        );
      })}
    </List>
  );
};

ContactList.propTypes = {
  onDeleteContact: PropTypes.func.isRequired,
  filtred: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
};
