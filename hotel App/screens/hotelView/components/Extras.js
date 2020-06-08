import React from 'react';
import { StyleSheet,Text, View, TouchableOpacity} from 'react-native';
import { gs, colors } from '../../../styles';
import { Feather, Ionicons, FontAwesome5, Entypo } from '@expo/vector-icons';

export default function Extras() {
    const extras = [
        'Prepare for Jobs',
        'World-Class Quality Videos',
        'Learn both Theory & Practice',
        'Master a Top Coder Mindset',
        'Boost Your Career Options '
    ]
  return (
    <View style={styles.container}>

        <Text style={gs.sectionTitle}>Services</Text>

        <View style={styles.list}>
            {extras.map((extra, index) => {
                return (
                    <Text style={styles.listItem} key={index} >
                        &mdash; {extra}
                    </Text>
            )})}
        </View>
        <View  style={{marginTop: 32, marginBottom: -40}}>
            <TouchableOpacity style={styles.contactBotton}>
             <Text style={{fontWeight: '700', color: '#fff'}}> Contact Me </Text>
            </TouchableOpacity>
        </View>
        
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
      ...gs.sectionContainer,
      marginTop: 8,
      marginBottom: 64
  },
  list:{
      marginTop: 16,
      marginLeft: 8,
  },
  listItem: {
      color: colors.textSec,
      marginVertical: 8
  },
  contactBotton: {
    paddingVertical: 16,
    ...gs.button
  } 
});
