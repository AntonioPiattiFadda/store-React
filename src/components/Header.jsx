import React from 'react';
import '../styles/Header.css';
import imagenes from '../assets/imagenes';
import Menu from './Menu';

const Header = () => {
	const [toggle, setToogle] = React.useState(false);

	function handleToggle() {
		setToogle(!toggle);
	}

	return (
		<nav>
			<img src={imagenes.iconMenu} alt="menu" className="menu" />
			<div className="navbar-left">
				<img src="../assets/logo_yard_sale.svg" alt="logo" className="logo" />
				<ul>
					<li>
						<a href="/">All</a>
					</li>
					<li>
						<a href="/">Clothes</a>
					</li>
					<li>
						<a href="/">Electronics</a>
					</li>
					<li>
						<a href="/">Furnitures</a>
					</li>
					<li>
						<a href="/">Toys</a>
					</li>
					<li>
						<a href="/">Others</a>
					</li>
				</ul>
			</div>
			<div className="navbar-right">
				<ul>
					<li className="navbar-email"
					onClick={handleToggle}
					>
						platzi@example.com</li>
					<li className="navbar-shopping-cart">
						<img src={imagenes.iconShopcart} alt="shopping cart" />
						<div>2</div>
					</li>
				</ul>
			</div>
			{toggle && <Menu/>}
		</nav>
	);
}

export default Header;
