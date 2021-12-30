/** @format */

import { View, StyleSheet } from 'react-native';
import Button from '../components/UserEvents/Button/Button';
import { StudyContextProvider } from '../store/StudyContext';
interface props {}
const DailyCard: React.FC<props> = (props) => {
	return (
		<StudyContextProvider>
			<View style={styles.container}>
				<Button>Commencer</Button>
			</View>
		</StudyContextProvider>
	);
};

export default DailyCard;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'space-around',
	},
});
