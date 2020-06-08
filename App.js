import React from 'react';
import {createAppContainer} from 'react-navigation';
import { createDrawerNavigator} from 'react-navigation-drawer';
import { Feather } from "@expo/vector-icons";
import { Dimensions } from 'react-native';
import { ProfileScreen, WelcomeScreen, ContactScreen} from './screens'
import Slider from './components/Slider';
import Welcome from './components/Welcome';

const DrawerNavigator = createDrawerNavigator({ 
  WelcomeScreen: {
    screen: WelcomeScreen,
    navigationOptions: {
      title: "Home",
      drawerIcon: ({tintColor}) => <Feather name="home" size={16} color={tintColor} />
    }
  },
  ProfileScreen: {
    screen: ProfileScreen,
    navigationOptions: {
      title: "My Profile",
      drawerIcon: ({tintColor}) => <Feather name="user" size={16} color={tintColor} />
    }
  },
  ContactScreen: {
    screen: ContactScreen,
    navigationOptions: {
      title: "Contact Me",
      drawerIcon: ({tintColor}) => <Feather name="phone" size={16} color={tintColor} />
    }
  },

},
  {
    contentComponent: props => <Slider {...props}/> ,

    drawerWidth: Dimensions.get('window').width * 0.75,

    hideStatusBar: true,

    contentOptions: {
      activeBackgroundColor: "#ea3372",
      activeTintColor: "#fff",
      
      
      itemsContainerStyle: {
        marginTop: 150,
        marginHorizintal: 8,
      },
      
      itemStyle: {
        borderRadius: 4
      }
    }
  })

export default createAppContainer(DrawerNavigator);



