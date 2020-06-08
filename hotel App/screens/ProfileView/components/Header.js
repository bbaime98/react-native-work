import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { Zocial, Ionicons, Entypo } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { gs, colors } from '../../../styles';

export default class Header extends Component {
    render() {
      const user = this.props.user
      const name = `${user.name.first} ${user.name.last} `
        return (
            <View colors={[colors.blue, colors.yellow ]}>
            <View style={{marginHorizontal: 32, paddingVertical: 64 }}>

                <View style={gs.rowBetween}> 

                    <Ionicons name="md-arrow-back" color={colors.text} size={32} />
                    <Entypo name="dots-three-vertical" color={colors.text} size={24} />

                </View>

                <View style={styles.imageContainer}>

                    <View>

                        {/* <View style={styles.check}>

                            <Ionicons name="md-checkmark"  size={20} color={colors.pink}/>

                        </View> */}

                        <Image 
                        source={require('../../../assets/me2.png')} 
                        style={{height: 300, width: 250, borderRadius: 30}}
                        />

                    </View>
                </View>

                <View style={[gs.center, {marginVertical: 12}]}>
                     <Text style={gs.title}>Bien Aime</Text>
                     <Text style={[gs.subTitle, {marginTop: 8}]}>Full Stack developer</Text>
                     {/* <Ionicons name="md-checkmark"  size={20} color={colors.pink}/> */}

                     <TouchableOpacity style={styles.follow}>
                         <Zocial name='email' size={20} color="rgba(255, 255, 255, 0.6)"/>
                         <Text style={styles.followText}>Contact Me</Text>
                     </TouchableOpacity>
                </View>
            </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    imageContainer: {
      ...gs.center,
      marginTop: 16,
      shadowColor: colors.darkBg,
      shadowOffset: {height: 3, width: 1},
      shadowOpacity: 0.5
    },
    check: {
        ...gs.center,
        backgroundColor: colors.text,
        borderRadius: 100,
        width: 32,
        height: 32,
        shadowOpacity: 0.3,
        shadowColor: colors.darkBg,
        shadowOffset: {height: 3, width: 1},
        position: 'absolute',
        zIndex: 1,
        right: -16,
        bottom: 16
    },
    follow: {
        ...gs.button,
        ...gs.rowCenter,
        paddingVertical: 8,
        paddingHorizontal: 24,
        marginTop: 16,
        borderColor: 'rgba(255, 255, 255, 0.6)',
        borderWidth: 2
    },
    followText: {
        fontSize: 16,
        color: colors.text,
        marginLeft: 4,
        fontWeight: '600'
    }
  });
