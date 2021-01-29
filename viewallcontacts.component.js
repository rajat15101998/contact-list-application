import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Contact = props => (
  <tr>
    <td>{props.contacts.contactname}</td>
    <td>{props.contacts.phonenumber}</td>
    <td>
      <Link to={"/edit/"+props.contacts._id}>edit</Link> | <a href="#" onClick={() => { props.deleteContact(props.contacts._id) }}>delete</a>
    </td>
  </tr>
)

export default class ViewAllcontacts extends Component {
  constructor(props) {
    super(props);

    this.deleteContact = this.deleteContact.bind(this)

    this.state = {contacts: []};
  }

  //get list of contacts from the database
  componentDidMount() {
    axios.get('http://localhost:5000/contacts/')
      .then(response => {
        this.setState({ contacts: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  deleteContact(id) {
    axios.delete('http://localhost:5000/contacts/'+id)
      .then(response => { console.log(response.data)});

    this.setState({
      contacts: this.state.contacts.filter(el => el._id !== id)
    })
  }

  contactList() {
    return this.state.contacts.map(currentcontact => {
      return <Contact contacts={currentcontact} deleteContact={this.deleteContact} key={currentcontact._id}/>;
    })
  }

  render() {
    return (
      <div>
        <h3>All Contacts List</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Contact Name</th>
              <th>Phone Number</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            { this.contactList() }
          </tbody>
        </table>
      </div>
    )
  }
}