/** @format */

import { View, StyleSheet, Text } from 'react-native';

import StudyCard from '../components/StudyCard/StudyCard';
import { useContext } from 'react';
import StudyContext, { StudyContextProvider } from '../store/StudyContext';
import ProgressBar from '../components/UI/ProgressBar/ProgressBar';

const CardStack: React.FC = (props) => {
	const studyCtx = useContext(StudyContext);
	const { studyDeck, progress } = studyCtx;

	return (
		<View style={styles.container}>
			<ProgressBar progress={progress} />
			{studyDeck.map((studyCard, index) => (
				<StudyCard
					key={studyCard.id}
					studyCard={studyCard}
					index={index}
				/>
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
