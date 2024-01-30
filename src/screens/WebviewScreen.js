import React, {useEffect, useState} from 'react';
import {View, StyleSheet} from 'react-native';
import WebView from 'react-native-webview';
import AnimatedSplash from 'react-native-animated-splash-screen';

const WebviewScreen = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const splashTimer = setTimeout(() => {
      setIsLoaded(true);
    }, 3000);

    return () => clearTimeout(splashTimer);
  }, []);

  return (
    <AnimatedSplash
      translucent={true}
      isLoaded={isLoaded}
      logoImage={require('../assets/rupio.png')}
      backgroundColor={'#ffffff'}
      logoHeight={150}
      logoWidth={150}>
      <View style={styles.container}>
        <WebView
          source={{uri: 'https://admin.rupioo.com/'}}
          style={{flex: 1}}
        />
      </View>
    </AnimatedSplash>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default WebviewScreen;
