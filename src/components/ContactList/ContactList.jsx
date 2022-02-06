const ContactList = ({contacts, filter}) => {
  return (
    <>
      <h2>Contacts</h2>
      <label>
        Find contact by name<br></br>
        <input></input>
      </label>
      <ul>
        {/* {contacts.map(({ id, name, number }) => (
          <li key={id}>
            <p>
              {name}
              <span> {number}</span>
            </p>
          </li>
        ))} */}
        {filter === "" ? ({contacts.map(({ id, name, number }) => (
          <li key={id}>
            <p>
              {name}
              <span> {number}</span>
            </p>
          </li>
        ))
          }) :
          ({
            const searchContact = contacts.filter(el => {
              el.toLowerCase().includes(filter.toLowerCase())
            })
            searchContact.map(({ id, name, number }) => (
          <li key={id}>
            <p>
              {name}
              <span> {number}</span>
            </p>
          </li>
        ))})
      }
      </ul>
    </>
  )
}
 
export default ContactList;