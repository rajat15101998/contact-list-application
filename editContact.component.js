import React, { Component } from 'react';
import axios from 'axios';

export default class EditContacts extends Component {
  constructor(props) {
    super(props);

    this.onChangeContactName = this.onChangeContactName.bind(this);
    this.onChangePhoneNumber= this.onChangePhoneNumber.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      contactname: '',
      phonenumber: '',
    }
  }

  componentDidMount () {
    axios.get('http://localhost:5000/contacts/'+this.props.match.params.id)
    .then(response => {
      this.setState({
        contactname:  response.data.contactname,
        phonenumber: response.data.phonenumber
      })   
    })
    .catch(function (error) {
      console.log(error);
    })
    // console.log('hello');
  }

  onChangeContactName(e) {
    this.setState({
      contactname: e.target.value
    })
  }

  onChangePhoneNumber(e) {
    this.setState({
      phonenumber: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

  const contact = {
    contactname: this.state.contactname,
    phonenumber: this.state.phonenumber
  }

    // console.log(contacts);

    axios.post('http://localhost:5000/contacts/update/' + this.props.match.params.id , contact)
      .then(res => console.log(res.data));
    
    // window.alert('contact added successfully');
    // window.alert('contact added');  
    window.location = '/';
    
    console.log('contact updated');
  } 

  render() {
    return (
    <div>
      <h3>Edit Contact</h3>
      <form onSubmit={this.onSubmit}>
        <div className="form-group"> 
          <label>Contact Name: </label>
          <input  
              type="text"
              required
              className="form-control"
              value={this.state.contactname}
              onChange={this.onChangeContactName}
              />
        </div>

        <div className="form-group"> 
          <label>Phone Number: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.phonenumber}
              onChange={this.onChangePhoneNumber}
              />
        </div>

        <div className="form-group">
          <input type="submit" value="Save Contact" className="btn btn-primary" />
        </div>
      </form>
    </div>
    )
  }
}