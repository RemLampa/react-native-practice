import React, { Component } from 'react';
import { Container, Header, Content, Item, Input, Icon, Label, Left, Body, Title, Right, Button } from 'native-base';

import BackButton from '../common/BackButton';

export default class ContactForm extends Component {
  state = {
    contact: this.props.navigation.state.params.contact,
    index: this.props.navigation.state.params.index,
  };
  
  handleContactChange = (key, value) => {
    const { index, contact } = this.state;

    contact[key] = value;

    this.setState({ contact }, () => {
      const contact = this.state.contact;

      this.props.navigation.state.params.onContactChange(index, key, contact[key])
    });
  }
    
  render() {
    const {contact: { name, email, mobile, description }, index }= this.state;

    return (
    <Container>
      <Header>
        <Left>
          <BackButton />
        </Left>
        <Body>
          <Title>{name}</Title>
        </Body>
        <Right />
      </Header>
      <Content>
        <Item fixedLabel>
          <Label>Name</Label>
          <Input onChangeText={value => this.handleContactChange('name', value)} value={name}/>
        </Item>
        <Item fixedLabel>
          <Label>Email</Label>
          <Input onChangeText={value => this.handleContactChange('email', value)} value={email} />
        </Item>
        <Item fixedLabel>
          <Label>Mobile</Label>
          <Input onChangeText={value => this.handleContactChange('mobile', value)} value={mobile} />
        </Item>
        <Item>
          <Label>Description</Label>
          <Input onChangeText={value => this.handleContactChange('description', value)} value={description} />
        </Item>
      </Content>
    </Container>
  )}
};
