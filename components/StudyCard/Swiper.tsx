/** @format */

import React from 'react';
import { Animated, View, StyleSheet } from 'react-native';
import StudyCard from '../../DataStructures/StudyCard';
import useSwipe from '../../hooks/useSwipe';
import { toggleButton } from '../../types';

interface props {
	studyCard: StudyCard;
	falseButtonHook: toggleButton;
	correctButtonHook: toggleButton;
}

const Swiper: React.FC<props> = (props) => {
	const { children, studyCard, falseButtonHook, correctButtonHook } = props;
	const { rotateZ, pointerEvent, translateX, translateY, panResponder } =
		useSwipe({ studyCard, falseButtonHook, correctButtonHook });

	const transform = [{ translateX }, { translateY }, { rotateZ }];

	const animatedStyle = [
		{
			transform,
		},
		styles.container,
		StyleSheet.absoluteFill,
	];
	return (
		<View style={StyleSheet.absoluteFill} pointerEvents={pointerEvent}>
			<Animated.View style={animatedStyle} {...panResponder.panHandlers}>
				{children}
			</Animated.View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		paddingVertical: 28,
		paddingHorizontal: 16,
	},
});

export default Swiper;
