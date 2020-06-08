import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableWithoutFeedback, Keyboard, Modal  } from 'react-native';
import Screen from '../screens/screen';
import FlatButton from './button';
import ContactForm from './contactForm';
import Card from './card';
import {MaterialIcons} from '@expo/vector-icons'

export default class Welcome extends React.Component{
state ={
  modalOpen: false
}

    render(){
  return (
    <View>
    <Modal visible={this.state.modalOpen} animationType='slide'>
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <View style={styles.modalContent}>
    <MaterialIcons 
    name='close'
    size={24}
    onPress={ () => this.setState({ modalOpen: false})}
    style = {{ ...styles.modalToggle, ...styles.modalClose}}
    />
    <ContactForm />
    </View>
    </TouchableWithoutFeedback>
  </Modal>

  <View style={{ backgroundColor: "#f2f0f0ec"}}>
    <ScrollView  vertical={true} >
          <Screen navigation={this.props.navigation}/>
    <View style={styles.mainboy}>

       <Text style={[{...styles.text}, {color: "#ea3372", fontWeight: "bold"}]}>Services</Text>
       {/* <Card> */}
       <Text style={styles.text}>Web App developement</Text>
       <Text style={styles.text}>Mobile App developement</Text>
       <Text style={styles.text}>Software Testing</Text>
       <Text style={styles.text}>SQL databases</Text>
       {/* </Card> */}
    </View>

    <Text style={[{...styles.text}, {color: "#ea3372", fontWeight: "bold", marginLeft: 20}]}>Technologies</Text>
    <View style={styles.technologies}>
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={true}>
     <Card>
      <View style={[{...styles.imageContainer}]} >
        <Image source={require("../assets/technologies/nodeOg.png")} style={styles.image} resizeMode="contain"/>
      </View>
      </Card>

      <Card>
      <View style={styles.imageContainer} >
        <Image source={require("../assets/technologies/Rlogo.png")} style={styles.image} resizeMode="contain"/>
       </View>
       </Card>

      <Card>
       <View style={styles.imageContainer} >  
        <Image source={require("../assets/technologies/reduxOG.png")} style={styles.image} resizeMode="contain"/>
       </View>
       </Card>

      <Card>
      <View style={styles.imageContainer} > 
        <Image source={require("../assets/technologies/Heroku.png")} style={styles.image} resizeMode="contain"/>
       </View>
       </Card>

      <Card>
      <View style={styles.imageContainer} > 
        <Image source={require("../assets/technologies/git.png")} style={styles.image} resizeMode="contain"/>
      </View>
       </Card>
       
    </ScrollView>
    </View>
      <Card>
        <Text style={[{...styles.text},{marginLeft: 20, marginRight: 20, marginBottom: 20}]}>
       <Text>You've got a project? </Text> 
        <Text style={{fontWeight: 'bold'}}>
          Let's get in touch!    
          </Text>
          <Text>I am creative and passionated to delivering quality work.</Text> 
        </Text>

    <FlatButton text="Contact me" onPress={()=> this.setState({modalOpen: true})}/>
    </Card>
    </ScrollView>
  </View>
  </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#fff",
  },
  text: {
    color: "#161924",
    fontSize: 20,
    padding: 10
  },
  mainboy: {
    marginLeft: 20,
    marginRight: 20,
  },
  image: {
    flex: 1,
    width: undefined,
    height: undefined,
  },
  imageContainer: {
    flexDirection: "row",
    width: 120,
    height: 120,
    borderRadius: 12,
    overflow: "hidden",
    marginHorizontal: 10
    // backgroundColor: "#000",
  },
  technologies: {
    marginTop: 20, 
  },
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
    backgroundColor: "#ea3372"

},
modalContent: {
    flex: 1
}
});
