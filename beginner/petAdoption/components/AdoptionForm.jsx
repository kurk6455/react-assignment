import { DetailsContext } from "./DetailsContextProvider";
import { useRef, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

export function AdoptionForm() {
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