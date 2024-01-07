import React from 'react';
import {observe} from "mobx";
import {useContext} from "react/index";
import {Context} from "../index";
import '../site.css'

const InstructorItem = observe(() => {
    const {instructor} = useContext(Context)
    return (
        <div className="device-list">
            {instructor.instructors.map(device => (
                <div key={device.id} className="device-item">
                    <InstructorItem device={device} />
                </div>
            ))}
        </div>
    );
});

export default InstructorItem;