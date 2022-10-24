import React from 'react';
import {StatusBar} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import AnimatedSplash from 'react-native-animated-splash-screen';
import Home from './screens/Home';
import ErrorBoundary from './components/ErrorBoundry';
import ToastManager from './components/ToastManager';
import useInitializeScanBot from './hooks/useInitializeScanBot';

import colors from './utils/colors';

const App = () => {
  const isLoaded = useInitializeScanBot();
  return (
    <SafeAreaProvider>
      <StatusBar
        translucent
        barStyle="light-content"
        backgroundColor={colors.main}
      />
      <AnimatedSplash
        translucent
        logoWidth={125}
        logoHeight={125}
        backgroundColor={colors.main}
        logoImage={require('./assets/logo.png')}
        isLoaded={isLoaded}>
        <ErrorBoundary>
          <Home />
          <ToastManager />
        </ErrorBoundary>
      </AnimatedSplash>
    </SafeAreaProvider>
  );
};

export default App;
