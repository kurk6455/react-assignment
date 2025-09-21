import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { useState } from 'react'
import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="/submit" element={<AdoptionTable />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

function Layout() {
  return (
    <>
      <Header />
      <AdoptionForm />
    </>
  )
}


function Header() {

  return (
    <>
      <div>Pet Adoption Form</div>
    </>
  )
}

function AdoptionForm() {

  function submitFn(){

  }

  return (
    <>
      <label>Pet Name</label><br/>
      <input type="text" placeholder='Pet Name...'/><br/>
      <label>Pet Type</label><br/>
      <input type="text" placeholder='Pet Type...'/><br/>
      <label>Breed</label><br/>
      <input type="text" placeholder='Breed...'/><br/>
      <label>Your Name</label><br/>
      <input type="text" placeholder='Your Name...'/><br/>
      <label>Email</label><br/>
      <input type="text" placeholder='Email...'/><br/>
      <label>Phone</label><br/>
      <input type="text" placeholder='Phone...'/><br/>
      <Link onClick={submitFn} to="/submit">Submit</Link>
    </>
  )
}

function AdoptionTable(){

  return(
    <>
      <div>Inside adoption table</div>
    </>
  )
}

export default App
