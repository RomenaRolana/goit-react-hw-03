import { useEffect, useState } from "react";
import "./App.css";
import ContactForm from "./components/ContactForm/ContactForm";
import { nanoid } from "nanoid";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";
import initialContacts from "./contacts.json";

function App() {
  const [contacts, setContacts] = useState(() => {
    const stringifiedContacts = localStorage.getItem("contacts");
    if (!stringifiedContacts) return initialContacts;

    const parsedContacts = JSON.parse(stringifiedContacts);
    return parsedContacts;
  });

  const [search, setSearch] = useState("");

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (newContact) => {
    const newUserContact = {
      ...newContact,
      id: nanoid(),
    };
    setContacts((prevContacts) => {
      return [...prevContacts, newUserContact];
    });
  };

  const deleteContact = (contactId) => {
    setContacts((prevContacts) => {
      return prevContacts.filter((contact) => contact.id !== contactId);
    });
  };

  const visibleContact = contacts.filter((contact) => {
    return contact.name.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAdd={addContact} />
      <SearchBox value={search} onSearch={setSearch} />
      <ContactList contacts={visibleContact} onDelete={deleteContact} />
    </div>
  );
}

export default App;
