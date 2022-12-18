import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image, Pressable, Text, View } from 'react-native';

import Button from './components/Button';
import GetSooth from './components/GetSooth';
import ImageViewer from './components/ImageViewer';

const PlaceholderImage = require('./assets/salome.jpg');

export default function App() {

  return (
    <View style={styles.container}>
      	<View style={styles.imageContainer}>
		<ImageViewer placeholderImageSource={PlaceholderImage} />
	</View>
	<View style={styles.footerContainer}>
		<View>
			<GetSooth />
			<Button label="A new sooth please." />
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
	flex: 1 / 2,
	alignItems: 'center',
	},
  imageContainer: {
    flex: 1,
    paddingTop: 58,
  },
  buttonContainer: {
    width: 320,
    height: 68,
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3,
	borderWidth: 4,
	borderColor: 'red',
	borderRadius: 18,
  },
  button: {
    borderRadius: 10,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
	backgroundColor: 'white',
  },
  buttonLabel: {
    color: 'red',
    fontSize: 16,
  },


});
