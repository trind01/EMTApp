import React from 'react';
import "./Header.css";
import { Label } from 'react-bootstrap';

function Header(props) {
	return (
	<div className="header">
		<h1>
		<Label bsStyle='danger'>
		  ez911
		</Label>
		</h1>
	</div>
    );
}

export default Header;