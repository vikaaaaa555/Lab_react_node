import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const InstructorPage = () => {
    const [instructor, setInstructor] = useState({});
    const { id } = useParams();

    useEffect(() => {
        fetchOneInstructor(id).then((data) => setInstructor(data));
    }, [id]);

    return (
        <div style={{ marginTop: '20px', marginLeft: '20px' }}>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                <div style={{ width: '300px', height: '300px' }}>
                    <img
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        src={process.env.REACT_APP_API_URL + instructor.photo}
                        alt={`Photo of ${instructor.name}`}
                    />
                </div>
                <div style={{ marginLeft: '20px', display: 'flex', flexDirection: 'column' }}>
                    <h2>{instructor.name}</h2>
                    <div style={{ marginTop: '10px' }}>
                        <strong>Email:</strong> {instructor.email}
                    </div>
                    <div style={{ marginTop: '10px' }}>
                        <strong>Phone:</strong> {instructor.phone_number || 'N/A'}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InstructorPage;
