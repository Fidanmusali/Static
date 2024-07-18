import React, { useState } from 'react'
import './style.css'
import axios from 'axios';

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const refreshSub = (e) => {
    e.preventDefault()
    const url = "http://localhost:3001/users";

    const userData = {
      name: name,
      email: email,
      message: message
    }


    const response = axios.post(url, userData);
    console.log(response.data);
    setName('');
    setEmail('');
    setMessage('');

  }

  return (
    <>
      <div className="contact">
        <form onSubmit={refreshSub}>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder='Name' />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Email' />
          <textarea 
          value={message}
          onChange={(e)=>setMessage(e.target.value)}
          placeholder='Message'></textarea>
          <input type="submit" value="submit" />
        </form>

      </div>
    </>
  )
}

export default Contact