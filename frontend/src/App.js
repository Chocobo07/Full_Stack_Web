import React, { useState, useEffect } from 'react';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('/api/hello') 
      .then(res => res.json()) 
      .then(data => setMessage(data.message))
      .catch(err => console.error("Error fetching data:", err));
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    const name = document.getElementById('name').value;

    fetch('/api/greet', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name: name }), 
    })
      .then(res => res.json())
      .then(data => setMessage(data.message))
      .catch(err => console.error("Error posting data:", err));
  };

  return (
    <div className="App">
      <h1>{message}</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Enter your name: </label>
        <input type="text" id="name" name="name" />
        <button type="submit">Greet me!</button>
      </form>
    </div>
  );
}

export default App;
