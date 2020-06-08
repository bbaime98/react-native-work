import React from 'react'
import { Text, View , StyleSheet, Image} from 'react-native'
import { gs, colors } from '../../../styles';

const photos = [
    require('../../../assets/bare1.jpg'),
    require('../../../assets/bare2.jpeg'),
    require('../../../assets/bare2.jpg'),
]
export default function Photos () {
        return (
            <View style={[gs.sectionContainer, {marginTop: 8}]}>
                <Text style={gs.sectionTitle}>Technologies</Text>
                
                <View style={styles.photoContainer}>
                    {
                        photos.map((photo, index) => {
                            return <Image source={photo} key={index} style={[styles.photo, 
                                {marginRight: (index + 1) %3 === 0 ? 0 : 12 }]} />
                        })
                    }
                </View>
            </View>
        )
 }

const styles = StyleSheet.create({
    photoContainer:{
        flexDirection: "row",
        flexWrap: "wrap",
        marginTop: 16
    },
    photo: {
      width: 108,
      height: 108,
      borderRadius: 8,
      marginBottom: 12
    }
})