import React from 'react';

function FormComponent(props) {
    return <div>
        <form>
            <label>
                First name:
                <input type="text" name="firstName"
                       placeholder="First name"
                       value={props.data.firstName}
                       onChange={props.handleChange}/>
            </label>
            <br/>
            <label>
                Last name:
                <input type="text" name="lastName"
                       placeholder="Last name"
                       value={props.data.lastName}
                       onChange={props.handleChange}/>
            </label>
            <br/>
            <label>
                Age:
                <input type="number" name="age"
                       placeholder="Ex: 24"
                       value={props.data.age}
                       onChange={props.handleChange}/>
            </label>
            <br/>
            <p>Gender: </p>
            <label>
                <input type="radio"
                       name="gender"
                       value="male"
                       checked={props.data.gender === "male"}
                       onChange={props.handleChange}/>
                Male
            </label>
            <br/>
            <label>
                <input type="radio"
                       name="gender"
                       value="female"
                       checked={props.data.gender === "female"}
                       onChange={props.handleChange}/>
                Female
            </label>
            <br/>
            <label>
                <input type="radio"
                       name="gender"
                       value="trans"
                       checked={props.data.gender === "trans"}
                       onChange={props.handleChange}/>
                Female
            </label>
            <br/>
            <label>
                Location:
                <select
                    value={props.data.location}
                    onChange={props.handleChange}
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
                       checked={props.data.isVegetarian}
                       onChange={props.handleChange}/>
                Vegetarian
            </label>
            <br />
            <label>
                <input type="checkbox"
                       name="isKosher"
                       checked={props.data.isKosher}
                       onChange={props.handleChange}/>
                Kosher
            </label>
            <br />
            <label>
                <input type="checkbox"
                       name="isLactoseFree"
                       checked={props.data.isLactoseFree}
                       onChange={props.handleChange}/>
                Lactose free
            </label>
            <br />
            <button type="button" onClick={props.submitForm}>Submit</button>
        </form>

    </div>;
}

export default FormComponent;