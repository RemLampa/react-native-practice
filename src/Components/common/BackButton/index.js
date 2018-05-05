import React from 'react';

import { Button, Icon } from 'native-base';

import { withNavigation } from 'react-navigation';

const BackButton = ({navigation}) => (
    <Button transparent onPress={() => navigation.goBack()}>
        <Icon name="arrow-back" />
    </Button>
);

export default withNavigation(BackButton);
