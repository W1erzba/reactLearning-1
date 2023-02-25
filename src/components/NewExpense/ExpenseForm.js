import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
	const [enteredTitle, setEnteredTitle] = useState('');
	const [enteredAmount, setEnteredAmount] = useState('');
	const [enteredDate, setEnteredDate] = useState('');

	const titleChangeHanlder = (event) => {
		setEnteredTitle(event.target.value);
	};
	const AmountChangeHanlder = (event) => {
		setEnteredAmount(event.target.value);
	};
	const DateChangeHanlder = (event) => {
		setEnteredDate(event.target.value);
	};

	const submitHandler = (e) => {
		e.preventDefault();
		const expenseData = {
			title: enteredTitle,
			amount: enteredAmount,
			date: new Date(enteredDate),
		};
		props.onSaveExpenseData(expenseData);
		setEnteredTitle('');
		setEnteredAmount('');
		setEnteredDate('');
	};

	return (
		<form onSubmit={submitHandler}>
			<div className='new-expense__controls'>
				<div className='new-expense__controls'>
					<label>Title</label>
					<input
						type='text'
						value={enteredTitle}
						onChange={titleChangeHanlder}
					/>
				</div>
				<div className='new-expense__controls'>
					<label>Amount</label>
					<input
						type='number'
						value={enteredAmount}
						min='0.01'
						step='0.01'
						onChange={AmountChangeHanlder}
					/>
				</div>
				<div className='new-expense__controls'>
					<label>Date</label>
					<input
						type='date'
						value={enteredDate}
						min='2019-01-01'
						max='2022-12-31'
						onChange={DateChangeHanlder}
					/>
				</div>
			</div>
			<div className='new-expense__actions'>
				<button type='submit'>Add expense</button>
			</div>
		</form>
	);
};

export default ExpenseForm;
