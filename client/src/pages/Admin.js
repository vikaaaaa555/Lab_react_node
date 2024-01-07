import React, { useState } from 'react'
import '../site.css'
import CreateInstructor from '../components/modals/CreateInstructor'
import EditInstructor from '../components/modals/EditInstructor'
import DeleteInstructor from '../components/modals/DeleteInstructor'

const Admin = () => {
    const [createInstructorVisible, setCreateInstructorVisible] = useState(false);
    const [editInstructorVisible, setEditInstructorVisible] = useState(false);
    const [deleteInstructorVisible, setDeleteInstructorVisible] = useState(false);

    return (
        <div className="admin-container">
            <button
                className="admin-button"
                onClick={() => setCreateInstructorVisible(true)}
            >
                Add Instructor
            </button>
            <button
                className="admin-button"
                onClick={() => setEditInstructorVisible(true)}
            >
                Edit Instructor
            </button>
            <button
                className="admin-button"
                onClick={() => setDeleteInstructorVisible(true)}
            >
                Delete Instructor
            </button>
            {createInstructorVisible && <CreateInstructor onHide={() => setCreateInstructorVisible(false)} />}
            {editInstructorVisible && <EditInstructor onHide={() => setEditInstructorVisible(false)} />}
            {deleteInstructorVisible && <DeleteInstructor onHide={() => setDeleteInstructorVisible(false)} />}
        </div>
    );
};

export default Admin;