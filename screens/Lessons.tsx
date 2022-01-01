/** @format */

import { View, StyleSheet } from 'react-native';

interface props {}
const Lessons: React.FC<props> = (props) => {
	return <View style={styles.container}></View>;
};

export default Lessons;

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
