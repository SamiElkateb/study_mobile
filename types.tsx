/** @format */

export type javascriptCodeType =
	| 'function'
	| 'string'
	| 'statement'
	| 'declaration'
	| 'comment'
	| 'linebreak'
	| 'variable';

export type yamlCodeType = 'string' | 'object' | 'variable' | 'tab' | 'linebreak';
export type indexAndLengthArray = { index: number; length: number }[];

export type answerType = 'text' | 'javascript' | 'terminal' | 'yaml'

export interface toggleButton {
	isActive: boolean;
	isButtonActive: boolean;
	isSwipeActive: boolean;
	toggleButtonHandler : (override?:boolean)=>void;
	toggleSwipeHandler : (override?:boolean)=>void;
}
