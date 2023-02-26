import React, { useState } from 'react';

import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
	const [isEditing, setIsEditing] = useState(false);

	const saveExpenseDataHandler = (enteredExpenseData) => {
		const expenseData = {
			...enteredExpenseData,
			id: Math.random().toString(),
		};
		props.onAddExpense(expenseData);
		setIsEditing(false);
	};

	const editingButtonHandler = () => {
		isEditing === true ? setIsEditing(false) : setIsEditing(true);
	};

	return (
		<div className='new-expense'>
			{!isEditing && <button onClick={editingButtonHandler}>Add New Expense</button>}
			{isEditing && (
				<ExpenseForm
					onSaveExpenseData={saveExpenseDataHandler}
					onCancel={editingButtonHandler}
				/>
			)}
		</div>
	);
};

export default NewExpense;
