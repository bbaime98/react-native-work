import { createStackNavigator } from 'react-navigation-stack';
import About from '../screens/about';
import React from 'react';
import Header from '../shared/header';

const screens = {
    About: {
        screen: About,
        navigationOptions: ({navigation}) => {
            return {
                headerTitle: () =>  <Header navigation= { navigation } title = 'About Game Zone' />
              }
        }
    }
}

const AboutStack = createStackNavigator(screens, {
    defaultNavigationOptions:{
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
          },
        headerStyle: {
            backgroundColor: '#f4511e',
            height: 80,
        }
    }
});

export default AboutStack