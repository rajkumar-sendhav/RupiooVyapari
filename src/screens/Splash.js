import React from 'react';
import {StyleSheet, Image} from 'react-native';

export default function Splash() {
  return <Image style={styles.logo} source={require('../assets/splash.png')} />;
}

const styles = StyleSheet.create({
  logo: {
    width: '100%',
    height: '100%',
  },
});
