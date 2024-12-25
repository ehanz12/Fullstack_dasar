import { useEffect, useState } from 'react'
import './App.css';

function App() {
  const endpoint = " http://localhost:3001/api/v1/users";
  const [users, setUser] = useState([]);

    const fetchusers = async() => {
      const response = await fetch(endpoint);
      const data = await response.json();
      setUser(data);
    }

    useEffect (() => {
        fetchusers();
    }, []);

    return (
    <>
     <h1>testing fullstack</h1>
     {/* untuk looping array dari data username */}
     {users?.data?.map((user) => {
        return (
          <div key={user.id}>
            <p>{user.username}</p>
          </div>
        );
     })}
    </>
  )
}

export default App
