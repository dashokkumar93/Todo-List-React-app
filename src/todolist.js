var React = require('react');
var store = require("store2");
import {Button} from "react-bootstrap";
class CreateToDoList extends React.Component {
  componentDidMount() {
    this.inputVal="";
  }
  constructor() {
    super();
        this.addValueToList = this.addValueToList.bind(this);
        this.handleInput=this.handleInput.bind(this);
  };
  handleInput(e)
   {
     this.inputValue=e.target.value;

   }
addValueToList(){
  if(store.has("todoList")===false)
  {
    store.set("todoList",{count:0})
  }
  var count=store.get("todoList").count;
  count+=1;
  var obj={
      value:this.inputValue,
      isChecked:false
    };
  store.transact("todoList",function(elements){
      elements[count+""]=obj;
      elements.count=count
  });
  this.newElements=[];
this.newElements.length=0;
this.newElements.push( <PreviousValues value={this.inputValue} key={count} check={false} count={count}/>);

this.forceUpdate()
  }
  render() {
    return ( <div>
      <input type="input" onChange={this.handleInput}/>
       <Button bsStyle="primary" onClick={this.addValueToList}>Add</Button>

      <CreateShowPreviousTasks/>

      </div>
    )
  }
}
class PreviousValues  extends React.Component{
  constructor(props){
    super();
    this.setState={
      count:props.count
    }
  }
  componentDidMount(){
    this.count=this.props.count;
  }
  render(){
      return(
      <div >
          <input type="input"value={this.props.value}></input>
      </div>
    )
  }
}


class CreateShowPreviousTasks extends React.Component {
  render() {
    if (store.has('todoList')===true) {

      var divElements=[];
      this.loop=0;
      if(typeof store.has("todoList").count==="null")
      {
        store.transact("todoList",function(values){
          values.count=0;
        })
      }
      var count=store.get("todoList").count;var obj=store.get("todoList");

      for(this.loop=1;this.loop<=count;this.loop++)
      {
        var element=obj[this.loop+""];
        divElements.push(
         <PreviousValues value={element.value} key={this.loop+1} check={element.isChecked} count={count}/>
        )
      }
    } else {
      store.set('todoList',{
        count:0
      })
    }
    return (<div>{divElements}</div>)
  }
}

export default CreateToDoList;
