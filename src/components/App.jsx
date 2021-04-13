import React, { Component } from 'react';

import ContactForm from '../components/ContactForm';
import Filter from './Filter';
import ContactList from '../components/ContactList';

import styles from './App.module.css';

class App extends Component {
  render() {
    return (
      <div className={styles.app}>
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </div>
    );
  }
}

export default App;
