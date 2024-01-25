
import React, { useState } from 'react'
import "./FormInput.css"


// interface FormInputProps {
//     id: number,
//     name: string,
//     type: string,
//     placeholder?: string,
//     errorMessage?: string,
//     label: string,
//     pattern?: string,
//     required?: boolean

//     onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
//     onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
//     value: string;
//     // ...inputProps: any;
// }
// const { label, errorMessage, onChange, id, ...inputProps } = props;


const FormInput = (props) => {

    // using a focused state to arbitrate input validations
    const [focused, setFocused] = useState(false);
    const { label, errorMessage, onChange, id, ...inputProps } = props;

    const handleFocus = (e) => {
        setFocused(true);
    };

    return (
        <div>
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
            <span>{errorMessage}</span>
        </div>
    )
}

export default FormInput