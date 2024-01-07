import React, { useState } from 'react'
import '../site.css'
import CreateAnimal from '../components/modals/CreateInstructor'
import EditAnimal from '../components/modals/EditInstructor'
import DeleteAnimal from '../components/modals/DeleteInstructor'

const Admin = () => {
    const [showForm, setShowForm] = useState(null);

    const handleCreateInstructorClick = () => {
        setShowForm('add');
    };
    const handleEditInstructorClick = () => {
        setShowForm('edit');
    };
    const handleDeleteAnimalClick = () => {
        setShowForm('delete');
    }

    const handleCloseForm = () => {
        setShowForm(null);
    }
    const handleFormSubmit = () => {
        handleCloseForm();
    }

    return (
        <div align='center' style={{marginTop: '50px'}}>
            {showForm === 'add' && <CreateAnimal onSubmit={handleFormSubmit} onCancel={handleCloseForm} />}
            {showForm === 'edit' && <EditAnimal onSubmit={handleFormSubmit} onCancel={handleCloseForm} />}
            {showForm === 'delete' && <DeleteAnimal onSubmit={handleFormSubmit} onCancel={handleCloseForm} />}

            {showForm === null && (
                <div>
                    <button onClick={handleCreateInstructorClick}>Add animal</button>
                    <button onClick={handleEditInstructorClick}>Edit animal</button>
                    <button onClick={handleDeleteAnimalClick}>Delete animal</button>
                </div>
            )}
        </div>
    )
}

export default Admin