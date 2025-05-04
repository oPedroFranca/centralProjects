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
}) => {

  return (
    <>
      <S.Input
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />

      {error && <S.ErrorMessage>{error}</S.ErrorMessage>}
    </>
  );
};

export default Input;
