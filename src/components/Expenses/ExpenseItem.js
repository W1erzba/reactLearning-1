// in React there is a convenction where we always name function this same name as component name. With btw is always started with uppercase letter and camelCase.
import ExpenseDate from './ExpenseDate';
// this is how you add css file to js component in React.
import './ExpenseItem.css';
// Importing Card - new box instead of classic div.
import Card from '../UI/Card';

const ExpenseItem = (props) => {
	return (
		<li>
			<Card className='expense-item'>
				<ExpenseDate date={props.date} />
				<div className='expense-item__description'>
					<h2>{props.title}</h2>
					<div className='expense-item__price'>${props.amount}</div>
				</div>
			</Card>
		</li>
	);
};

export default ExpenseItem;
