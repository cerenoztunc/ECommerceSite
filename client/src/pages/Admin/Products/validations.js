import * as yup from 'yup';

const editScheme = yup.object().shape({
    title: yup.string().required("Required field!"),
    description: yup.string().min(5,"The description must be at least 5 characters!").required("Required field!"),
    price: yup.string().required("Required field!")
});

export default editScheme;