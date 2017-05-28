var React = require('react');
import TopHeader from './topHeader';
import CreateToDoList from './todolist';
class Navigation extends React.Component{
	constructor()
	{
		super();
		this.appName="To Do List"
	}
	componentDidMount(){
		console.log("Component Did Mount")
		this.props={
			appName:"Todo List"
		}
	}
	render(){
			return(
				<TopHeader name={this.appName}/>
			)
		}
}
class App extends React.Component{
constructor(){
	super();
  this.list="Hai"
}
	render(){
		return (
      <div>
			<Navigation/>
      <CreateToDoList/>
      </div>
		)
	}
}
export default App;
