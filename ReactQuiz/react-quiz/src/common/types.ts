export enum Status {
	Loading,
	Error,
	Ready,
	Active,
	Finished,
}

export interface IQuestion {
	question: string;
	options: string[];
	correctOption: number;
	points: number;
}

export interface IState {
	questions: IQuestion[] | undefined;
	status: Status;
	index: number;
	answer: number | null;
}

export interface IAction {
	payload?: IQuestion[];
	type: string;
	index?: number;
	answer?: number | null;
}
