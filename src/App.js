import { Component } from "react/cjs/react.production.min"
import "./App.css"
import Form from "./components/Form/Form"
import ContactList from "./components/ContactList/ContactList"
import Filter from "./components/Filter/Filter"

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  }

  addContact = (newContact) => {
    console.log(newContact)
    this.setState((prev) => ({
      contacts: [...prev.contacts, newContact],
    }))
  }

  deleteContact = (name) => {
    const contsctsWithoutDeleted = this.state.contacts.filter(
      (contact) => contact.name !== name
    )
    this.setState({ contacts: contsctsWithoutDeleted })
  }

  setFilter = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  filterArray = () => {
    if (this.state.filter === "") return this.state.contacts
    return this.state.contacts.filter((el) => {
      return el.name.toLowerCase().includes(this.state.filter.toLowerCase())
    })
  }

  // componentDidMount() {
  //   const contacts = JSON.parse(localStorage.getItem("contacts")) || []
  //   this.setState({ contacts })
  // }

  // componentDidUpdate(prevProps, prevState) {
  //   if (prevState.contacts !== this.state.contacts) {
  //     localStorage.setItem("contacts", JSON.stringify(this.state.contacts))
  //   }
  // }

  render() {
    return (
      <div className="App">
        <h1>Phonebook</h1>
        <Form contacts={this.state.contacts} addContact={this.addContact} />
        <h2>Contacts</h2>
        <Filter filter={this.state.filter} setFilter={this.setFilter} />
        <ContactList
          contacts={this.state.contacts}
          filterArray={this.filterArray}
          setFilter={this.setFilter}
          deleteContact={this.deleteContact}
        />
      </div>
    )
  }
}

export default App
