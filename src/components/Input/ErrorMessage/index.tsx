import React from 'react';
import * as S from './styles';

const ErrorMessage: React.FC<{ message: string }> = ({ message }) => (
  <S.ErrorWrapper>
    <S.AlertIcon />
    <S.ErrorMessage>{message}</S.ErrorMessage>
  </S.ErrorWrapper>
);

export default ErrorMessage;
