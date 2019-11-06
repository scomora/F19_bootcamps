import React from 'react';
import Search from './components/Search';
import ViewBuilding from './components/ViewBuilding';
import BuildingList from './components/BuildingList';
import Credit from './components/Credit';
import AddBuilding from './components/AddBuilding'
import RemoveBuilding from './components/RemoveBuilding'
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      selectedBuilding: 0,
      data: this.props.data
    };
  }

  filterUpdate(value) {
    //Here you will need to set the filterText property of state to the value passed into this function
    this.setState({
      filterText: value
    })
  }

  selectedUpdate(id) {
    //Here you will need to update the selectedBuilding property of state to the id passed into this function
    console.log('selected id updated to', id);
    this.setState({
      selectedBuilding: id-1
    })
  }

  addBuilding(newData) {
    console.log('in App component', newData)
    //get the index of the last data element
    var lastIndex = this.state.data[this.state.data.length - 1].id
    var newList = this.state.data
    newData.id = lastIndex + 1
    console.log('data with new id', newData)
    newList.push(newData)
    this.setState({
      data: newList
    })
    //store 
  }

  removeBuilding(id) {
    console.log('removing ', id, ' from App.js')
    const tempList = this.state.data
    const index = tempList.findIndex(listing => {return listing.id === id})
    const newList = tempList.slice(0, index).concat(tempList.slice(index+1))
    console.log('newList length', newList)
    this.setState({
      data: newList
    })
  }

  render() {
    console.log("filterText state from parent", this.state.filterText)
    return (
      <div className="bg">
        <div className="row">
          <h1>UF Directory App</h1>
        </div>
        
        <Search 
          filterText={this.state.filterText}
          filterUpdate={this.filterUpdate.bind(this)}
        />
        <main>
          <div className="row">
            <div className="column1">
              <div className="tableWrapper">
                <table className="table table-striped table-hover">
                  <tr>
                    <td>
                      <b>Code Building</b>
                    </td>
                  </tr>
                  <BuildingList
                    data = {this.state.data}
                    filterText = {this.state.filterText}
                    selectedUpdate = {this.selectedUpdate.bind(this)}
                    removeBuilding = {this.removeBuilding.bind(this)}
                  />
                </table>
              </div>
            </div>
            <div className="column2">
              <ViewBuilding 
                data={this.state.data}
                selectedBuilding = {this.state.selectedBuilding}
              />
            </div>
          </div>
          <AddBuilding 
            addBuilding = {this.addBuilding.bind(this)}
            //data={this.state.data}
          />
          <Credit />
        </main>
      </div>
    );
  }
}

export default App;
