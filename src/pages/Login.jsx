import React from 'react';
import '../styles/Login.css';
import imagenes from '../assets/imagenes';

const Login = () => {
	// Tenemos que crear una referencia con un valor. Le ponemos null porque no lo inicializamos con ningun elemento
	const form = React.useRef(null);


	// Vamos a capturar la informacion del submit del form.
	const handleSubmit = (event)=>{
		//tenemops que poner esto para que no quiera mandar la informacion directamente.
		event.preventDefault();
		// Lo que sigue es codigo JS.
		const formData = new FormData(form.current);
		// Vamos a crear un objeto que tenga toda esta informacion en el fomrato que le vamos a pasar al backend.
		const data = {
			//Vamos a sacar con get loe elementos que tenga el formdata que acabamos de crear.
			username: formData.get("email"),
			password: formData.get("password")
		}
		console.log(data);

	}

	return (
		<div className="Login">
			<div className="Login-container">
				<img src={imagenes.logoYardSale} alt="logo" className="logo" />
				<form action="/" className="form" ref={form}>
					<label htmlFor="email" className="label">Email address</label>
					<input type="text" name="email" placeholder="platzi@example.cm" className="input input-email" />
					<label htmlFor="password" className="label">Password</label>
					<input type="password" name="password" placeholder="*********" className="input input-password" />
					<button onClick={handleSubmit} type="submit" value="Log in" className="primary-button login-button">
						Sign In
					</button>
					<a href="/">Forgot my password</a>
				</form>
				<button className="secondary-button signup-button">Sign up</button>
			</div>
		</div>
	);
}

export default Login;
