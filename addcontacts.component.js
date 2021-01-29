import React, { Component } from 'react';
import axios from 'axios';

export default class Addcontacts extends Component {
  constructor(props) {
    super(props);

    this.onChangeContactName = this.onChangeContactName.bind(this);
    this.onChangePhoneNumber= this.onChangePhoneNumber.bind(this);
    // this.handleChange= this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      contactname: '',
      phonenumber: '',
    }
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

    const contacts = {
      contactname: this.state.contactname,
      phonenumber: this.state.phonenumber,
    }

    console.log(contacts);

    axios.post('http://localhost:5000/contacts/add', contacts)
      .then(res => console.log(res.data));
    
    // window.alert('contact added successfully');
    // window.alert('contact added');  
    window.location = 'http://localhost:3000/';
    
    console.log('contact added');
  }

//   handleChange = () => {
//     alert('Contact added succesfully');      
//   } 

  render() {
    return (
    <div>
      <h3>Add New Contact</h3>
      <form onSubmit={this.onSubmit}>
        <div className="form-group"> 
          <label>Contact Name: </label>
          <input  type="text"
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
          <input type="submit" value="Add Contact" className="btn btn-primary" />
        </div>
      </form>
    </div>
    )
  }
}