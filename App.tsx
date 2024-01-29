import React, {useEffect, useState} from 'react';
import WebView from './src/screens/WebviewScreen';
import Splash from './src/screens/Splash';

const App = () => {
  const [showSplash, setShowSplash] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  if (showSplash) {
    return <Splash />;
  }

  return <WebView />;
};

export default App;
