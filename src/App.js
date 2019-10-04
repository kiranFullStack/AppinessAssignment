import React from "react"
import "./App.css"
import { useDispatch, useSelector } from "react-redux"

function App() {
  const user = useSelector(state => state.user)
  const dispatch = useDispatch()

  console.log(user)
  return (
    <div className="App">
      <h1>Redux Hooks</h1>

      <table>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Gender</th>
          <th>Email</th>
        </tr>
        <tbody>
          {user.map(user1 => (
            <tr key={user1.id}>
              <td>{user1.name}</td>
              <td>{user1.age}</td>
              <td>{user1.gender}</td>
              <td>{user1.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default App
