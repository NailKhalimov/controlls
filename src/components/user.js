import React, { Component } from 'react';

import FormFields from '../widgets/Forms/FormField';

class User extends Component {

    state = {
        formData: {
            name: {
                element: 'input',
                value: '',
                label: true,
                labelText: 'Name',
                config: {
                    name: 'name_input',
                    type: 'text',
                    placeholder: 'Enter your name'
                }
            },
            lastname: {
                element: 'input',
                value: '',
                label: true,
                labelText: 'LastName',
                config: {
                    name: 'lastName_input',
                    type: 'text',
                    placeholder: 'Enter your LastName'
                }
            }   
        }
    }

    updateForm = (newState) => {
        this.setState({
            formData: newState
        })
    }

    submitForm = (event) => {
        event.preventDefault();

        let dataToSubmit = {};

        for (let key in this.state.formData) {
            dataToSubmit[key] = this.state.formData[key].value;
        }
        console.log(dataToSubmit)
    }

    render(){
        return(
            <div className='container'>
                <form onSubmit={this.submitForm}>
                    <FormFields
                        formData={this.state.formData}
                        change={(newState) => {this.updateForm(newState)}}
                    />
                    <button type='submit'>Submit</button>
                </form>
            </div>
        )
    }
}

export default User;