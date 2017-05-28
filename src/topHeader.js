var React = require('react');
import {Navbar} from "react-bootstrap";
class TopNavigation extends React.Component{

		render(){
			return(
				<Navbar  collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="#">{this.props.name}</a>
      </Navbar.Brand>
    </Navbar.Header>
  </Navbar>
			)
		}
}
class TopHeader extends React.Component{

	render(){
		return (
			<TopNavigation name={this.props.name}/>

		)
	}
}
export default TopHeader;
