import { Component } from "react/cjs/react.production.min"
import { nanoid } from "nanoid"
import "./App.css"
import Form from "./components/Form/Form"
import ContactList from "./components/ContactList/ContactList"

class App extends Component {
  state = {
    contacts: [],
    name: "",
    number: "",
  }

  handleInputChange = (e) => {
    console.log(e.target.name + ' :' + e.target.value)
    // this.setState([e.target.name]: e.target.value)
    const { name } = e.target.name
    const { number } = e.target.number

    this.setState({ name: name, number: number })
      console.log(this.state)
  }

  handleSubmit = (e) => {
    e.preventDefault()
    // console.log(e.target.name.name) //tag input name - значение атрибута name
    // console.log(e.target.number.name) //tag input number - значение атрибута name

    // console.log(e.target.name.value)
    // console.log(e.target.number.value)
    const newContact = {
      name: this.state.name,
      id: nanoid(),
    }
    this.setState({
      name: e.target.name.value,
      number: e.target.number.value,
    })

    console.log(this.state)
  }

  render() {
    return (
      <div className="App">
        <h1>Phonebook</h1>
        <Form
          handleInputChange={this.handleInputChange}
          contacts={this.state.contacts}
          name={this.state.name}
          handleSubmit={this.handleSubmit}
        />
        <ContactList />
      </div>
    )
  }
}

export default App
