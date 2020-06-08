import React, { Component } from 'react'
import { Text, View , StyleSheet} from 'react-native'
import { gs, colors } from '../../../styles';

export default class About extends Component {
    render() {
        return (
            <View style={styles.contianer}>
                <Text style={gs.sectionTitle}> About Me </Text>
                <Text style={styles.about}> I am full stack developer with passion, and creativity. I have been professionally trained by Andela We noticed your tunnel is having issues. This may be due to intermittent problems with our tunnel provider. If you have trouble connecting 
                to your app, try to Restart the project, or switch Host to LAN.</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    contianer:{
        margin: 32
    },
    about: {
        fontWeight: '600',
        fontSize: 16,
        marginTop: 8,
        lineHeight: 22
    }
})