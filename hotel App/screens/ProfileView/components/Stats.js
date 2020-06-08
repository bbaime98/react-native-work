import React, { Component } from 'react'
import { Text, View , StyleSheet} from 'react-native'
import { gs, colors } from '../../../styles';

export default class Stats extends Component {
    render() {
        return (
            <View style={styles.contianer}>
                <View style={styles.statContianer}>
                   <Text style={styles.statNumber}>Javascript</Text>
                   {/* <Text style={styles.stat}> textInComponent </Text> */}
                </View>
                <View style={[styles.statContianer, styles.divider]}>
                   <Text style={styles.statNumber}>Python</Text>
                   {/* <Text style={styles.stat}> textInComponent </Text> */}
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    contianer:{
        ...gs.sectionContainer,
        ...gs.rowBetween,
        marginHorizontal: 16,
        marginTop: -48,
        borderRadius: 16,
        // width: '50%'
    },
    statContianer:{
        ...gs.center,
        flex: 1
    },
    statNumber: {
        fontSize: 20,
        fontWeight: '600',
        color: colors.text
    },
    stat: {
        fontSize: 11,
        fontWeight: '600',
        letterSpacing: 1,
        textTransform: 'uppercase',
        color: colors.lighHl,
        marginTop: 6
    },
    divider: {
        borderLeftWidth: 1,
        // borderRightWidth: 1,
        borderColor: colors.darkHl
    }
})
