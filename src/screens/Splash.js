import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';

export default function Splash() {
  return (
    <View style={styles.body}>
      <Image style={styles.logo} source={require('../assets/splash.png')} />
      {/* <Text style={styles.text}></Text> */}
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
  },
  logo: {
    width: '100%',
    height: '100%',
  },
  text: {
    fontSize: 40,
    color: '#000',
  },
});
