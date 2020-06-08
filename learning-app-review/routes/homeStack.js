import { createStackNavigator } from 'react-navigation-stack';
// import { createAppContainer } from 'react-navigation';
import Home from '../screens/home';
import ReviewDetails from '../screens/reviewDetails';
import React from 'react';
import Header from '../shared/header';

const screens = {
    Home : {
        screen: Home,
        // navigationOptions: {
        //     title: 'home' ,
        // }
        navigationOptions: ({navigation}) => {
            return {
              headerTitle: () =>  <Header navigation= { navigation } title = 'Game Zone' />
            }
        }
    },
    ReviewDetails: {
        screen: ReviewDetails,
        navigationOptions: {
            title: 'Review Details',
        }
    }
}

const HomeStack = createStackNavigator(screens, {
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
 
// export default createAppContainer(HomeStack)
export default HomeStack;
