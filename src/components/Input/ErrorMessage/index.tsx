import React from 'react';
import * as S from './styles';

interface ErrorMessageProps {
  message: string;
}

const ErrorMessage = ({ message }: ErrorMessageProps) => (
  <S.ErrorWrapper>
    <S.AlertIcon data-testid="alert-icon" />
    <S.ErrorMessage>{message}</S.ErrorMessage>
  </S.ErrorWrapper>
);

export default ErrorMessage;
