import React, { Component } from 'react'
import { Text, View, ScrollView, StyleSheet, StatusBar, ActivityIndicator } from 'react-native'
import {colors, gs} from '../../styles';
import Header from './components/Header';
import Stats from './components/Stats';
import Photos from './components/Photos';
// import About from './components/About';
import About from '../hotelView/components/About';

export default class index extends Component {
    
    state ={
        user: {},
        isLoading: true
    }

    async componentDidMount(){
        try{
            let res = await fetch('https://randomuser.me/api/?inc=name,picture,location&noinfo');
            let users = await res.json();

            this.setState({user: users.results[0]}, () => {
                this.setState({isLoading: false})
            })
        } catch(error){
            console.log(error)
        }
    }
    render() {
        if(this.state.isLoading){
            return(
                <View style={[gs.center, styles.container]}>
                    <StatusBar barStyle='light-content' />
                    <ActivityIndicator size='large' />
                </View>
            )
        }
        return (
            <ScrollView style={styles.container}>
                <Header user={this.state.user}/>
                {/* <Stats /> */}
                <About />
                <Photos />

            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        // flex:1,
      backgroundColor: colors.darkBg
    },
  });