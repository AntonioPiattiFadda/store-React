import React from 'react';
import '../styles/ProductItem.css';
import imagenes from '../assets/imagenes';

const ProductItem = ({product}) => {
	const [cart, setCart] = React.useState([]);

	function handleClick (){
		setCart([]);
	}

	return (
		<div className="ProductItem">
			<img src={product.images[0]} alt={product.tittle} />
			<div className="product-info">
				<div>
					<p>${product.price}</p>
					<p>{product.tittle}</p>
				</div>
				<figure
				onClick={handleClick}
				>
					<img src={imagenes.addToCart} alt="" />
					{cart}
				</figure>
			</div>
		</div>
	);
}

export default ProductItem;
