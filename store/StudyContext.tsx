/** @format */

import React, { useState, useEffect } from 'react';
import StudyCard from '../DataStructures/StudyCard';
import cards from '../data/cards.json';
import StudyCardClass from '../DataStructures/StudyCard';
const allStudyCards = cards.map((card) => new StudyCardClass(card));

interface StudyContextInterface {
	studyDeck: StudyCard[];
	cardCorrectHandler: (studyCard:StudyCard) => void;
	cardFalseHandler: (studyCard:StudyCard) => void;
  }

const StudyContext = React.createContext<StudyContextInterface>({
	studyDeck: [],
	cardCorrectHandler: (studyCard:StudyCard) => {},
	cardFalseHandler: (studyCard:StudyCard) => {},
});

const StudyContextProvider:React.FC = (props) => {
	const {children}= props
	const [studyDeck, setStudyDeck] = useState<StudyCard[]>([]);

	useEffect(() => {
		setStudyDeck(allStudyCards);
	}, []);

	const cardCorrectHandler = (studyCard:StudyCard) => {
		setStudyDeck((prevDeck) => prevDeck.filter((card) => card.id !== studyCard.id));
	};
	const cardFalseHandler = (studyCard:StudyCard) => {
		setStudyDeck((prevDeck) => prevDeck.filter((card) => card.id !== studyCard.id));
	};
	const studyContext = { studyDeck, cardCorrectHandler, cardFalseHandler };

	return (
		<StudyContext.Provider value={studyContext}>
			{children}
		</StudyContext.Provider>
	);
};

export default StudyContext;
export { StudyContext, StudyContextProvider };
