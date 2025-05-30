import { useEffect, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { useAuth } from '../../hooks/useAuth';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { editUserSchema } from '../../utils/validationSchemas';
import { editUser } from '../../redux/auth/operations';
import ModalContainer from '../ModalContainer/ModalContainer';
import sprite from '../../assets/sprite.svg';
import css from './ModalEditUser.module.css';

const ModalEditUser = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  const formDefaults = useMemo(
    () => ({
      avatar: user?.avatar || 'Avatar URL',
      name: user?.name || '',
      email: user?.email || '',
      phone: user?.phone || '+380',
    }),
    [user]
  );

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(editUserSchema),
    defaultValues: formDefaults,
  });

  useEffect(() => {
    if (isOpen) {
      reset(formDefaults);
    }
  }, [isOpen, reset, formDefaults]);

  const onSubmit = async data => {
    await dispatch(editUser(data)).unwrap();
    onClose();
  };

  return (
    <ModalContainer isOpen={isOpen} onClose={onClose}>
      <div className={css.modalContent}>
        <h2 className={css.title}>Edit information</h2>
        <div className={css.userAvatarWrapper}>
          {user?.avatar ? (
            <img src={user.avatar} alt="User avatar" />
          ) : (
            <svg className={css.userIcon}>
              <use href={`${sprite}#icon-user`} />
            </svg>
          )}
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className={css.form}>
          <div className={css.uploadBox}>
            <label className={css.avatarUrlWrapper}>
              <input
                type="text"
                {...register('avatar')}
                className={css.avatarUrlInput}
              />
            </label>

            <label className={css.avatarFile}>
              <input
                type="file"
                name="avatarFile"
                className={css.avatarFileInput}
              />
              <svg width={18} height={18} className={css.uploadIcon}>
                <use href={`${sprite}#icon-upload`} />
              </svg>
            </label>
          </div>
          {errors.avatar && (
            <span className={css.errorsEditUserAvatar}>
              {errors.avatar?.message}
            </span>
          )}

          <input type="text" {...register('name')} className={css.editUInput} />
          {errors.name && (
            <span className={css.errorsEditUser}>{errors.name?.message}</span>
          )}

          <input
            type="email"
            {...register('email')}
            className={css.editUInput}
          />
          {errors.email && (
            <span className={css.errorsEditUser}>{errors.email?.message}</span>
          )}

          <input type="tel" {...register('phone')} className={css.editUInput} />
          {errors.phone && (
            <span className={css.errorsEditUser}>{errors.phone?.message}</span>
          )}

          <button className={css.saveBtn} type="submit">
            Save
          </button>
        </form>
      </div>
    </ModalContainer>
  );
};

export default ModalEditUser;
