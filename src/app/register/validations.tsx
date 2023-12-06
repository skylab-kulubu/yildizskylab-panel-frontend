import * as yup from 'yup';

const validations = yup.object().shape({
    email: yup
        .string()
        .email()
        .required(),
    password: yup
        .string()
        .required()
        .min(8),
        firstName: yup
        .string()
        .required()
        .min(3),
        lastName: yup
        .string()
        .required()
        .min(3),

});
export default validations;