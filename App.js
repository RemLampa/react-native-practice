import React from 'react';

import Contact from './src/Components/Contact';
import ContactForm from './src/Components/Contact/ContactForm';

import { createStackNavigator } from 'react-navigation';

const HomeScreen = ({navigation}) => <Contact navigation={navigation} />;

export default createStackNavigator({
  Home: {
    screen: HomeScreen,
  },
  ContactForm: {
    screen: ContactForm,
  },
},
{
  initialRouteName: 'Home',
  headerMode: 'none',
});
