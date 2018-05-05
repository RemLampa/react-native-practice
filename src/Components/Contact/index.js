import React, { Component } from 'react';
import { Alert } from 'react-native';
import { Container, Header, Content, List, ListItem, Title, Text, CardItem, Button } from 'native-base';

import ContactItem from './ContactItem';
import ContactList from './ContactList'; 

export default class Contact extends Component {
  state = {
    data: [
      {
        name: 'John Cena',
        email: 'johncena@gmail.com',
        mobile: '143094802934820948',
        description: 'You can\'t see me!',
      },
      {
        name: 'Brock Lesnar',
        email: 'brocklesnar@gmail.com',
        mobile: '23423423424',
        description: 'I see you!',
      }
    ]
  };
  
  handlePress = name => Alert.alert(name);

  handleContactChange = (id, key, value) => {
    const data = this.state.data;

    data[id][key] = value;

    this.setState({data});
  }

  render() {
    return (
      <Container>
        <Header><Text>Contact List</Text></Header>
        <Content>
          <ContactList onContactChange={this.handleContactChange}
            dataArray={this.state.data}
            navigation={this.props.navigation}
          />
        </Content>
      </Container>
    );
}
}
