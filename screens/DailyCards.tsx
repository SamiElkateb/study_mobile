/** @format */

import { useNavigation } from '@react-navigation/native';
import { useContext } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Button from '../components/UserEvents/Button';
import StudyContext from '../store/StudyContext';
interface props {}
const DailyCards: React.FC<props> = (props) => {
	const studyCtx = useContext(StudyContext);
	const { studyDeck, progress } = studyCtx;
	const navigation = useNavigation();

	const onStartHandler = () => {
		navigation.navigate('Study');
	};
	return (
		<View style={styles.container}>
			<Text>{studyDeck.length}</Text>
			<Button onClick={onStartHandler}>Start</Button>
		</View>
	);
};

export default DailyCards;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingVertical: 26,
		paddingHorizontal: 32,
		justifyContent: 'flex-end',
	},
});
