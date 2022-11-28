import React from 'react';
import OrderItem from '../components/OrderItem';
import '../styles/MyOrder.css';
import imagenes from '../assets/imagenes';

const MyOrder = () => {
	return (
		<aside className="MyOrder">
			<div className="title-container">
				<img src={imagenes.flechita} alt="arrow" />
				<p className="title">My order</p>
			</div>
			<div className="my-order-content">
				<OrderItem />
				<div className="order">
					<p>
						<span>Total</span>
					</p>
					<p>$560.00</p>
				</div>
				<button className="primary-button">
					Checkout
				</button>
			</div>
		</aside>
	);
}

export default MyOrder;
