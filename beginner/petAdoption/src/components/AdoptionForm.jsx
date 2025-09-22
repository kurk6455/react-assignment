import { DetailsContext } from "./DetailsContextProvider";
import { useRef, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import './Css/AdoptionForm.css';

export function AdoptionForm() {
    const { details, setDetails } = useContext(DetailsContext);

    const petName = useRef();
    const petType = useRef();
    const breed = useRef();
    const name = useRef();
    const email = useRef();
    const phone = useRef();

    const emailError = useRef();

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

    // useEffect(function () {
    //     const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    //     {emailRegex.test(email) ? emailError.current = "Invalid Email" : emailError.current = ""}
    // }, [petName.current])



    return (
        <div className="form">
            <div>
                <div>
                    <label className="labelTxt">Pet Name</label><br />
                    <input ref={petName} className="inputBox" type="text" placeholder='Pet Name...' /><br />
                    {/* <p ref={emailError}></p> */}
                </div>
                <div>
                    <label className="labelTxt">Pet Type</label><br />
                    <input ref={petType} className="inputBox" type="text" placeholder='Pet Type...' /><br />
                </div>
                <div>
                    <label className="labelTxt">Breed</label><br />
                    <input ref={breed} className="inputBox" type="text" placeholder='Breed...' /><br />
                </div>
                <div>
                    <label className="labelTxt">Your Name</label><br />
                    <input ref={name} className="inputBox" type="text" placeholder='Your Name...' /><br />
                </div>
                <div>
                    <label className="labelTxt">Email</label><br />
                    <input ref={email} className="inputBox" type="text" placeholder='Email...' /><br />
                </div>
                <div>
                    <label className="labelTxt">Phone</label><br />
                    <input ref={phone} className="inputBox" type="text" placeholder='Phone...' /><br />
                </div>
                <Link className="submitBtn" onClick={submitFn} to='/submit'>Submit</Link>
            </div>
        </div>
    )
}