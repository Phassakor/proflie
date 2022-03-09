// import React, { useState } from "react";
import './Popup.css';
// import { useCookies,Cookies  } from 'react-cookie';
//ใช้ได้เหมือนกันทั้ง react-cookie และ js-cookie
// import Cookies from 'js-cookie'

const Popup = () =>{
/*    
const [auth, setAuth] = useState(false);
const cookies = new Cookies()

function setcookie() {
    Cookies.set('cookieNameTest', "Good A", {path: '/', maxAge: 10})
    
    console.log('set');
  }
function getcookie(){
    var getAuth = Cookies.get('cookieNameTest')
    if (getAuth) {
        setAuth(true)
    }
    else{
        setAuth(false)
    }
    console.log('get');
  }
function check() {
    if (auth == true) {
        console.log(Cookies.get('cookieNameTest'));
    } else {
        console.log('Exprie');
    }
  }
*/

    return(
        <div className="lds-hourglass"></div>
        /* <button onClick={setcookie}>setCookie</button>
        <button onClick={getcookie}>getCookie</button>
        <button onClick={check}>click</button> */ 
    )
}

export default Popup;







