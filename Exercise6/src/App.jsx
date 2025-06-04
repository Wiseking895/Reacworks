import { useState } from 'react'
import './App.css'

function App() {
  const [contacts, setContacts] = useState([])
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isEditing, setIsEditing] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(null)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formData.name || !formData.email || !formData.message) return

    if (isEditing) {
      const updatedContacts = [...contacts]
      updatedContacts[currentIndex] = formData
      setContacts(updatedContacts)
      setIsEditing(false)
      setCurrentIndex(null)
    } else {
      setContacts([...contacts, formData])
    }

    setFormData({ name: '', email: '', message: '' })
  }

  const handleEdit = (index) => {
    setFormData(contacts[index])
    setIsEditing(true)
    setCurrentIndex(index)
  }

  const handleDelete = (index) => {
    const updatedContacts = contacts.filter((_, i) => i !== index)
    setContacts(updatedContacts)
    // Reset form if editing the deleted contact
    if (isEditing && currentIndex === index) {
      setFormData({ name: '', email: '', message: '' })
      setIsEditing(false)
      setCurrentIndex(null)
    }
  }

  return (
    <div className="container">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows="4"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit">
          {isEditing ? 'Update Contact' : 'Submit'}
        </button>
      </form>

      {contacts.map((contact, index) => (
        <div className="contact-card" key={index}>
          <h4>{contact.name}</h4>
          <p>Email: {contact.email}</p>
          <p>Message: {contact.message}</p>
          <div style={{ marginTop: '10px' }}>
            <button onClick={() => handleEdit(index)} style={{ marginRight: '10px', backgroundColor: '#2ecc71' }}>
              Edit
            </button>
            <button onClick={() => handleDelete(index)} style={{ backgroundColor: '#e74c3c' }}>
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default App
