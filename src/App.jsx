import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    setUsers(response.data);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <div class="flex h-screen items-center justify-center bg-gray-100">
        <ul class="max-w-md space-y-1 text-body list-disc list-inside">
          {users?.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
        <p>Hola amigo Abraham, esta es una actualizacion al codigo principal</p>
      </div>
    </>
  );
}

export default App;
