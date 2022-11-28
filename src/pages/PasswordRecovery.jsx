import React from 'react';
import '../styles/PasswordRecovery.css';
import imagenes from '../assets/imagenes';

const PasswordRecovery = () => {
	return (
		<div className="PasswordRecovery">
			<div className="PasswordRecovery-container">
				<img src={imagenes.logoYardSale} alt="logo" className="logo" />
				<h1 className="title">Password recovery</h1>
				<p className="subtitle">Inform the email address used to create your account</p>
				<form action="/" className="form">
					<label htmlFor="email" className="label">Email address</label>
					<input type="text" id="email" className="input input-email" />
					<input type="submit" value="Confirm" className="primary-button login-button" />
				</form>
			</div>
		</div>
	);
}

export default PasswordRecovery;
