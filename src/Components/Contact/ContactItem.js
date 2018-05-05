import React, { Component } from 'react';
import { ListItem, Text } from 'native-base';

export default ContactItem = ({contact, onPress}) => (
  <ListItem button onPress={onPress}>
      <Text>{contact.name}</Text>
  </ListItem>
);
