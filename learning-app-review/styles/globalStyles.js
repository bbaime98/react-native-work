import { StyleSheet } from 'react-native';
import React from 'react';

export const globalStyles = StyleSheet.create({
    container: {
        padding: 20,
        flex: 1
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
        marginBottom: 10,
        marginTop: 6
    }
})

export const images = {
    ratings: {
        '1': require('../assets/rating-1.png'),
        '2': require('../assets/rating-2.png'),
        '3': require('../assets/rating-3.png'),
        '4': require('../assets/rating-4.png'),
        '5': require('../assets/rating-5.png'),
    }
}