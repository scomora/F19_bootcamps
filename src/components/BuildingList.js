import React from 'react';
import RemoveBuilding from './RemoveBuilding'
import Button from 'react-bootstrap/Button';


class BuildingList extends React.Component {
	
	selectedUpdate(id) {
		console.log('id to select')
		this.props.selectedUpdate(id)
	}

	removeBuilding(id) {
		this.props.removeBuilding(id)
	}
	
	
	render() {
		//console.log('This is my directory file', this.props.data);
		const { data, filterText, selectedUpdate, removeBuilding} = this.props

		const buildingList = data
			.filter(directory => {
				// remove names that do not match current filterText
				return directory.code.toLowerCase().indexOf(filterText.toLowerCase()) >= 0
			})
			.map(directory => {
				return (
					<tr 
						key = {directory.id}
						onClick = { () => {
								selectedUpdate(directory.id)
							}
						}
						//ref = { (value) => this.myID.id}
					>
						<td> {directory.code} </td>
						<td> {directory.name} </td>
						<RemoveBuilding
							id={directory.id}
							removeBuilding={removeBuilding}
						/>
					</tr>
				)
		})

		return <div>{buildingList}</div>
	}
}
export default BuildingList
