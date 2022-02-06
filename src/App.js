import { Component } from "react/cjs/react.production.min"
import { nanoid } from "nanoid"
import "./App.css"
import Form from "./components/Form/Form"
import ContactList from "./components/ContactList/ContactList"

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "gfd",
  }

  addContact = (newContact) => {
    this.setState((prev) => ({
      contacts: [...prev.contacts, newContact],
    }))
  }

  render() {
    return (
      <div className="App">
        <h1>Phonebook</h1>
        <Form contacts={this.state.contacts} addContact={this.addContact} />
        <ContactList
          contacts={this.state.contacts}
          filter={this.state.filter}
        />
      </div>
    )
  }
}

export default App
