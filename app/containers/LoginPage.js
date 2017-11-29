import React, { Component } from 'react';
import { connect } from 'react-redux';
import MdArrowForward from 'react-icons/lib/md/arrow-forward';
// import { GOOGLE_API_KEY, BACKEND_ROOT } from '../constants';
// import Loader from '../components/Loader';
// import Input from '../components/Input';
import Button from '../components/Button';

class LoginPage extends Component {
	componentDidMount() {}
	render() {
		const btnProps = {
			label: 'Continue',
			size: 'lg',
			styles: ['white'],
			handleClick: e => {
				alert('Hello world!');
				console.log(e);
			}
		};
		console.log(this.props);
		return (
			<div className="login-page">
				<div className="logo-wrapper">
					<div className="logo">
						<div className="logo-letter">PWA</div>
					</div>
					<div className="logo-text">Progressive Web App</div>
				</div>
				<div className="login-form">
					<div className="input-wrapper">
						<input
							ref={input => {
								this.textInput = input;
							}}
							className="input"
							type="text"
							placeholder="Helsinki"
						/>
					</div>
					<Button {...btnProps}>
						<span className="arrow">
							<MdArrowForward />
						</span>
					</Button>
				</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		loggedIn: state.ui.loggedIn
	};
}
export default connect(mapStateToProps)(LoginPage);
