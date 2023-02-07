import { userState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = () => {
	const [enteredTitle, setEnteredTitle] = userState('');
	const [enteredAmount, setEnteredAmount] = userState('');
	const [enteredDate, setEnteredDate] = userState('');
	// const [userInput, setUserInput] = userState({
	// 	enteredTitle: '',
	// 	enteredAmount: '',
	// 	enteredDate: '',
	// });

	const titleChangeHanlder = event => {
		setEnteredTitle(event.target.value);

		// setUserInput({
		// 	...userInput,
		// 	enterdTitle: event.target.value,
		// });

		// setUserInput(prevState => {
		// 	return { ...prevState, enteredTitle: event.target.value };
		// });
	};
	const AmountChangeHanlder = event => {
		setEnteredAmount(event.target.value);

		// setUserInput({
		// 	...userInput,
		// 	enterdAmount: event.target.value,

		// });
	};
	const DateChangeHanlder = event => {
		setEnteredDate(event.target.value);

		// setUserInput({
		// 	...userInput,
		// 	enterdData: event.target.value,
		// });
	};

	return (
		<form>
			<div className='new-expense__controls'>
				<div className='new-expense__controls'>
					<label>Title</label>
					<input type='text' onChange={titleChangeHanlder} />
				</div>
				<div className='new-expense__controls'>
					<label>Amount</label>
					<input type='number' min='0.01' step='0.01' onChange={AmountChangeHanlder} />
				</div>
				<div className='new-expense__controls'>
					<label>Date</label>
					<input type='date' min='2019-01-01' max='2022-12-31' onChange={DateChangeHanlder} />
				</div>
			</div>
			<div className='new-expense__actions'>
				<button type='submit'>Add expense</button>
			</div>
		</form>
	);
};

export default ExpenseForm;
