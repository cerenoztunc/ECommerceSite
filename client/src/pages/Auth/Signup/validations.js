import * as yup from 'yup';

const validations = yup.object().shape({
    email: yup
    .string()
    .email("Please enter a valid field")
    .required("Required field!"),
    password: yup
    .string()
    .min(5, "Your password must be at least 5 characters!")
    .required("Required field!"),
    passwordConfirm: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords don't match!")
    .required("Required field!")

})

export default validations;