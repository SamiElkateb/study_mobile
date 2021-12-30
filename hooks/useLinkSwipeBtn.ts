/** @format */

import { useState } from 'react';

const useLinkSwipeBtn = () => {
	const [isButtonActive, setIsButtonActive] = useState(false);
	const [isSwipeActive, setIsSwipeActive] = useState(false);

	const toggleButtonHandler = (override?:boolean) => {
		if(typeof override !== 'undefined'){
			setIsButtonActive(override);
			return;
		}
		setIsButtonActive((prevState)=>(
			!prevState
		));
	};
	const toggleSwipeHandler = (override?:boolean) => {
		if(typeof override !== 'undefined'){
			setIsSwipeActive(override);
			return;
		}
		setIsSwipeActive((prevState)=>(
			!prevState
		));
	};

	return {
		isButtonActive,
		isSwipeActive,
		toggleButtonHandler,
		toggleSwipeHandler
	};
};

export default useLinkSwipeBtn;
