import React from 'react';

class Search extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      term: ''
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleInputChange(e) {
    this.setState({
      term: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.handleSearchInputChange(this.state.term)
    this.setState({
      term: ''
    })
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
        <input
          type="submit"
          onClick={this.handleSubmit}
        />
      </div>
    )
  }

}

export default Search;