import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { registerSchema } from '../../utils/validationSchemas';
import { registerUser } from '../../redux/auth/operations';
import { Link } from 'react-router-dom';
import Title from '../Title/Title';
import sprite from '../../assets/sprite.svg';
import css from './RegistrationForm.module.css';
import toast from 'react-hot-toast';

const RegistrationForm = () => {
  const dispatch = useDispatch();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, touchedFields },
  } = useForm({
    resolver: yupResolver(registerSchema),
    mode: 'onBlur',
    defaultValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

  const watchFields = watch();

  const onSubmit = async data => {
    const { name, email, password } = data;
    try {
      await dispatch(registerUser({ name, email, password }));
      toast.success('Registration successful!');
      reset();
    } catch (error) {
      toast.error(`Registration failed: ${error}`);
    }
  };

  return (
    <>
      <div className={css.formContainer}>
        <div>
          <Title>Registration</Title>
          <p className={css.text}>
            Thank you for your interest in our platform.
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={css.inputWrapper}>
            <label className={css.inputLabel}>
              <input
                type="text"
                placeholder="Name"
                className={`${css.input} ${
                  errors.name
                    ? css.inputError
                    : touchedFields.name && !errors.name
                    ? css.inputSuccess
                    : watchFields.name
                    ? css.inputActive
                    : ''
                }`}
                {...register('name')}
              />
              {errors.name && (
                <span className={css.iconCross}>
                  <svg width={18} height={18}>
                    <use href={`${sprite}#icon-cross-small`} />
                  </svg>
                </span>
              )}
              {!errors.name && touchedFields.name && (
                <span className={css.iconCheck}>
                  <svg width={18} height={18}>
                    <use href={`${sprite}#icon-check`} />
                  </svg>
                </span>
              )}
              {errors.name && (
                <p className={css.error}>{errors.name.message}</p>
              )}
            </label>

            <label className={css.inputLabel}>
              <input
                type="email"
                placeholder="Email"
                className={`${css.input} ${
                  errors.email
                    ? css.inputError
                    : touchedFields.email && !errors.email
                    ? css.inputSuccess
                    : watchFields.email
                    ? css.inputActive
                    : ''
                }`}
                {...register('email')}
              />
              {errors.email && (
                <span className={css.iconCross}>
                  <svg width={18} height={18}>
                    <use href={`${sprite}#icon-cross-small`} />
                  </svg>
                </span>
              )}
              {!errors.email && touchedFields.email && (
                <span className={css.iconCheck}>
                  <svg width={18} height={18}>
                    <use href={`${sprite}#icon-check`} />
                  </svg>
                </span>
              )}
              {errors.email && (
                <p className={css.error}>{errors.email.message}</p>
              )}
            </label>

            <label className={css.inputLabel}>
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                className={`${css.input} ${
                  errors.password
                    ? css.inputError
                    : touchedFields.password && !errors.password
                    ? css.inputSuccess
                    : watchFields.password
                    ? css.inputActive
                    : ''
                }`}
                {...register('password')}
              />
              {errors.password && (
                <span className={css.iconCross}>
                  <svg width={18} height={18}>
                    <use href={`${sprite}#icon-cross-small`} />
                  </svg>
                </span>
              )}
              {!errors.password && touchedFields.password && (
                <span className={css.iconCheck}>
                  <svg width={18} height={18}>
                    <use href={`${sprite}#icon-check`} />
                  </svg>
                </span>
              )}
              {errors.password && (
                <p className={css.error}>{errors.password.message}</p>
              )}

              <button
                className={css.eyeIcon}
                type="button"
                onClick={togglePasswordVisibility}
              >
                <svg width={18} height={18}>
                  <use
                    href={
                      showPassword
                        ? `${sprite}#icon-eye`
                        : `${sprite}#icon-eye-off`
                    }
                  />
                </svg>
              </button>
            </label>

            <label className={css.inputLabel}>
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                placeholder="Confirm password"
                className={`${css.input} ${
                  errors.confirmPassword
                    ? css.inputError
                    : touchedFields.confirmPassword && !errors.confirmPassword
                    ? css.inputSuccess
                    : watchFields.confirmPassword
                    ? css.inputActive
                    : ''
                }`}
                {...register('confirmPassword')}
              />
              {errors.confirmPassword && (
                <span className={css.iconCross}>
                  <svg width={18} height={18}>
                    <use href={`${sprite}#icon-cross-small`} />
                  </svg>
                </span>
              )}
              {!errors.confirmPassword && touchedFields.confirmPassword && (
                <span className={css.iconCheck}>
                  <svg width={18} height={18}>
                    <use href={`${sprite}#icon-check`} />
                  </svg>
                </span>
              )}
              {errors.confirmPassword && (
                <p className={css.error}>{errors.confirmPassword.message}</p>
              )}

              <button
                className={css.eyeIcon}
                type="button"
                onClick={toggleConfirmPasswordVisibility}
              >
                <svg width={18} height={18}>
                  <use
                    href={
                      showConfirmPassword
                        ? `${sprite}#icon-eye`
                        : `${sprite}#icon-eye-off`
                    }
                  />
                </svg>
              </button>
            </label>
          </div>

          <button className={css.button} type="submit">
            Registration
          </button>
        </form>

        <p className={css.linkText}>
          Already have an account?&nbsp;
          <Link className={css.link} to="/login">
            Login
          </Link>
        </p>
      </div>
    </>
  );
};

export default RegistrationForm;
