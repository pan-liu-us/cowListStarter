import React from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      description: ''
    }
    this.handleFormInputChange = this.handleFormInputChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleFormInputChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value
    })
  }

  handleFormSubmit(e) {
    if (this.state.name.length === 0 || this.state.description.length === 0 ) {
      alert('Please complete the form')
    } else {
      alert('You add a new cow: ' + this.state.name);
      e.preventDefault();
      this.props.createOne(this.state);
      this.setState({
        name: '',
        description: ''
      })
    }
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <h2>Add A New Cow</h2>
          <label>
            name:
            <input
            name="name"
            type="text"
            value={this.state.name}
            onChange={this.handleFormInputChange}
            />
          </label>
          <label>
            description:
            <input
            name="description"
            type="text"
            value={this.state.description}
            onChange={this.handleFormInputChange}
            />
          </label>
          <input type="submit" value="Submit"/>
        </form>
      </div>
    )
  }

}

export default Form;