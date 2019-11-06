import React from 'react';

class AddBuilding extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            id: -1,
            name: '',
            code: '',
            address:''
        }
        this.handleChange = this.handleChange.bind(this)
        this.submitHandler = this.submitHandler.bind(this)
    }
   
    handleChange(event) {
        //console.log('value being updated', name)
        //console.log
        //console.log('event', event)
        const name = event.target.name
        const value = event.target.value
        this.setState({
            [name]: value
        })
    }
    submitHandler(event) {
        event.preventDefault()
        const {addBuilding} = this.props;
        var buildingData = {
            id: -1,
            name: this.state.name,
            code: this.state.code,
            address: this.state.address
        }
        //console.log('state', this.state)
        addBuilding(buildingData)
        //reset state
        this.setState({
            id: -1,
            name: '',
            code: '',
            address:'' 
        })
        
    }
    
    render() {

        return (
            <form onSubmit = {this.submitHandler}>
                    <input 
                        type="text" 
                        name="name"
                        value={this.state.name}
                        onChange={this.handleChange}
                        placeholder="Building name" 
                    />
                    <input 
                        type="text" 
                        name="code"
                        value={this.state.code}
                        onChange={this.handleChange}
                        placeholder="Building code" 
                    />
                    <input 
                        type="text" 
                        name="address"
                        value={this.state.address}
                        onChange={this.handleChange}
                        placeholder="Address" 
                    />
                    <input 
                        type="submit" 
                        onClick={this.submitHandler.bind(this)}
                    />
                    
            </form>
        )
		
		
	}
}
export default AddBuilding;
