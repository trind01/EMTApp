import React, { Component } from 'react';
import { Button, Label, ButtonGroup } from 'react-bootstrap';
import './PageView.css';

const wellStyles = { display: 'flex', flexDirection: 'column',height:'100%'};

class PageView extends Component {

	constructor(props){
		super(props);
		this.state = {treePath: 0};
		this.treeLabel = "What is the emergency"
		this.handleClick = this.handleClick.bind(this);
		this.buttonsInstance = (
			<div>
			    <Button bsStyle="primary" bsSize="lg" block onClick={this.handleClick} id='0'>
			      Cardiac/Heart - call 911
			    </Button>
			    <Button bsStyle="primary" bsSize="lg" block onClick={this.handleClick} id='1'>
			      Choking
			    </Button>
			     <Button bsStyle="primary" bsSize="lg" block onClick={this.handleClick} id='2'>
			      Bleeding
			    </Button>
			    <Button bsStyle="primary" bsSize="lg" block onClick={this.handleClick} id='3'>
			      Asthma - calls 911
			    </Button>
			     <Button bsStyle="primary" bsSize="lg" block onClick={this.handleClick} id='4'>
			      Allergic rxn
			    </Button>
			    <Button bsStyle="primary" bsSize="lg" block onClick={this.handleClick} id='5'>
			      Poison - calls poison control
			    </Button>
			     <Button bsStyle="primary" bsSize="lg" block onClick={this.handleClick} id='6'>
			      Unsure/Diagnose me!
			    </Button>

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
				this.treeLabel = "If they don't have a pulse and no AED is near: PERFORM CPR";
				this.buttonsInstance = (<img src="https://media.giphy.com/media/d07PtnTq0oVsk/giphy.gif" alt="Gif og CPR"/>);
				this.setState((state) => ({ treePath:1}));
				break;
			case 1:
				this.treeLabel = "If they have difficult breathing perform abdominal thrusts.";
				this.buttonsInstance = (<img src="https://www.padelandia.com/wp-content/uploads/2014/01/animacion-maniobra-de-heimlich.gif" alt="Gif of heimlich maneuver"/>);
				this.setState((state) => ({ treePath:2}));

				break;
		}
	}

	state1(id)
	{

	}


	render() {
		return (
		<div>
			<div >
				<div className="well" style={wellStyles}>
				  	<div className="treeLabel">
				  		<h1>
				  		{this.treeLabel}
				  		</h1>
				  	</div>
				  	<div className="separator"></div>
				  	<div className="butGroup">
				  		{this.buttonsInstance}
				  	</div>
				</div>
			</div>
		</div>
	    );
	}
}

export default PageView;