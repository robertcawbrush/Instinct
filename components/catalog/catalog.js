import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Catalog(props) {
	return (
		<View style={styles.container}>
			<Text>{props.catalogTitle}</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		color: 'white',
		backgroundColor: 'gray',
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
  },
});

// TODO: ask save image to directory or default