import { StyleSheet } from 'react-native';
import React from 'react';

export const globalStyles = StyleSheet.create({
    container: {
        paddingLeft: 20,
        paddingRight: 20,
        marginTop: 10
    //     flex: 1,
    //     backgroundColor: "#fff"
    },
    titleText: {
        fontFamily: 'nunito-bold',
        fontSize: 24,
        color: '#444'
    },
    paragraph: {
        marginVertical: 8,
        lineHeight: 20
    },
    input: {
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 6,
        padding: 10,
        fontSize: 18,
    },
    errorText: {
        color: 'crimson',
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 2,
        marginTop: 6
    }
})
