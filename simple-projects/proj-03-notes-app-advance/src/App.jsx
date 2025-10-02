import { NotesContextProvider } from './utility/NotesContext'
import { NotesApp } from './components/NotesApp'
import './App.css'

function App() {
  console.log("INside app componet")
  return (
    <NotesContextProvider>
      <NotesApp />
    </NotesContextProvider>
  )
}


export default App
