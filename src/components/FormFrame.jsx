import { useState } from "react";
import './FormFrame.css'
import Switch from './Switch'
import FormInput from "./FormInput";


// interface FormValue {
//     username: string,
//     email: string,
//     birthday: string,
//     password: string,
//     confirmPassword: string,
// }

// interface InputSchema {
//     id: number,
//     name: string,
//     type: string,
//     placeholder?: string,
//     errorMessage?: string,
//     label: string,
//     pattern?: string,
//     required?: boolean
// }


export const FormFrame = () => {
    const [values, setValues] = useState({
        username: "",
        email: "",
        birthday: "",
        password: "",
        confirmPassword: "",
    });

    // introduce any number of input fields those can be described by the cliend or
    // populated by a service. each field will have its own error state and validation rule
    const inputFields = [
        {
            id: 1,
            name: "username",
            type: "text",
            // placeholder: "Username",
            errorMessage: "שם משתמש חייב להיות בין 3-16 תווים, ללא תווים מיוחדים",
            label: "שם משתמש",
            pattern: "^[A-Za-z0-9]{3,16}$",
            required: true,
        },
        {
            id: 2,
            name: "email",
            type: "email",
            // placeholder: "Email",
            errorMessage: "נא הזינו מייל תקין",
            label: 'דוא"ל',
            required: true,
        },
        // {
        //     id: 3,
        //     name: "birthday",
        //     type: "date",
        //     // placeholder: "Birthday",
        //     label: "תאריך לידה",
        // },
        {
            id: 4,
            name: "password",
            type: "password",
            // placeholder: "Password",
            errorMessage: "סיסמא חייבת להיות בת 8-20 תווים ולכלול לפחות: אות, ספרה ותו מיוחד",
            label: "סיסמה",
            pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
            required: true,
        },
        {
            id: 5,
            name: "confirmPassword",
            type: "password",
            // placeholder: "Confirm Password",
            errorMessage: "הסיסמאות אינן תואמות",
            label: "אימות סיסמא",
            pattern: values.password,
            required: true,
        },
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        // final submit logic and backend calls go here
    };

    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
        console.log("hi")
    };

    return (
        <>
            <form className='main-form' onSubmit={handleSubmit}>
                <div className="title-texts">
                    <h1>
                        הירשמו לעדכונים שלנו!
                    </h1>
                    <p>
                        נראה כי מי שכתב את הטופס הזה ידע את המלאכה שלו
                    </p>
                </div>

                <div className="input-area">
                    {inputFields.map((input) => (
                        <FormInput 
                            key={input.id}
                            value={values[input.name]}
                            {...input}
                            onChange={onChange}
                        />
                    ))}
                </div>


                {/* Terms of service*/}
                <div className="input-field tos-border">
                    <label className="form-label" htmlFor="terms">תנאי שימוש</label>
                    <div className="tos-area">
                        <Switch labelText='' />

                        {/* className="h-5 w-5 text-teal-500 border-2  background-gray-500 focus:border-teal-500 focus:ring-teal-500" */}
                        <p>
                            קראתי ואני מסכים/ה לתנאי שימוש השירות וכל הניספחים והתנאים המצורפים
                        </p>
                    </div>
                </div>


                <div className='footer'>
                    <button type="submit">הרשמה</button>
                    <p>
                        * שדות חובה
                    </p>
                </div>
                {/* </div> */}
                {/* </div> */}
            </form>
        </>
    )
}
