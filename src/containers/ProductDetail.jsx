import React from 'react';
import ProductInfo from '../components/ProductInfo';
import '../styles/ProductDetail.css';
import imagenes from '../assets/imagenes';

const ProductDetail = () => {
	return (
		<aside className="ProductDetail">
			<div className="ProductDetail-close">
				<img src={imagenes.iconClose} alt="close" />
			</div>
			<ProductInfo />
		</aside>
	);
}

export default ProductDetail;
