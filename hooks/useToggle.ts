/** @format */

import { useState } from 'react';

const useToggle = () => {
	const [isActive, setIsActive] = useState(false);

	const toggleHandler = (override?:boolean) => {
		if(typeof override !== 'undefined'){
			setIsActive(override);
			return;
		}
		setIsActive((prevState)=>(
			!prevState
		));
	};

	return {
		isActive,
		toggleHandler
	};
};

export default useToggle;
