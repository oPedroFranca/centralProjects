import React, { Children } from 'react';
import * as S from './styles';

interface IContainerProps extends React.HTMLProps<HTMLDivElement> {
  children: React.ReactNode;
}

export const Container = ({ children }: IContainerProps) => {
  return (
    <S.Container>{children}</S.Container>
  );
};
