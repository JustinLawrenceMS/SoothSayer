import { StyleSheet, View, Pressable, Text } from 'react-native';

export default function Button({ label }) {

	return (
		<View style={ styles.buttonContainer }>
			<Pressable style={ styles.button } onPress={ () => alert('this still works') }>
				<Text style={ styles.buttonLabel }>{label}</Text>
			</Pressable>
		</View>
	);

}

const styles = StyleSheet.create({
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
  buttonIcon: {
    paddingRight: 8,
  },
  buttonLabel: {
    color: 'red',
    fontSize: 16,
  },
});
