import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<AdoptionForm />} />
            <Route path="/submit" element={<AdoptionTable />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

function Layout() {

  return (
    <>
      <Header />
      <Outlet />
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
  const [details, setDetails] = useState([]);

  const petName = useRef();
  const petType = useRef();
  const breed = useRef();
  const name = useRef();
  const email = useRef();
  const phone = useRef();

  function submitFn() {
    //it's asynchronous
    setDetails([...details, {
      petName : petName.current.value,
      petType : petType.current.value,
      breed : breed.current.value,
      name : name.current.value,
      email : email.current.value,
      phone : phone.current.value,
    }]);
  }

  //Print the detial only when details is updated
  useEffect(function(){
    console.log(details);
  }, [details]);

  return (
    <>
      <label>Pet Name</label><br />
      <input ref={petName} type="text" placeholder='Pet Name...' /><br />
      <label>Pet Type</label><br />
      <input ref={petType} type="text" placeholder='Pet Type...' /><br />
      <label>Breed</label><br />
      <input ref={breed} type="text" placeholder='Breed...' /><br />
      <label>Your Name</label><br />
      <input ref={name} type="text" placeholder='Your Name...' /><br />
      <label>Email</label><br />
      <input ref={email} type="text" placeholder='Email...' /><br />
      <label>Phone</label><br />
      <input ref={phone} type="text" placeholder='Phone...' /><br />
      <Link onClick={submitFn} to='/submit'>Submit</Link>
    </>
  )
}

function AdoptionTable() {

  return (
    <>
      <div>Inside adoption table</div>
    </>
  )
}

export default App
