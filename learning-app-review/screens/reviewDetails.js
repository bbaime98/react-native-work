import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { globalStyles, images } from '../styles/globalStyles';
import Card from '../shared/card';

const ReviewDetails = ({navigation}) => { 

    const rating = navigation.getParam('rating')
    // const icons = <MaterialCommunityIcons name='heart' size={32}/>
    // console.log(imgaes.ratings[rating])
    return(
        <View style={globalStyles.container}>
            <Card>
            <Text style={globalStyles.titleText}>{navigation.getParam('title')}</Text>
            <Text style={globalStyles.titleText}>{navigation.getParam('body')}</Text>
            <View style={styles.rating}>
                <Text>GameZone rating: </Text>
                <Image source={images.ratings[rating]} />
            </View>
            </Card>
        </View>
    )
}

export default ReviewDetails;

const styles = StyleSheet.create({
    rating: {
        flexDirection: "row",
        justifyContent: 'center',
        paddingTop: 16,
        marginTop: 16,
        borderTopWidth: 1,
        borderTopColor: '#eee',
    }
})