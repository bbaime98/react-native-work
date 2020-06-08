import React, { useState } from 'react';
import { Text, View, FlatList, TouchableOpacity, Modal, StyleSheet, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { globalStyles } from '../styles/globalStyles';
import { MaterialIcons } from '@expo/vector-icons';
import ContactForm from './contactForm';

const ContactModal = () => {

    const [modalOpen , setModalOpen] = useState(false)

    // const addReview = (review) => {
    //     review.key = Math.random().toString();
    //     setReviews((currentReviews) => {
    //         return [review, ...currentReviews]
    //     })
    //     setModalOpen(false)
    // }
    return(
        <View style={globalStyles.container}>
            <Modal visible={true} animationType='slide'>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.modalContent}>
            <MaterialIcons 
                name='close'
                size={24}
                onPress={ () => setModalOpen(false) }
                style = {{ ...styles.modalToggle, ...styles.modalClose}}
            />
                    <ContactForm />
                </View>
        </TouchableWithoutFeedback>
            </Modal>
        </View>
    )
}

export default ContactModal;

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