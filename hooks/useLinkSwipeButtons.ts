/** @format */

import { useState } from 'react';

const useLinkSwipeButtons = () => {
	const [isCorrectButtonActive, setIsCorrectButtonActive] = useState(false);
	const [isFalseButtonActive, setIsFalseButtonActive] = useState(false);

	const correctButtonActiveHandler = () => {
		setIsCorrectButtonActive(true);
	};
	const correctButtonInactiveHandler = () => {
		setIsCorrectButtonActive(false);
	};
	const falseButtonActiveHandler = () => {
		setIsFalseButtonActive(true);
	};
	const falseButtonInactiveHandler = () => {
		setIsFalseButtonActive(false);
	};

	const correctButtonHook ={
		isCorrectButtonActive,
		correctButtonActiveHandler,
		correctButtonInactiveHandler,
	}

	const falseButtonHook ={
		isFalseButtonActive,
		falseButtonActiveHandler,
		falseButtonInactiveHandler,
	}
	return {
		correctButtonHook,
		falseButtonHook
	};
};

export default useLinkSwipeButtons;
