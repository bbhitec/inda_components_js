import { useState } from "react";
import './FormFrame.css'
import Switch from './Switch'
import FormInput from "./FormInput";
import { FaCircleExclamation } from "react-icons/fa6";


export const FormFrame = () => {
    // this state will hold the form values anf wil re-render upon any change
    // it can be further improved with (basic) usage of useRef or
    // (advanced) with external libraries like formik or React Hook Forms
    const [values, setValues] = useState({
        username: "",
        email: "",
        birthday: "",
        password: "",
        confirmPassword: "",
    });


    // introduce any number of input fields those can be described by the cliend or
    // populated by a service. each field will have its own error state and validation rule
    //  - placeholders are optional
    const inputFields = [
        {
            id: 1,
            name: "username",
            type: "text",
            errorMessage: "על שם המשתמש להיות בין 3-16 תווים בלועזית, ללא תווים מיוחדים",
            label: "שם משתמש",
            pattern: "^[A-Za-z0-9]{3,16}$",
        },
        {
            id: 2,
            name: "email",
            type: "email",
            errorMessage: "נא הזינו מייל תקין",
            label: 'דוא"ל*',
            placeholder: "ישומש לצרכי החשבון בלבד",
            required: true,
        },
        {
            id: 4,
            name: "password",
            type: "password",
            errorMessage: "סיסמא חייבת להיות בלועזית, בת 8-20 תווים ולכלול לפחות: אות, ספרה ותו מיוחד",
            label: "סיסמה*",
            pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
            required: true,
        },
        {
            id: 5,
            name: "confirmPassword",
            type: "password",
            errorMessage: "הסיסמאות אינן תואמות",
            label: "אימות סיסמא*",
            pattern: values.password,
            required: true,
        },
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        // final submit logic and backend handlers/calls go here
    };

    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
        console.log("hi")
    };

    return (
        <>
            <form className='main-form' onSubmit={handleSubmit}>
                {/* Form Header */}
                <div className="form-header">
                    <div className="form-title">
                        <h1>
                            הירשמו לעדכונים שלנו!
                        </h1>
                        <p>
                            צרו חשבון משתמש אישי כדי לקבל את העדכונים החמים והרלוונטיים ביותר עבורכם!
                        </p>
                    </div>
                    <div className="infobox">
                        <FaCircleExclamation />
                        <p>
                            שימו לב! נראה כי מי שכתב את הטופס הזה ידע את המלאכה שלו 😉
                        </p>
                    </div>
                </div>

                {/* Form Main Area */}
                <div className="form-main-area">
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

                        <p>
                            קראתי ואני מסכים/ה <a href="">לתנאי השימוש בשירות</a> וכל הניספחים ונראה שיהיה לי ממש כיף לעבוד עם מי שהכין את זה
                        </p>
                    </div>
                </div>

                {/* Form Footer */}
                <div className='form-footer'>
                    <button type="submit">הרשמה</button>
                    <p>
                        * שדות חובה
                    </p>
                </div>
            </form>
        </>
    )
}
