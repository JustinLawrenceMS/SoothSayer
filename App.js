import { useCallback } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image, Text, View } from 'react-native';

import GetSooth from './components/GetSooth';
import ImageViewer from './components/ImageViewer';

const PlaceholderImage = require('./assets/salome.jpg');


export default function App() {

  const [fontsLoaded] = useFonts({
	  caramel: require('./assets/RubikVinyl-Regular.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  };

  return (
    <View style={styles.container}>
      	<View style={styles.imageContainer}>
		<ImageViewer placeholderImageSource={PlaceholderImage} />
	</View>
	<View style={styles.footerContainer}>
		<View style={styles.soothContainer}>
			<GetSooth />
	  	</View>
	</View>
	<StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  footerContainer: {
	flex: 1,
	alignItems: 'center',
	},
  imageContainer: {
    flex: 1,
    paddingTop: 58,
  },
  soothContainer: {
    width: 320,
    height: 250,
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3,
  },
});
