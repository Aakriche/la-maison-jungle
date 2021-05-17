import CareScale from './CareScale'
import '../styles/PlantItem.css'

function handleClick(plantName) {
	alert(`Vous voulez acheter 1 ${plantName}? Très bon choix 🌱✨`)
}

function PlantItem({ cover, name, water, light }) {
	return (<div className="lmj-legend">
		<li className='lmj-plant-item' onClick={() => handleClick}>
			<img className='lmj-plant-item-cover' src={cover} alt={`${name} cover`} />
			
			
		</li>
		{name}
		<CareScale careType='water' scaleValue={water} />
		<CareScale careType='light' scaleValue={light} />
		</div>
	)
}

export default PlantItem