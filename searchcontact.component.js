import React, { Component } from 'react';
import axios from 'axios';

const Contact = props => (
  <tr>
    <td>{props.contact.contactname}</td>
    <td>{props.contact.phonenumber}</td>
    {/* <td>
      <Link to={"/edit/"+props.exercise._id}>edit</Link> | <a href="#" onClick={() => { props.deleteExercise(props.exercise._id) }}>delete</a>
    </td> */}
  </tr>
)

export default class SearchContact extends Component {

  constructor(props) {
    super(props);
    this.onChangeContactName = this.onChangeContactName.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      contactname: '',
      contacts: []
    };
  }

  onChangeContactName(e) {
    this.setState({
      contactname: e.target.value
    })
    // console.log(contactname);
  }

  onSubmit(e) {
    e.preventDefault();
    // console.log(contactname);
    // const contacts = {
    //   contactname: this.state.contactname
    // }
    // console.log(contacts);

}

  componentDidMount() {
    axios.get('http://localhost:5000/contacts/'+this.props.match.params.contactname)
    .then(response => {
      this.setState({ contacts: response.data });
    })
    .catch((error) => {
        console.log(error);
    })
    //console.log(this.props.match.params.contactname);
  }

  contactList() {
    return this.state.contacts.map(currentcontact => {
      return <Contact contact={currentcontact} />;
    })
  }

  render () {
    return (
      <div>
           <h3>Enter Name to Search</h3>
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
                  <input type="submit" value="Search Contact..." className="btn btn-primary" />
                </div>
              </form>

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