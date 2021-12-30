/** @format */
import { View, StyleSheet, Text } from 'react-native';
import Terminal from '../UI/Code/Terminal/Terminal';
import Javascript from '../UI/Code/Javascript/Javascript';
import Yaml from '../UI/Code/Yaml/Yaml';
import { answerType } from '../../types';

interface props {
	answer: string;
	answerType: answerType;
}

const Answer: React.FC<props> = (props) => {
	const { answer, answerType } = props;
	return (
		<>
			{answerType === 'text' && <Text>{answer}</Text>}
			{answerType === 'terminal' && <Terminal code={answer} />}
			{answerType === 'javascript' && <Javascript code={answer} />}
			{answerType === 'yaml' && <Yaml code={answer} />}
		</>
	);
};

export default Answer;
