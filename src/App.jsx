import{ useState } from 'react'
import './App.css'

function App() {
 const [name, setName] = useState("Sofía")
 const [newName, setNewName] = useState("")

  return (
  <div className="App">
      <h2>Nombre del profesor: {name}</h2>

      <h3>Elige un profesor:</h3>
      <ul style={{ cursor: 'pointer', listStyle: 'none', padding: 0 }}>
        <li onClick={() => setName("Data")}>Data</li>
        <li onClick={() => setName("Reyes")}>Reyes</li>
        <li onClick={() => setName("Yolanda")}>Yolanda</li>
      </ul>

 
      <h3>Añadir nuevo profesor:</h3>
      <form
        onSubmit={(e) => {
          e.preventDefault()              // evita recargar la página
          const trimmed = newName.trim()
          if (trimmed !== "") {
            setName(trimmed)
            setNewName("")              // limpia el input
          } else {
            alert("Escribe algo antes de añadir")
          }
        }}
      >
        <input
          type="text"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
          placeholder="Escribe un nombre..."
          style={{ padding: '8px', marginRight: '8px' }}
        />
        <button type="submit">Add</button>
      </form>
    </div>
);
}

export default App


