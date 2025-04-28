import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { loginUser } from '../../redux/auth/operations';
import { Link } from 'react-router-dom';
import { loginSchema } from '../../utils/validationSchemas';
import Title from '../Title/Title';
import toast from 'react-hot-toast';
import sprite from '../../assets/sprite.svg';
import css from './LoginForm.module.css';

const LoginForm = () => {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, touchedFields },
  } = useForm({
    resolver: yupResolver(loginSchema),
    mode: 'onBlur',
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const watchFields = watch();

  const onSubmit = async data => {
    const { email, password } = data;
    try {
      await dispatch(loginUser({ email, password }));
      toast.success('Login successful!');
      reset();
    } catch (error) {
      toast.error(`Login failed: ${error}`);
    }
  };

  return (
    <>
      <div className={css.formContainer}>
        <div>
          <Title>Log in</Title>
          <p className={css.text}>
            Welcome! Please enter your credentials to login to the platform:
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={css.inputWrapper}>
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
          </div>

          <button className={css.button} type="submit">
            Log In
          </button>
        </form>

        <p className={css.linkText}>
          Don't have an account?&nbsp;
          <Link className={css.link} to="/register">
            Register
          </Link>
        </p>
      </div>
    </>
  );
};

export default LoginForm;
