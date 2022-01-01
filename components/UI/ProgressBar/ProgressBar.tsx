/** @format */

import { useRef } from 'react';
import { Animated, StyleSheet, View } from 'react-native';
import Colors from '../../../constants/Colors';

interface props {
	progress?: number;
	color?: string;
}

const ProgressBar: React.FC<props> = (props) => {
	const { progress = 0, color = Colors.correct } = props;

	const animatedRef = useRef(new Animated.Value(0)).current;
	

	
	const width = animatedRef.interpolate({
		inputRange: [0, 100],
		outputRange: ['0%', '100%'],
	});
	Animated.spring(animatedRef, {
		toValue: progress,
		useNativeDriver: false,
	}).start();

	const progressCustomStyle = {
		width,
		backgroundColor: color,
	};

	return (
		<View style={styles.container}>
			<Animated.View
				style={{ ...styles.progressBar, ...progressCustomStyle }}
			></Animated.View>
		</View>
	);
};

export default ProgressBar;

const styles = StyleSheet.create({
	container: {
		zIndex:1000,
		height: 10,
		width: '100%',
		backgroundColor: '#ccc',
		shadowOffset: {
			width: 0,
			height: 3,
		},
		shadowOpacity: 0.15,
		shadowRadius: 3,
	},
	progressBar: {
		height: '100%',
	},
});
