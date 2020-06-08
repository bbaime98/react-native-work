import React from 'react';
import Screen from './screen';
import Welcome from '../components/Welcome';
import Profile from '../components/MyProfile';
import Contact from '../components/contactForm';

export const WelcomeScreen = ({navigation}) => <Welcome navigation={navigation}/>
export const ProfileScreen = ({navigation}) => <Profile name = "Profile" navigation={navigation}/>
export const ContactScreen = ({navigation}) => <Contact name = "Contact" navigation={navigation}/>