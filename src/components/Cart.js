import { useState, useEffect } from 'react'
import '../styles/Cart.css'

function Cart({cart, updateCart, activeCategory, setActiveCategory}) {
	const [isOpen, setIsOpen] = useState(true)
	const total = cart.reduce(
		(acc, plantType) => acc + plantType.amount * plantType.price, 0

	)

	useEffect(() => {
		alert(`J'aurai ${total}€ à payer 💸`)
	}, [total])

	function deleteFromCart(name, price) {
		const currentPlantAdded = cart.find((plant) => plant.name === name)
		if (currentPlantAdded.amount > 1) {
			const cartFilteredCurrentPlant = cart.filter(
				(plant) => plant.name !==name
			)
			updateCart([
				...cartFilteredCurrentPlant, 
				{name, price, amount: currentPlantAdded.amount - 1}
			])
		} else {
			updateCart([...cart, {name, price, amount :1}])
		}
	}


	return isOpen ? (
		<div className='lmj-cart'>
			<button
				className='lmj-cart-toggle-button'
				onClick={() => setIsOpen(false)}
			>
				Fermer
			</button>
			{cart.map(({name, price, amount}, index) =>(
				<div key={`${name}-${index}`}>
					{name} {price}€ x {amount}
					<button onClick={() => deleteFromCart()}>Retirer</button>
					</div>
					
			))}
			<h3>Total : {total}€</h3>
            <button onClick={()=> updateCart([])}>Vider le panier</button>
		</div>
	) : (
		<div className='lmj-cart-closed'>
			<button
				className='lmj-cart-toggle-button'
				onClick={() => setIsOpen(true)}
			>
				Ouvrir le Panier
			</button>
		</div>
	)
}

export default Cart