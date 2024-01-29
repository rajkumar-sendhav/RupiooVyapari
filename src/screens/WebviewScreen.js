import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import WebView from 'react-native-webview';
import Splash from './Splash';

const WebviewScreen = () => {
  const [loading, setLoading] = useState(true);

  const hideSplashScreen = () => {
    setLoading(false);
  };

  return (
    <View style={styles.container}>
      {loading && <Splash />}
      <WebView
        source={{uri: 'http://64.227.162.41/'}}
        style={{flex: 1}}
        onLoadEnd={hideSplashScreen}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default WebviewScreen;
