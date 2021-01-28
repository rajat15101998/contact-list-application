import React from 'react'
import './App.css';
import { BrowserRouter as Router, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/navbar.component';
import Addcontacts from './components/addcontacts.component';
import ViewAllcontacts from './components/viewallcontacts.component';
import SearchContact from './components/searchcontact.component';
import EditContacts from './components/editContact.component';

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar/>
        <Route path="/add" component={Addcontacts} />
        <Route path="/view" component={ViewAllcontacts} />
        <Route path="/edit/:id" component={EditContacts} />
        <Route path="/search" component={SearchContact} />
      </div>
    </Router>
  );
}

export default App;
