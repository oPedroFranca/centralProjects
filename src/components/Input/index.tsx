import React from 'react';
import * as S from './styles';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  type?: string;
  placeholder?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  value?: string | number;
  error?: string;
}

const Input: React.FC<InputProps> = ({
  type = 'text',
  placeholder,
  onChange,
  value,
  error,
  ...rest
}) => (
  <S.Container>
    <S.Input
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      hasErrorMessage={!!error}
      {...rest}
    />

    {error && (
      <S.ErrorWrapper>
        <S.ErrorMessage>{error}</S.ErrorMessage>
      </S.ErrorWrapper>
    )}
  </S.Container>
);

export default Input;
