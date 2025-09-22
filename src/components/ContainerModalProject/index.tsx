import React from 'react';
import * as S from './styles';

interface IContainerProps extends React.HTMLProps<HTMLDivElement> {
  children: React.ReactNode;
  title?: string;
  icon?: React.ReactNode;
}

export const ContainerModalProject = ({ children, title, icon }: IContainerProps) => {
  return (
    <S.Container >
      {(title || icon) && (
        <S.Header>
          {icon && <S.IconWrapper>{icon}</S.IconWrapper>}
          {title && <S.Title>{title}</S.Title>}
        </S.Header>
      )}
      {children}
    </S.Container>
  );
};
