import React, {Component} from 'react';
//exercise
//https://coursework.vschool.io/travel-form/
//formik
class App extends Component {
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
        console.log(event)
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
        let restrictions = this.restrictionsText()

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
        return <div>
            <form>
                <label>
                    First name:
                    <input type="text" name="firstName"
                           placeholder="First name"
                           value={this.state.firstName}
                           onChange={this.handleChange}/>
                </label>
                <br/>
                <label>
                    Last name:
                    <input type="text" name="lastName"
                           placeholder="Last name"
                           value={this.state.lastName}
                           onChange={this.handleChange}/>
                </label>
                <br/>
                <label>
                    Age:
                    <input type="number" name="age"
                           placeholder="Ex: 24"
                           value={this.state.age}
                           onChange={this.handleChange}/>
                </label>
                <br/>
                <p>Gender: </p>
                <label>
                    <input type="radio"
                           name="gender"
                           value="male"
                           checked={this.state.gender === "male"}
                           onChange={this.handleChange}/>
                    Male
                </label>
                <br/>
                <label>
                    <input type="radio"
                           name="gender"
                           value="female"
                           checked={this.state.gender === "female"}
                           onChange={this.handleChange}/>
                    Female
                </label>
                <br/>
                <label>
                    <input type="radio"
                           name="gender"
                           value="trans"
                           checked={this.state.gender === "trans"}
                           onChange={this.handleChange}/>
                    Female
                </label>
                <br/>
                <label>
                    Location:
                <select
                    value={this.state.location}
                    onChange={this.handleChange}
                    name="location">
                    <option value="">Select an option</option>
                    <option value="recife">Recife</option>
                    <option value="miami">Miami</option>
                    <option value="moscou">Moscou</option>
                    <option value="madri">Madri</option>
                </select>
                </label>
                <br />
                <p>Dietary restrictions: </p>
                <label>
                    <input type="checkbox"
                           name="isVegetarian"
                           checked={this.state.isVegetarian}
                           onChange={this.handleChange}/>
                    Vegetarian
                </label>
                <br />
                <label>
                    <input type="checkbox"
                           name="isKosher"
                           checked={this.state.isKosher}
                           onChange={this.handleChange}/>
                    Kosher
                </label>
                <br />
                <label>
                    <input type="checkbox"
                           name="isLactoseFree"
                           checked={this.state.isLactoseFree}
                           onChange={this.handleChange}/>
                    Lactose free
                </label>
                <br />
                <button type="button" onClick={this.submitForm}>Submit</button>
            </form>

        </div>;
    }
}

export default App;
