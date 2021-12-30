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
	toggleHandler : (override?:boolean)=>void;
}
