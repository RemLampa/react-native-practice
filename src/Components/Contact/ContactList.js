import React from 'react';

import { List } from 'native-base';

import { Alert } from 'react-native';

import ContactItem from './ContactItem';

export default ContactList = ({dataArray, index, onContactChange, navigation: {navigate}}) => (
    <List>
        {dataArray.map((contact, index) => (
            <ContactItem
                onPress={() => navigate('ContactForm', { contact, index, onContactChange })}
                contact={contact}
                key={contact.mobile} 
            />
        ))}
    </List>
);
