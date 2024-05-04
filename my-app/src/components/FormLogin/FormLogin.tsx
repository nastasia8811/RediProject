
import { Formik, Form } from 'formik';
import FormikControl from "../CustomInput/FormikControl";
import PasswordInput from "../CustomInput/PasswordInput";
import {useState} from "react";

interface FormLoginProps {
    onSubmit: (values: string) => void;
    initialValues: any;
    validationSchema: any;
}

const FormLogin: React.FC<FormLoginProps> = ({onSubmit, initialValues, validationSchema}) => {
    const [showPassword, setShowPassword] = useState(false);
    return (
        <>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            >
                {(isValid) => (
            <Form className="form-login" style={{ width: '100%' }}>
                <div className="form-login__grid_wrapper">

                    <FormikControl
                        type="text"
                        control="input"
                        color="success"
                        label="Login"
                        className="form-login__input"
                        name="login"
                        placeholder="Enter your login"
                        variant="outlined"
                        id="outlined-multiline-flexible"
                        required
                    />

                    <PasswordInput
                        name="password"
                        placeholder="Enter your password"
                        label="Enter your password"
                        showPassword={showPassword}
                        onClick={() => setShowPassword(!showPassword)}
                        onMouseDown={(e) => e.preventDefault()}
                    />
                </div>

                <button type="submit" disabled={!isValid}>Login</button>
            </Form>
                )}
            </Formik>
        </>
    )
}

export default FormLogin;