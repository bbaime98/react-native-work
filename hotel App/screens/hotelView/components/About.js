import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { gs, colors} from '../../../styles';

const hotel ={
    name: 'AimeHotel Sp',
    price: "Kigali",
    location: 'Rwanda',
    about: "In most cases we will require actually validating the object: process it to adhere to your schema expectations. In our example, we are expecting a timestamp value, and we have a default value if it is missing."
}
export default function About() {
  return (
    <View style={styles.container}>

       {/* <Text style={gs.title}>{hotel.name}</Text> */}

        <Text style={styles.info}>{hotel.price} &#8226; {hotel.location}</Text>


      <Text style={gs.sectionTitle}>About Me</Text>

        
      <Text style={styles.about}>{hotel.about}</Text>

        {/* <View style={gs.divider} /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
   ...gs.sectionContainer,
   backgroundColor: colors.darkBg
  },
  info: {
      color: colors.textSec,
      fontWeight: "600",
      marginTop: 4
  },
  about: {
    fontSize: 13,
    fontWeight: '600',
    color: colors.textSec,
    marginTop: 6,
    lineHeight: 20
  }
});
