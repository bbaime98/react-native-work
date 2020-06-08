import React from 'react';
import { View, StyleSheet } from 'react-native';

const Card = (props) => {
    return(
        <View style={[{...styles.card}]}>
            <View style={styles.cardContent}>
                {props.children}
            </View>
        </View>
    )
}

export default Card;

const styles = StyleSheet.create({
    card: {
        borderRadius: 6,
        backgroundColor: "#f2f0f0ec",
        elevation: 3,
        shadowOffset: { width: 1, height: 1},
        shadowColor: '#333',
        shadowOpacity: 0.3,
        shadowRadius: 2,
        marginHorizontal: 4,
        marginVertical: 6,
    },
    cardContent: {
        // marginHorizontal: 18,
        // marginVertical: 10
    }
})