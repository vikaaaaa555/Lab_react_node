import React from 'react';
import {useHistory} from 'react-router-dom';
import '../site.css';
import {INSTRUCTOR_ROUTE} from "../utils/consts";

const InstructorItem = ({ instructor }) => {
    const history = useHistory();

    const handleClick = () => {
        history.push(INSTRUCTOR_ROUTE + '/' + instructor.id);
    };

    return (
        <div className="instructor-item" onClick={handleClick}>
            <div className="instructor-image">
                <img src={process.env.REACT_APP_API_URL + instructor.photo} alt={instructor.name} />
            </div>
            <div className="instructor-info">
                <div className="instructor-name">{instructor.name}</div>
            </div>
        </div>
    );
};

export default InstructorItem;
