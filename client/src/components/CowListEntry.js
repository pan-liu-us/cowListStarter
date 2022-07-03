import React from 'react';

class CowListEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: false,
      name: '',
      description:''
    }
    this.handleCowDelete = this.handleCowDelete.bind(this);
    this.handleEditClick = this.handleEditClick.bind(this);
    this.handleEditChange = this.handleEditChange.bind(this);
    this.handleEditSubmit = this.handleEditSubmit.bind(this);
    this.handleNameClick = this.handleNameClick.bind(this);
  }

  handleCowDelete(e) {
    e.preventDefault();
    this.props.deleteOne(this.props.cow._id);
  }

  handleEditClick() {
    this.setState({edit: true});
  }

  handleEditChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value
    })
  }

  handleEditSubmit(e) {
    e.preventDefault();
    this.props.editOne(this.props.cow._id, this.state.name, this.state.description);
    this.setState({edit: false});
  }

  handleNameClick() {
    this.props.onCowClick(this.props.cow._id);
  }

  render() {
    const {name, description} = this.props.cow
    if (!this.state.edit) {
      return (
        <div>
          <h3 onClick={this.handleNameClick}>{name}</h3>
          <button onClick={this.handleEditClick}>Edit</button>
          <button onClick={this.handleCowDelete}>Delete</button>
        </div>
      );
    } else {
      return (
        <div>
          <input
            type="text"
            name="name"
            placeholder={name}
            onChange={this.handleEditChange}
          />
          <input
            type="text"
            name="description"
            placeholder={description}
            onChange={this.handleEditChange}
          />
          <button onClick={this.handleEditSubmit}>Submit</button>
          <button onClick={this.handleCowDelete}>Delete</button>
        </div>
      )
    }
  }

}

export default CowListEntry;