import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleSidebar } from '../store/actions/interface';

class Header extends Component {
	constructor(props) {
		super(props);
		this.signIn = this.signIn.bind(this);
	}
	signIn() {
		console.log('signIn');
		this.props.authModalToggle({
			show: true
		});
	}
	render() {
		return (
			<div className="header fixed">
				<div className="header-title">Header</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	console.warn(state);
	return {
		sidebarVisibility: state.ui.sidebarVisibility,
		auth: state.auth
	};
}
export default connect(mapStateToProps, { toggleSidebar })(Header);
