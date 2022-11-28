import React from 'react';
import '../styles/Order.css';
import imagenes from '../assets/imagenes';

const Order = () => {
	return (
		<div className="Order">
			<p>
				<span>03.25.21</span>
				<span>6 articles</span>
			</p>
			<p>$560.00</p>
			<img src={imagenes.flechita} alt="arrow" />
		</div>
	);
}

export default Order;
