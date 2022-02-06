import { Component } from "react";
import { nanoid } from "nanoid"

class Form extends Component {
  state = {
    name: "",
    number: "",
  }

  handleInputChange = (e) => {
    e.target.name === "name"
      ? this.setState({
          name: e.target.value,
        })
      : this.setState({
          number: e.target.value,
        })
  }

  reset = () => {
    this.setState({ name: "", number: "" })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const newContact = {
      name: this.state.name,
      number: this.state.number,
      id: nanoid(),
    }

    this.props.addContact(newContact)
    this.reset()
  }

  render() {
    // const {  contacts } = this.props
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name
          <input
            value={this.state.name}
            onChange={this.handleInputChange}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label htmlFor="">
          Number
          <input
            onChange={this.handleInputChange}
            value={this.state.number}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    )
  }
}
 
export default Form;