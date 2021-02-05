import * as yup from 'yup';

export const validationLogin = yup.object({
    username: yup
        .string('Enter your username')
        .min(6, 'Username must between 6 and 15 characters')
        .max(15, 'Username must between 6 and 15 characters')
        .matches(/^\S+$/, 'Username must not have whitespace')
        .required('*Username is required'),
    password: yup
        .string('Enter your password')
        .min(6, 'Password must between 6 and 15 characters')
        .max(15, 'Password must between 6 and 15 characters')
        .required('*Password is required'),
});

export const validationShare = yup.object({
    url: yup
        .string('Enter your Youtube url')
        .matches(/^(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})?$/, 'Youtube url is invalid!')
        .required('*Youtube url is required'),
});