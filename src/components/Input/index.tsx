import React, { useState } from 'react';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import ErrorMessage from './ErrorMessage';
import * as S from './styles';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  type?: string;
  placeholder?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  value?: string | number;
  error?: string;
  leftIcon?: React.ReactNode;
}

export const Input: React.FC<InputProps> = ({
  type = 'text',
  placeholder,
  onChange,
  value,
  error,
  leftIcon,
  ...rest
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === 'password';
  const inputType = isPassword && showPassword ? 'text' : type;

  const togglePasswordVisibility = () => {
    setShowPassword(prev => !prev);
  };

  return (
    <S.Container>
      <S.InputWrapper>
        {leftIcon && <S.LeftIcon>{leftIcon}</S.LeftIcon>}

        <S.Input
          type={inputType}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          $hasLeftIcon={!!leftIcon}
          $hasErrorMessage={!!error}
          {...rest}
        />

        {isPassword && (
          <S.EyeIcon onClick={togglePasswordVisibility}>
            {showPassword ? <FiEyeOff size={16} /> : <FiEye size={16} />}
          </S.EyeIcon>
        )}

        {error &&
          <S.AlertIcon
            className={isPassword ? 'right-9' : 'right-3'}
          />
        }
      </S.InputWrapper>

      {error && <ErrorMessage message={error} />}
    </S.Container>
  );
};
