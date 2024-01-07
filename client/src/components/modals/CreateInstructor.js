import React, { useState } from 'react';

// Assuming these functions are provided by ../../http/deviceAPI
import { createInstructor } from "../../http/instructorAPI";

const CreateInstructor = ({ show, onHide }) => {
    const [name, setName] = useState('');
    const [photo, setPhoto] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    const addInstructor = () => {
           createInstructor({ name, photo, email, phone_number: phoneNumber }).then(data => {
           setName('');
           setPhoto('');
           setEmail('');
           setPhoneNumber('');
           onHide();
        });
/*
        console.log('Adding instructor:', { name, photo, email, phone_number: phoneNumber });
        setName('');
        setPhoto('');
        setEmail('');
        setPhoneNumber('');
        onHide();*/
    };

    return (
        <div style={{ display: show ? 'block' : 'none', position: 'fixed', top: '50%', left: '50%',
            transform: 'translate(-50%, -50%)', zIndex: 1000, background: 'white', padding: '20px',
            boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.75)' }}>
            <div style={{ marginBottom: '15px' }}>
                <h4>Add Instructor</h4>
            </div>
            <div style={{ marginBottom: '15px' }}>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Instructor's Name"
                    style={{ width: '100%', padding: '5px' }}
                />
            </div>
            <div style={{ marginBottom: '15px' }}>
                <input
                    type="text"
                    value={photo}
                    onChange={(e) => setPhoto(e.target.value)}
                    placeholder="Photo URL"
                    style={{ width: '100%', padding: '5px' }}
                />
            </div>
            <div style={{ marginBottom: '15px' }}>
                <input
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    style={{ width: '100%', padding: '5px' }}
                />
            </div>
            <div>
                <input
                    type="text"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    placeholder="Phone Number"
                    style={{ width: '100%', padding: '5px' }}
                />
            </div>
            <div>
                <button style={{ marginRight: '10px' }} onClick={onHide}>Close</button>
                <button onClick={addInstructor}>Add Instructor</button>
            </div>
        </div>
    );
};

export default CreateInstructor;
