import React from 'react';

class ViewBuilding extends React.Component {
	render() {

		const { data, selectedBuilding } = this.props
		const building = data[selectedBuilding]
		const name = building.name
		const code = building.code
		
		//console.log(data)
			console.log(data[selectedBuilding])
			return (
				<div>
					<h2>{name} ({code})</h2>
					<h4>Address: {building.address}</h4>
				</div>
			);	
		
		
	}
}
export default ViewBuilding;
//<h4>Coordinates: {building.coordinates.latitude}, {building.coordinates.longitude}</h4>