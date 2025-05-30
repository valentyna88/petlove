import * as yup from 'yup';

const numberRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;

export const registerSchema = yup.object().shape({
  name: yup
    .string()
    .min(2, 'Name must be at least 2 characters')
    .required('Name is required'),
  email: yup
    .string()
    .email('Invalid email')
    .matches(numberRegex, 'Invalid email format')
    .required('Email is required'),
  password: yup
    .string()
    .min(7, 'Password must be at least 7 characters')
    .required('Password is required'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match')
    .required('Confirm password is required'),
});

export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email('Invalid email')
    .matches(numberRegex, 'Invalid email format')
    .required('Email is required'),
  password: yup
    .string()
    .min(7, 'Password must be at least 7 characters')
    .required('Password is required'),
});

export const editUserSchema = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup
    .string()
    .matches(numberRegex, 'Invalid email format')
    .email('Invalid email')
    .required('Email is required'),
  avatar: yup
    .string()
    .matches(
      /^https?:\/\/.*\.(?:png|jpg|jpeg|gif|bmp|webp)$/,
      'Invalid avatar URL'
    )
    .required('Avatar URL is required'),
  phone: yup
    .string()
    .matches(/^\+38\d{10}$/, 'Phone must be in format +38XXXXXXXXXX')
    .required('Phone number is required'),
});
