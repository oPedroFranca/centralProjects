import React from 'react';
import * as S from './styles';

interface InputProps {
  type?: string;
  placeholder?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  value?: string | number;
}

const Input: React.FC<InputProps> = ({
  type = 'text',
  placeholder,
  onChange,
  value
}) => {

  return (
    <S.Input
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
    />
  );
};

export default Input;
