import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {DetailsContextProvider} from './components/DetailsContextProvider'
import {Layout} from './components/Layout'
import {AdoptionForm} from './components/AdoptionForm'
import {AdoptionTable} from './components/AdoptionTable'
import './App.css'


function App() {

  return (
    <DetailsContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<AdoptionForm />} />
            <Route path="/submit" element={<AdoptionTable />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </DetailsContextProvider>
  )
}

export default App