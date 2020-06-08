import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView  } from 'react-native';
import Screen from '../screens/screen';
import FlatButton from '../components/button';
import Card from '../components/card';

export default class Welcome extends React.Component{
    render(){
  return (
    <ScrollView style={styles.container}>
          <Screen color = "#000" navigation={this.props.navigation}/>
    <View style={styles.mainboy}>
        <Image source={require("../assets/me2.png")} style={styles.image}/>
    {/* <Card> */}
        <Text style={styles.text}>
        Hi! My name is
         <Text style={{  fontWeight: 'bold', color: "#ea3372"}}>Jean Bien Aime. </Text>
         I'm a Javascript <Text style={{  fontWeight: 'bold', color: "#1382e2"}}>full stack developer</Text>.
          With experience in working with talented teams to develop professional applications that transform and add values to everyone's life.
        </Text>

    {/* </Card> */}
    </View>
    <FlatButton text="view more" onPress={()=>this.props.navigation.navigate('ProfileScreen')}/>
    </ScrollView>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f0f0ec",
  },
  text: {
    color: "#000",
    fontSize: 20,
    padding: 15
  },
  mainboy: {
    // marginBottom: 70,
    // marginTop:10,
    marginLeft: 20,
    marginRight: 20
  },
  image: {
      width: 300,
      height: 310,
      marginLeft: 30,   
    // paddingTop: 50,
    // backgroundColor: "#000"
  },
});
