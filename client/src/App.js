import React from 'react';
import axios from 'axios';
import Search from './components/Search';
import CowList from './components/CowList';
import Form from './components/Form';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cows: [],
      search: ''
    }
    this.handleSearchInputChange = this.handleSearchInputChange.bind(this);
    this.createOne = this.createOne.bind(this);
    this.deleteOne = this.deleteOne.bind(this);
    this.editOne = this.editOne.bind(this);
  }

  componentDidMount() {
    axios.get('/api/cows')
      .then(response => this.setState({cows: response.data}))
      .catch(error => console.log(error))
  }

  handleSearchInputChange(term) {
    this.setState({search: term})
  }

  createOne(newObj) {
    axios.post('/api/cows', newObj)
      .then(response => this.setState({cows: response.data}))
      .catch(error => console.log(error))
  }

  deleteOne(id) {
    axios.delete('/api/cows/' + id)
      .then(response => this.setState({cows: response.data}))
      .catch(error => console.log(error))
  }

  editOne(id, name, description) {
    console.log( {name, description})
    axios.put('/api/cows/' + id, {name, description})
      .then(response => this.setState({cows: response.data}))
      .catch(error => console.log(error))
  }

  render() {
    let cowsToRender = []
    for (const cow of this.state.cows) {
     if(cow.name.toLowerCase().includes(this.state.search.toLowerCase())) {
      cowsToRender.push(cow)
     }
    }

    return (
      <div>
        <Search handleSearchInputChange={this.handleSearchInputChange} />
        <CowList cows={cowsToRender} deleteOne={this.deleteOne} editOne={this.editOne} />
        <Form createOne={this.createOne} />
      </div>
    )
  }

}

export default App;

