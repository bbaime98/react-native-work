import React, { useState } from 'react';
import { Text, View, FlatList, TouchableOpacity, Modal, StyleSheet, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { globalStyles } from '../styles/globalStyles';
import Card from '../shared/card';
import { MaterialIcons } from '@expo/vector-icons';
import ReviewForm from './reviewForm';

const Home = ({navigation}) => {
    const [reviews, setReviews] = useState([
        { title: 'Zelda, the thing', body:'This is the body', rating: 1, key: '1'},
        { title: 'Good, Art show', body:'This is the body', rating: 2, key: '2'},
        { title: 'App devloper ', body:'This is the body', rating: 2, key: '3'},
        { title: 'More stack and true', body:'This is the body', rating: 4, key: '4'}
    ])

    const [modalOpen , setModalOpen] = useState(false)

    const addReview = (review) => {
        review.key = Math.random().toString();
        setReviews((currentReviews) => {
            return [review, ...currentReviews]
        })
        setModalOpen(false)
    }
    return(
        <View style={globalStyles.container}>
            <Modal visible={modalOpen} animationType='slide'>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.modalContent}>
            <MaterialIcons 
                name='close'
                size={24}
                onPress={ () => setModalOpen(false) }
                style = {{ ...styles.modalToggle, ...styles.modalClose}}
            />
                    <ReviewForm addReview={addReview}/>
                </View>
        </TouchableWithoutFeedback>
            </Modal>
        <MaterialIcons 
        name='add'
        size={24}
        onPress={ () => setModalOpen(true) }
        style={styles.modalToggle}
        />

        <FlatList 
        data={reviews}
        renderItem ={({item }) =>(
            <TouchableOpacity onPress={()=>navigation.navigate('ReviewDetails', item)}>
                <Card>
                <Text style={globalStyles.titleText }>{item.title}</Text>
                </Card>
            </TouchableOpacity>
        )
    }
        />
        </View>
    )
}

export default Home;

const styles = StyleSheet.create({
    modalToggle: {
        marginBottom: 10,
        borderWidth: 1,
        borderRadius: 10,
        alignSelf: 'center',
        padding: 10,
        borderColor: '#f2f2f2'
    },
    modalClose: {
        marginBottom: 0,
        marginTop: 20,
    },
    modalContent: {
        flex: 1
    }
})