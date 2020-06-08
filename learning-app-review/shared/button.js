import React from 'react';
import { View,StyleSheet, Text, TouchableOpacity} from 'react-native';

const FlatButton = ({text, onPress}) => {
    return(
        <TouchableOpacity onPress={onPress}>
            <View style={styles.button}>
                <Text style={styles.buttonText}>{text}</Text>
            </View>
        </TouchableOpacity>
    )

}

export default FlatButton;

const styles = StyleSheet.create({
    buttonText: {
        textAlign: 'center',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 16,
        color: 'white'
    },
    button : {
        borderRadius: 8,
        paddingHorizontal: 10,
        paddingVertical: 14,
        backgroundColor: '#f01d71',
    }
})