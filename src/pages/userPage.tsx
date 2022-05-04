import React from 'react';
import {Link,Navigate} from 'react-router-dom';
import firebase from '../configuration/configuration';
import 'firebase/compat/firestore';

function clearBox()
        {
            document.getElementById("zonaquizz")!.innerHTML = "";
        }

const UserPage = () => {
    const x = JSON.parse(sessionStorage.getItem("loggedUser")!)
    const css=`
      `
    return(
        <>
        <style>
            {css}
        </style>
        <div id="dateuser">
            <h3>Bine ai venit, {x.loggedName}</h3>
            {/* <h3>Bine ai venit, {x.hasOwnProperty("loggedName") ? x.loggedName: <Navigate to="*"/>}</h3> */}
        </div>
        <button className="deconectare" onClick={()=>{
                sessionStorage.removeItem("loggedUser")
                alert("V-ati deconectat de pe site")
                }}>
                <Link className="link" to="/startingPage"> Deconectare</Link>
            </button>
        </>
    );
};

export default UserPage;