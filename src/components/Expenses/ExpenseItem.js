// in React there is a convenction where we always name function this same name as component name. With btw is always started with uppercase letter and camelCase.
import React from 'react';
import ExpenseDate from './ExpenseDate';
// this is how you add css file to js component in React.
import './ExpenseItem.css';
// Importing Card - new box instead of classic div.
import Card from '../UI/Card';

const ExpenseItem = props => {
	return (
		<Card className='expense-item'>
			<ExpenseDate date={props.date} />
			<div className='expense-item__description'>
				<h2>{props.title}</h2>
			</div>
			<div className='expense-item__price'>${props.amount}</div>
		</Card>
	);
};

export default ExpenseItem;
