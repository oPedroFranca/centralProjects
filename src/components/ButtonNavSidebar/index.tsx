import React, { ReactNode } from 'react';
import * as S from './styles';

interface ButtonNavSidebarProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  Text?: string;
  isSelected?: boolean;
  isMinimized: boolean;
  handleCategoryClick: () => void;
  icon?: ReactNode;
}

export const ButtonNavSidebar = ({
  Text,
  isSelected = false,
  isMinimized,
  handleCategoryClick,
  icon,
  ...rest
}: ButtonNavSidebarProps) => {
  return (
    <S.ButtonNavSidebar
      isSelected={isSelected}
      isMinimized={isMinimized}
      onClick={handleCategoryClick}
      title={isMinimized ? Text : undefined}
      {...rest}
    >
      {icon ? (
        <span>{icon}</span>
      ) : isSelected ? (
        <S.FolderOpen />
      ) : (
        <S.FolderClosed />
      )}

      {!isMinimized && <S.CategoryName>{Text}</S.CategoryName>}

      <S.HoverEffectDiv />
    </S.ButtonNavSidebar>
  );
};
