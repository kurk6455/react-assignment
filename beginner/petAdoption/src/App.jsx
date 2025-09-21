import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom'
import { createContext, useContext, useEffect, useRef, useState } from 'react'
import './App.css'


const DetailsContext = createContext();

function DetailsContextProvider({ children }) {
  const [details, setDetails] = useState([]);

  return (
    <DetailsContext.Provider value={{ details, setDetails }}>
      {children}
    </DetailsContext.Provider>
  );
}

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
  const { details, setDetails } = useContext(DetailsContext);

  const petName = useRef();
  const petType = useRef();
  const breed = useRef();
  const name = useRef();
  const email = useRef();
  const phone = useRef();

  function submitFn() {
    //it's asynchronous
    setDetails([...details, {
      petName: petName.current.value,
      petType: petType.current.value,
      breed: breed.current.value,
      name: name.current.value,
      email: email.current.value,
      phone: phone.current.value,
    }]);
  }

  //Print the detial only when details is updated
  useEffect(function () {
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
  const { details } = useContext(DetailsContext);

  const detailData = details.map(ele => {
    return (
      <tr>
        <td>{ele.petName}</td>
        <td>{ele.petType}</td>
        <td>{ele.breed}</td>
        <td>{ele.name}</td>
        <td>{ele.email}</td>
        <td>{ele.phone}</td>
      </tr>
    );
  })

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Pet Name</th>
            <th>Pet Type</th>
            <th>Breed</th>
            <th>Adopter Name</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {detailData}
        </tbody>
      </table>
    </>
  )
}

export default App
