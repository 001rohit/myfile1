
import './ExpenseItem.css';
// import Card from './Card';
const ExpenseItem = (props) =>{
    const month  =  props.date.toLocaleString('en-US' , {month: 'long'});
    const year  =   props.date.getFullYear();
    const day  = props.date.toLocaleString('en-US',  {day :  '2-digit'});
    const  title =  props.title;
    const id = props.id;
    return(
        <div className="expense-item">
            <p>{props.id}</p>
            <div><h3>
                <div>{month}</div>   
                <div>{year}</div>
                <div>{day}</div>
                </h3></div>
                {/* { props.date.toISOString() } */}
                <h1>{title}</h1>
               <div className="expense-item_desc">
                <div className="expense-item_price">${props.amount}</div>
               </div>
        </div>
    )
}
export default ExpenseItem;