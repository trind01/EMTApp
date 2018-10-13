import React, { Component } from 'react';
import { Button, Label } from 'react-bootstrap';
import './PageView.css';

const wellStyles = { display: 'flex', flexDirection: 'column',alignContent:'stretch' };

class PageView extends Component {

	constructor(props){
		super(props);
		this.state = {treePath: 0};
		this.treeLabel = "What is the emergency"
		this.handleClick = this.handleClick.bind(this);
		this.buttonsInstance = (
			<div className="butGroup">
			    <Button bsStyle="primary" bsSize="large" block onClick={this.handleClick} id='0'>
			      Cardiac/Heart - call 911
			    </Button>
			    <Button bsStyle="primary" bsSize="large" block onClick={this.handleClick} id='1'>
			      Choking
			    </Button>
			     <Button bsStyle="primary" bsSize="large" block onClick={this.handleClick} id='2'>
			      Bleeding
			    </Button>
			    <Button bsStyle="primary" bsSize="large" block onClick={this.handleClick} id='3'>
			      Asthma - calls 911
			    </Button>
			     <Button bsStyle="primary" bsSize="large" block onClick={this.handleClick} id='4'>
			      Allergic rxn
			    </Button>
			    <Button bsStyle="primary" bsSize="large" block onClick={this.handleClick} id='5'>
			      Poison - calls poison control
			    </Button>
			     <Button bsStyle="primary" bsSize="large" block onClick={this.handleClick} id='6'>
			      Unsure/Diagnose me!
			    </Button>
		    </div>
		);
		this.viewInstance = (
		  <div className="well" style={wellStyles}>
		  	<div className="treeLabel">
		  		<h2>
		  		<Label> {this.treeLabel} </Label>
		  		</h2>
		  	</div>
		  	{this.buttonsInstance}
		  </div>
		);
	}

	handleClick(e) {
		var currState = this.state.treePath;
		var id = e.target.id;
		switch(currState){
			case 0:
				this.path0(id);
				break;
			case 1:
				this.state1(id);
				break;
			case 2:
				break;
		}
	}

	path0(id)
	{
		switch(parseInt(id)){
			case 0:
				this.treeLabel = "If they don't have a pulse and no AED is near: PERFORM CPR"
				this.buttonsInstance = (<img src="https://media.giphy.com/media/d07PtnTq0oVsk/giphy.gif" alt="Gif og CPR"/>);
				this.setState((state) => ({ treePath:1}));
				this.rebuildView();
				break;
			case 1:
				break;
		}
	}

	state1(id)
	{

	}

	rebuildView()
	{
		this.viewInstance = (
		  <div className="well" style={wellStyles}>
		  	<div className="treeLabel">
		  		<h2>
		  		<Label> {this.treeLabel} </Label>
		  		</h2>
		  	</div>
		  	{this.buttonsInstance}
		  </div>
		);
	}

	render() {
		return (
		<div>
			<div >
				{this.viewInstance}
			</div>
		</div>
	    );
	}
}

export default PageView;