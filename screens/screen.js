import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity  } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

export default class Screen extends React.Component{
    render(){
  return (
    <View style={{backgroundColor: '#f2f0f0ec'}}>
        {/* <View> */}
            <TouchableOpacity
            style={{alignItems: "flex-end", margin: 30, marginBottom: 0, marginTop: 50,}}
            onPress={this.props.navigation.openDrawer}
            >
                <FontAwesome5 name="bars" size={24} color={this.props.color} />
            </TouchableOpacity>
        {/* </View> */}
    </View>
  );
}
}

