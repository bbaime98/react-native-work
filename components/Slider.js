import React from 'react';
import { StyleSheet, Text, View,ScrollView, Image, ImageBackground, TouchableOpacity  } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { DrawerNavigatorItems} from 'react-navigation-drawer';

export default Slider = props => (
    <ScrollView >
        <View style={styles.name}>
            {/* <Image source={require("../assets/me2.png")} style={styles.profile}/> */}
            <Text >Bien Aime's PortFolio</Text>
            <Text >Full Stack Developer</Text>
        </View>
{/* 
        <View style={{flexDirection: 'row'}}>
            <Text style={styles.developer}>Full Stack Developer</Text>
            <Ionicons name="ios-checkmark-circle-outline" size={32} color= "#000"/>
        </View> */}

        <View style={styles.container}>
            <DrawerNavigatorItems {...props}/>
        </View>
    </ScrollView>
)

const styles= StyleSheet.create({
    constiner: {
        flex: 1
    },
    profile: {
        width: 120,
        height: 150,
        borderRadius: 40,
        borderWidth: 3,
        borderColor: '#fff',
        marginTop: 50
    },
    name: {
        color: "#000",
        fontSize: 20,
        fontWeight: '800',
        marginVertical: 10,
        padding:16

    },
    developer: {
        color: "#000",
        fontSize: 20,
        marginRight: 4,
        marginLeft: 4
    }
})