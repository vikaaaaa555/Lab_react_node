import React from 'react'
import '../site.css'
import {createInstructor, getInformations, getInstructors, getPlacements} from '../../http/instructorApi'

const CreateAnimal = ({ onSubmit, onCancel }) => {
    class AnimalForm extends React.Component {
        constructor(props) {
            super(props)

            var name = props.name;
            var nameIsValid = this.validateName(name);
            var admission = props.admission
            var admissionIsValid = this.validateAdmission(admission)
            var birth = props.birth
            var birthIsValid = this.validateBirth(birth)
            var image = props.image
            var imageIsValid = this.validateImage(image)
            var description = props.description
            var descriptionIsValid = this.validateDescription(description)

            this.state = {name: name, nameValid: nameIsValid,
                admission: admission, admissionValid: admissionIsValid,
                birth: birth, birthValid: birthIsValid,
                image: image, imageValid: imageIsValid,
                description: description, descriptionValid: descriptionIsValid,
                placements: [], informations: [], placement: 1, information: 1}

            this.onNameChange = this.onNameChange.bind(this)
            this.onAdmissionChange = this.onAdmissionChange.bind(this)
            this.onBirthChange = this.onBirthChange.bind(this)
            this.onImageChange = this.onImageChange.bind(this)
            this.onDescriptionChange = this.onDescriptionChange.bind(this)
            this.onPlacementChange = this.onPlacementChange.bind(this);
            this.onInformationChange = this.onInformationChange.bind(this);
            this.handleSubmit = this.handleSubmit.bind(this)
        }

        componentDidMount() {
            getPlacements().then((placements) => this.setState({ placements }));
            getInformations().then((informations) => this.setState({ informations }));
        }

        validateName(name){
            return (name) ? name.length >= 3 : false
        }
        validateAdmission(admission){
            const today = new Date()
            today.setHours(0, 0, 0, 0)
            const admissionDate = new Date(admission)
            return (admissionDate) ? admissionDate <= today : false
        }
        validateBirth(birth, admission) {
            const admissionDate = new Date(admission)
            const birthDate = new Date(birth)
            return (birthDate && admissionDate) ? (birthDate <= admissionDate) : false
        }
        validateImage(image) {
            const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;
            return (image) ? urlRegex.test(image) : false;
        }
        validateDescription(description) {
            return true
        }

        onNameChange(e) {
            if (e.target.value) {
                var val = e.target.value
                var valid = this.validateName(val)
                this.setState({name: val, nameValid: valid})
            }
        }
        onAdmissionChange(e) {
            if (e.target.value) {
                var val = e.target.value
                var valid = this.validateAdmission(val)
                this.setState({admission: val, admissionValid: valid})
            }
        }
        onBirthChange(e) {
            if (e.target.value) {
                var val = e.target.value
                var valid = this.validateBirth(val, this.state.admission)
                this.setState({birth: val, birthValid: valid})
            }
        }
        onImageChange(e) {
            if (e.target.value) {
                var val = e.target.value
                var valid = this.validateImage(val)
                this.setState({image: val, imageValid: valid})
            }
        }
        onDescriptionChange(e) {
            if (e.target.value) {
                var val = e.target.value
                var valid = this.validateDescription(val)
                this.setState({description: val, descriptionValid: valid})
            }
        }
        onPlacementChange(e) {
            this.setState({ placement: e.target.value });
        }
        onInformationChange(e) {
            this.setState({ information: e.target.value });
        }

        handleSubmit(e) {
            e.preventDefault()

            const { nameValid, admissionValid, birthValid, imageValid, descriptionValid,
                name, admission, birth, image, description, placement, information } = this.state;

            if (nameValid && admissionValid && birthValid && imageValid && descriptionValid) {
                try {
                    const animal = {
                        name: name,
                        admission: admission,
                        birth: birth,
                        image: image,
                        description: description,
                        placementId: placement,
                        informationId: information
                    }
                    console.log(animal)
                    const data = createInstructor(animal).then(data => {
                        console.log(data)
                        if (data.status == 404) {
                            alert('Invalid data!')
                        }
                    })
                } catch (e) {
                    alert('Invalid data!')
                }
            } else {
                alert('Invalid data!')
            }

            onSubmit()
        }

        render() {
            var nameColor = this.state.nameValid === true ? 'black' : 'red'
            var admissionColor = this.state.admissionValid === true ? 'black' : 'red'
            var birthColor = this.state.birthValid === true ? 'black' : 'red'
            var imageColor = this.state.imageValid === true ? 'black' : 'red'
            var descriptionColor = this.state.descriptionValid === true ? 'black' : 'red'

            return (
                <form>
                    <p>
                        <input type='text' value={this.state.name} placeholder='Name'
                               onChange={this.onNameChange} style={{borderColor:nameColor}}/>
                    </p>
                    <p>
                        <input type='date' value={this.state.admission} placeholder='Admission'
                               onChange={this.onAdmissionChange} style={{borderColor:admissionColor}}/>
                    </p>
                    <p>
                        <input type='date' value={this.state.birth} placeholder='Birth'
                               onChange={this.onBirthChange} style={{borderColor:birthColor}}/>
                    </p>
                    <p>
                        <input type='text' value={this.state.image} placeholder='Image'
                               onChange={this.onImageChange} style={{borderColor:imageColor}}/>
                    </p>
                    <p>
                        <input type='text' value={this.state.description} placeholder='Description'
                               onChange={this.onDescriptionChange} style={{borderColor:descriptionColor}}/>
                    </p>
                    <select onChange={this.onPlacementChange}>
                        {this.state.placements.map((placement) => (
                            <option key={placement.id} value={placement.id}>
                                {placement.name}
                            </option>
                        ))}
                    </select>
                    <select onChange={this.onInformationChange}>
                        {this.state.informations.map((information) => (
                            <option key={information.id} value={information.id}>
                                {information.animal_class + ' ' + information.species}
                            </option>
                        ))}
                    </select>
                    <button type="submit" onClick={this.handleSubmit}>OK</button>
                    <a className='simpleLink' onClick={onCancel}>Cancel</a>
                </form>
            );
        }
    }
    return (
        <AnimalForm name='' admission='' birth='' image='' description=''></AnimalForm>
    );
};

export default CreateAnimal