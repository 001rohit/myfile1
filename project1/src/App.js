import logo from './logo.svg';
import './App.css';
import ExpenseItem from  "./Component/ExpenseItem";
const  App = () => {
  let expense =[
    {
      id:'e1',
      title:'school fee',
      amount:250,
      date:new Date(2020,5,21),
    },
    {
      id:'e2',
      title:'Bus fee',
      amount:150,
      date:new Date(2020,5,21),
    },
    {
      id:'e3',
      title:'Book fee',
      amount:350,
      date:new Date(2020,5,21),
    },
    {
      id:'e4',
      title:'Food',
      amount:200,
      date:new Date(2020,5,21),
    }
  ]
  return (
    <div className="App">
      <h2>DailyExpenses</h2>
      <ExpenseItem 
      id={expense[0].id}
      date={expense[0].date}
       title={expense[0].title}
       amount = {expense[0].amount}/>
     <ExpenseItem 
      id={expense[1].id}
      date={expense[1].date}
       title={expense[1].title}
       amount = {expense[1].amount}/>
     <ExpenseItem 
      id={expense[2].id}
      date={expense[2].date}
       title={expense[2].title}
       amount = {expense[2].amount}/>
     <ExpenseItem 
      id={expense[3].id}
      date={expense[3].date}
       title={expense[3].title}
       amount = {expense[3].amount}/>
    </div>
  );
}

export default App;
