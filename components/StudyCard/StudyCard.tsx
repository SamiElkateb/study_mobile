/** @format */
import { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Answer from './Answer';
import { AntDesign } from '@expo/vector-icons';
import RoundButton from '../UserEvents/IconButton/RoundButton';
import Card from '../UI/Card/Card';
import Swiper from './Swiper';
import StudyCardData from '../../DataStructures/StudyCard';
import useLinkSwipeButtons from '../../hooks/useLinkSwipeButtons';
import useToggle from '../../hooks/useToggle';

interface props {
	studyCard: StudyCardData;
}
const StudyCard: React.FC<props> = (props) => {
	const { studyCard } = props;
	const [showAnswer, setShowAnswer] = useState(false);

	const correctButtonHook = useToggle();
	const falseButtonHook = useToggle();

	const { isActive: isCorrectButtonActive } = correctButtonHook;
	const { isActive: isFalseButtonActive } = falseButtonHook;

	const { question, answerType, answer } = studyCard;

	const showAnswerHandler = () => {
		setShowAnswer(true);
	};

	const correctButtonColor = isCorrectButtonActive ? 'white' : '#81d477';
	const falseButtonColor = isFalseButtonActive ? 'white' : '#CE5B5B';
	//const showAnswerButtonColor = isShowAnswerActive? '#434bae' : 'white'
	const showAnswerButtonColor = '#434bae';

	return (
		<Swiper
			studyCard={studyCard}
			falseButtonHook={falseButtonHook}
			correctButtonHook={correctButtonHook}
		>
			<Card>
				<View style={styles.question_container}>
					<Text style={styles.question}>{question}</Text>
				</View>
				<View style={styles.answer_container}>
					{showAnswer && (
						<Answer answerType={answerType} answer={answer} />
					)}
				</View>

				<View>
					<View style={styles.show_answer_container}>
						<RoundButton
							styling="secondary"
							size="small"
							onClick={showAnswerHandler}
						>
							<AntDesign
								name="question"
								size={30}
								color={showAnswerButtonColor}
							/>
						</RoundButton>
					</View>
					<View style={styles.buttons_container}>
						<RoundButton
							styling="error"
							onClick={showAnswerHandler}
							buttonHook={falseButtonHook}
						>
							<AntDesign
								name="close"
								size={40}
								color={falseButtonColor}
							/>
						</RoundButton>
						<RoundButton
							styling="correct"
							onClick={showAnswerHandler}
							buttonHook={correctButtonHook}
						>
							<AntDesign
								name="check"
								size={40}
								color={correctButtonColor}
							/>
						</RoundButton>
					</View>
				</View>
			</Card>
		</Swiper>
	);
};

export default StudyCard;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'space-between',
	},
	question: {
		fontWeight: 'bold',
		fontSize: 16,
	},
	question_container: {
		paddingHorizontal: 20,
		paddingVertical: 30,
	},
	buttons_container: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		paddingHorizontal: 20,
		paddingVertical: 30,
	},
	show_answer_container: {
		flexDirection: 'row',
		justifyContent: 'flex-end',
		padding: 20,
	},
	answer_container: {
		margin: 10,
		borderRadius: 12,
		overflow: 'hidden',
	},
});
