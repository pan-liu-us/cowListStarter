import React from 'react';

class Search extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      term: ''
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
    this.clearSearchFilter = this.clearSearchFilter.bind(this);
  }

  handleInputChange(e) {
    this.setState({
      term: e.target.value
    })
  }

  handleSearchSubmit() {
    this.props.onSearchSubmit(this.state.term);
    this.setState({
      term: ''
    })
  }

  clearSearchFilter() {
    this.props.onSearchSubmit('');
  }

  render() {
    return (
      <div>
        <h2>Search For A Cow</h2>
        <input
          type="text"
          value={this.state.term}
          onChange={this.handleInputChange}
        />
        <button onClick={this.handleSearchSubmit}>Submit</button>
        <button onClick={this.clearSearchFilter}>Back</button>
      </div>
    )
  }

}

export default Search;