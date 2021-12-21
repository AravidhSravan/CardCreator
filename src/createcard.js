import React, { useState } from 'react'
import './App.css'
function Cardcreate() {
    const elements = [];
    var [display, setDisplay] = useState(0);
    var [name, setName] = useState(' ');
    var [mail, setMail] = useState('');
    var [contact, setContact] = useState('');
    var [url, setUrl] = useState('');
    const handleSubmit = (event) => {
        event.preventDefault();
        let temp =
        {
            name: document.getElementById('1').value,
            mail: document.getElementById('2').value,
            contact: document.getElementById('3').value,
            url: document.getElementById('4').value,
        }
        elements.push(temp);
        setName(name = temp.name);
        setMail(mail = temp.mail);
        setContact(contact = temp.contact);
        setUrl(url = temp.url);
        setDisplay(display = 1);
    };
    return (
        <div className="main">
            <div className="container">
                <form onSubmit={handleSubmit}>
                    <input id="1" placeholder="Your name" name="name" className="nameField" />
                    <input id="2" type="text" name="mail" placeholder="Your email" className='inputField' style={{ marginTop: "20%" }} />
                    <input id="3" type="text" name="mbnumber" className='inputField' placeholder='Your Contact number' style={{ marginTop: "33%" }}></input>
                    <input id="4" type="text" name="imgurl" className='inputField' placeholder='image url' style={{ marginTop: "46%" }}></input>
                    <button className="createbtn"> Create Card </button>
                </form>
            </div>
            <div>
                {display === 1 ? 
                    <div className='card'>
                        <div className='imgalign'> 
                            <img src={url} style={{ width: "100%", height: "100%", objectFit: "contain" }} /> 
                        </div>
                        <div className='content'> 
                            <span>{name}</span> <br></br> 
                            <span>{mail}</span> <br></br> 
                            <span>{contact}</span> 
                            <div>
                                <button className="deletebtn" onClick={() => setDisplay(display = 0)}> Create Card </button> 
                            </div> 
                        </div>
                    </div> : <div> </div>}
            </div>
        </div>
    )
}
export default Cardcreate