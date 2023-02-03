// in React there is a convenction where we always name function this same name as component name. With btw is always started with uppercase letter and camelCase.

import './ExpenseItem.css'; // this is how you add css file to js component in React.

function ExpenseItem(props) {
	return (
		<div className='expense-item'>
			<div>{props.date.toISOString()}</div>
			<div className='expense-item__description'>
				<h2>{props.title}</h2>
			</div>
			<div className='expense-item__price'>${props.amount}</div>
		</div>
	);
}

export default ExpenseItem;
