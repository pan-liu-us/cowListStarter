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
  }

  componentDidMount() {
    axios.get('/api/cows')
      .then(response => this.setState({cows: response.data}))
      .catch(err => console.log(err))
  }

  handleSearchInputChange(term) {
    this.setState({search: term})
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
        <Search handleSearchInputChange={this.handleSearchInputChange}/>
        <CowList cows={cowsToRender}/>
        <Form />
      </div>
    )
  }
}

export default App;

