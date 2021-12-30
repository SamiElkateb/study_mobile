/** @format */

import { View, StyleSheet } from 'react-native';

import StudyCard from '../components/StudyCard/StudyCard';
import { useContext } from 'react';
import StudyContext from '../store/StudyContext';

const CardStack: React.FC = (props) => {
	const studyCtx = useContext(StudyContext);
	const studyDeck = studyCtx.studyDeck;
	return (
		<View style={styles.container}>
			{studyDeck.map((studyCard, index) => (
				<StudyCard key={studyCard.id} studyCard={studyCard} index={index} />
			))}
		</View>
	);
};

export default CardStack;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#3b45b1',
	},
});
