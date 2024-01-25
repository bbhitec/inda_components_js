
import React, { useState } from 'react'
import "./FormInput.css"


const FormInput = (props) => {

    // using a focused state to arbitrate input validations
    const [focused, setFocused] = useState(false);
    const { label, errorMessage, onChange, id, ...inputProps } = props;

    const handleFocus = (e) => {
        setFocused(true);
    };

    return (
        <div class="form-input">
            <label className='form-label'>{label}</label>
            <input
                {...props}
                onChange={onChange}
                onBlur={handleFocus}
                onFocus={() =>
                    props.name === "confirmPassword" && setFocused(true)
                }
                focused={focused.toString()}
            />
            <span className='error-label'>{errorMessage}</span>
        </div>
    )
}

export default FormInput