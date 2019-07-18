import React, {Component} from 'react';
import FormComponent from "./FormComponent";

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            age: '',
            gender: '',
            location: '',
            isVegetarian: false,
            isKosher: false,
            isLactoseFree: false,
        };
        this.handleChange = this.handleChange.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }

    handleChange(event) {
        const {name, value, type, checked} = event.target;
        if (type === 'checkbox') {
            return this.setState( {
                [name]: checked
            })
        }
        return this.setState({
            [name]: value
        });
    }

    submitForm() {
        let msg = '';
        if(this.state.firstName !== '' && this.state.lastName !== '') {
            msg += 'Name: ' + this.state.firstName + ' ' + this.state.lastName + '\n'
        }
        if(this.state.age !== '') {
            msg += 'Age: ' + this.state.age + '\n'
        }
        if(this.state.gender !== '') {
            msg += 'Gender: ' + this.state.gender + '\n'
        }
        if(this.state.location !== '') {
            msg += 'Location: ' + this.state.location + '\n'
        }
        let restrictions = this.restrictionsText();

        if(restrictions !== '' ) {
            msg += 'Dietary restriction: ' + restrictions + '\n'
        }
        alert(msg);
    }

    restrictionsText() {
        let restrictions = '';
        if(this.state.isVegetarian ) {
            restrictions +=  'Vegeterian, '
        }
        if(this.state.isKosher ) {
            restrictions +=  'Kosher, '
        }
        if(this.state.isLactoseFree ) {
            restrictions +=  'Lactose free, '
        }
        if(restrictions !== '') {
            restrictions = restrictions.substr(0, restrictions.length - 2)
        }
        return restrictions;
    }

    render() {
        return <FormComponent handleChange={this.handleChange}
                              submitForm={this.submitForm}
                              restrictionsText={this.restrictionsText}
                       data={this.state} />
    }
}

export default Form;