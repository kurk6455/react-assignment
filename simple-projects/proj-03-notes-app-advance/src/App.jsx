import { NotesContextProvider } from './utility/NotesContext'
import { NotesApp } from './components/NotesApp'
import './App.css'

function App() {
  return (
    <NotesContextProvider>
      <NotesApp />
    </NotesContextProvider>
  )
}


export default App
