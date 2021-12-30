/** @format */

import { View, StyleSheet, ScrollView } from 'react-native';
import { StudyContextProvider } from '../store/StudyContext';
import CardStack from './CardStack';

interface props {}
const Lessons: React.FC<props> = (props) => {
	return (
		<StudyContextProvider>
			<View style={styles.container}>
				<CardStack />
			</View>
		</StudyContextProvider>
	);
};

export default Lessons;

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
