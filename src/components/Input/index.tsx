import React from 'react';
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

const Input: React.FC<InputProps> = ({
  type = 'text',
  placeholder,
  onChange,
  value,
  error,
  leftIcon,
  ...rest
}) => (
  <S.Container>
    <S.InputWrapper>
      {leftIcon && <S.LeftIcon>{leftIcon}</S.LeftIcon>}

      <S.Input
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        hasLeftIcon={!!leftIcon}
        hasErrorMessage={!!error}
        {...rest}
      />

      {error && (<S.AlertIcon />)}
    </S.InputWrapper>

    {error && <ErrorMessage message={error} />}
  </S.Container>
);

export default Input;
