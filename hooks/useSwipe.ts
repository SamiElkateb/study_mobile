/** @format */

import { useState, useRef, useContext } from 'react';
import { Animated, Dimensions, PanResponder } from 'react-native';
import StudyCard from '../DataStructures/StudyCard';
import StudyContext from '../store/StudyContext';
import { toggleButton } from '../types';

type PointerEvent = 'auto' | 'none';
interface props {
	studyCard: StudyCard;
	falseButtonHook: toggleButton;
	correctButtonHook: toggleButton;
}


const useSwipe = (props: props) => {
	const { studyCard, falseButtonHook, correctButtonHook } = props;
	const pan:any = useRef(new Animated.ValueXY()).current;
	const [pointerEvent, setPointerEvent] = useState<PointerEvent>('auto');

	const studyCtx = useContext(StudyContext);
	const onCorrect = studyCtx.cardCorrectHandler;

	const { toggleSwipeHandler: correctBtnToggleHandler } = correctButtonHook;
	const { toggleSwipeHandler: falseBtnToggleHandler } = falseButtonHook;

	const width = Dimensions.get('window').width;

	const panResponder = useRef(
		PanResponder.create({
			onMoveShouldSetPanResponder: () => true,
			onPanResponderGrant: () => {
				pan.setOffset({
					x: pan.x._value, 
					y: pan.y._value,
				});
			},
			onPanResponderMove: (e, gestureState) => {
				if (pan.x._value > 30) {
					correctBtnToggleHandler(true);
					falseBtnToggleHandler(false);
				} else if (pan.x._value < -30) {
					falseBtnToggleHandler(true);
					correctBtnToggleHandler(false);
				}
				Animated.event([null, { dx: pan.x, dy: pan.y }], {
					useNativeDriver: false,
				})(e, gestureState);
			},
			onPanResponderRelease: () => {
				if (pan.x._value < -40 || pan.x._value > 40) {
					const direction = pan.x._value > 0 ? 1 : -1;
					Animated.spring(pan, {
						toValue: {
							x: direction*width*1.5,
							y: pan.y._value * 4,
						},
						useNativeDriver: false,
					}).start(() => {
						onCorrect(studyCard);
					});
					setPointerEvent('none');
					return;
				}

				falseBtnToggleHandler(false);
				correctBtnToggleHandler(false);
				Animated.spring(pan, {
					toValue: { x: 0, y: 0 },
					useNativeDriver: false,
				}).start();
			},
		})
	).current;

	const rotateZ = pan.x.interpolate({
		inputRange: [-width / 2, width / 2],
		outputRange: ['-15deg', '15deg'],
	});
	const translateX = pan.x;
	const translateY = pan.y;

  const transform = [{ translateX }, { translateY }, { rotateZ }];

	return { transform, pointerEvent, panResponder };
};

export default useSwipe;
