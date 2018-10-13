import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import './PageView.css';

const wellStyles = { display: 'flex', flexDirection: 'column',height:'100%'};

class PageView extends Component {

	constructor(props){
		super(props);
		this.state = {treePath: 0};
		this.treeLabel = "What is the emergency"
		this.handleClick = this.handleClick.bind(this);
		this.returnToStart = this.returnToStart.bind(this);
		this.buttonsInstance = (
			<div>
			    <Button bsStyle="primary" bsSize="lg" block onClick={this.handleClick} id='0'>
			      Cardiac/Heart
			    </Button>
			    <Button bsStyle="primary" bsSize="lg" block onClick={this.handleClick} id='1'>
			      Breathing
			    </Button>
			     <Button bsStyle="primary" bsSize="lg" block onClick={this.handleClick} id='2'>
			      Bleeding
			    </Button>
			     <Button bsStyle="primary" bsSize="lg" block onClick={this.handleClick} id='3'>
			      Unsure
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
				this.path1(id);
				break;
			case 2:
				break;
			case 3:
				break;
			case 4:
				break;
			case 5:
				break;
			case 6:
				break;
			case 7:
				break;
			case 8:
				break;
			case 9:
				break;
		}
	}

	path0(id)
	{
		switch(parseInt(id,10)){
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
			case 2:
				this.treeLabel = "Apply direct pressure to the wound";
				this.buttonsInstance = (<img src="https://i.gifer.com/HS2k.gif" alt="Gif stop the blood"/>);
				this.setState((state)=> ({treePath:3}));
				break;
			case 5:
				this.treeLabel = "Do not attempt to get them to throw up";
				this.buttonsInstance = (<img src="http://www.nebraskapoison.com/App_Files/images/poisonHelp.gif" alt="posion center"/>);
				this.setState((state)=> ({treePath:6}));
			break;
		}
	}

	path1(id)
	{

	}

	returnToStart()
	{
		this.setState((state) => ({ treePath:0}));
		this.treeLabel = "What is the emergency";
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
				  		<div className="separator"></div>
				  		<Button bsStyle="warning" bsSize="medium" block onClick={this.returnToStart}>
					      Return to Start
					    </Button>
				  	</div>
				</div>
			</div>
		</div>
	    );
	}
}

export default PageView;
